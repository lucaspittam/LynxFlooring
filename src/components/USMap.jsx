'use client';

import React, { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const USMap = ({ locations }) => {
    const [tooltipContent, setTooltipContent] = useState("");
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    // Convert city names to coordinates and add company names
    const locationData = {
        'Portland': {
            coordinates: [-122.6784, 45.5155],
            companyName: 'Floor Solutions'
        },
        'Kent': {
            coordinates: [-122.2348, 47.3809],
            companyName: 'G&W Commercial Interiors'
        },
        'Fort Lauderdale': {
            coordinates: [-80.1373, 26.1224],
            companyName: 'Resource4Floors'
        },
        'Lincoln': {
            coordinates: [-96.6782, 40.8258],
            companyName: 'MidWest Floor Covering'
        },
        'Livermore': {
            coordinates: [-121.7680, 37.6819],
            companyName: 'Flooring Solutions'
        },
        'New York': {
            coordinates: [-74.0060, 40.7128],
            companyName: 'Shehadi Commercial Flooring'
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ComposableMap
                projection="geoAlbersUsa"
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#2a2a2a"
                                    stroke="#3d3d3d"
                                    strokeWidth={0.5}
                                    style={{
                                        default: {
                                            outline: 'none',
                                            transition: 'all 0.3s ease'
                                        },
                                        hover: {
                                            fill: "#3a3a3a",
                                            outline: 'none',
                                            transition: 'all 0.3s ease'
                                        },
                                        pressed: {
                                            fill: "#3a3a3a",
                                            outline: 'none'
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    {locations.map((location, index) => {
                        const locationInfo = locationData[location.city];
                        if (locationInfo) {
                            return (
                                <Marker 
                                    key={index} 
                                    coordinates={locationInfo.coordinates}
                                    onMouseEnter={(evt) => {
                                        setTooltipContent(
                                            <div>
                                                {/* Company Logo/Icon */}
                                                <div style={{
                                                    marginBottom: '8px'
                                                }}>
                                                    <svg 
                                                        width="24" 
                                                        height="24" 
                                                        viewBox="0 0 24 24" 
                                                        fill="none" 
                                                        stroke="#C2D720" 
                                                        strokeWidth="2"
                                                        style={{ marginBottom: '-4px' }}
                                                    >
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                                        <circle cx="12" cy="10" r="3"/>
                                                    </svg>
                                                </div>
                                                {/* Company Name */}
                                                <div style={{ 
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    marginBottom: '6px',
                                                    color: '#C2D720',
                                                    letterSpacing: '0.5px'
                                                }}>
                                                    {locationInfo.companyName}
                                                </div>
                                                {/* Location */}
                                                <div style={{ 
                                                    color: '#fff',
                                                    opacity: 0.9,
                                                    fontSize: '14px',
                                                    marginBottom: '8px'
                                                }}>
                                                    {location.city}, {location.state}
                                                </div>
                                                {/* Additional Info */}
                                                <div style={{
                                                    fontSize: '12px',
                                                    color: '#999',
                                                    borderTop: '1px solid rgba(255,255,255,0.1)',
                                                    paddingTop: '8px',
                                                    marginTop: '4px'
                                                }}>
                                                    Click to visit website
                                                </div>
                                            </div>
                                        );
                                        setTooltipPosition({ 
                                            x: evt.clientX, 
                                            y: evt.clientY 
                                        });
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                >
                                    <g
                                        style={{
                                            cursor: 'pointer',
                                            transform: 'translate(-12, -24)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translate(-12, -28)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translate(-12, -24)';
                                        }}
                                    >
                                        <circle
                                            r="8"
                                            fill="#C2D720"
                                            stroke="#242424"
                                            strokeWidth="2"
                                            cx="12"
                                            cy="12"
                                            style={{
                                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                                            }}
                                        />
                                        <circle
                                            r="3"
                                            fill="#242424"
                                            cx="12"
                                            cy="12"
                                        />
                                    </g>
                                </Marker>
                            );
                        }
                        return null;
                    })}
                </ZoomableGroup>
            </ComposableMap>
            {tooltipContent && (
                <div
                    style={{
                        position: 'absolute',
                        top: tooltipPosition.y - 40,
                        left: tooltipPosition.x,
                        transform: 'translateX(-50%)',
                        backgroundColor: '#242424',
                        color: 'white',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '500',
                        pointerEvents: 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        zIndex: 1000,
                        minWidth: '200px',
                        textAlign: 'center'
                    }}
                >
                    {tooltipContent}
                </div>
            )}
        </div>
    );
};

export default USMap; 