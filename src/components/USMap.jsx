'use client';

import React, { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from 'react-simple-maps';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const USMap = ({ locations }) => {
    const [tooltipContent, setTooltipContent] = useState("");
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [selectedMarker, setSelectedMarker] = useState(null);

    // Convert city names to coordinates and add company names
    const locationData = {
        'Portland': {
            coordinates: [-122.6784, 45.5155],
            companyName: 'Floor Solutions',
            website: 'https://www.floorsol.com'
        },
        'Kent': {
            coordinates: [-122.2348, 47.3809],
            companyName: 'G&W Commercial Interiors',
            website: 'https://www.gwcinteriors.com/'
        },
        'Fort Lauderdale': {
            coordinates: [-80.1373, 26.1224],
            companyName: 'Resource4Floors',
            website: 'https://www.resource4floors.com'
        },
        'Lincoln': {
            coordinates: [-96.6782, 40.8258],
            companyName: 'MidWest Floor Covering',
            website: 'https://www.mwfloor.com/'
        },
        'Livermore': {
            coordinates: [-121.7680, 37.6819],
            companyName: 'Flooring Solutions',
            website: 'https://www.flooring-solutions.com/'
        },
        'New York': {
            coordinates: [-74.0060, 40.7128],
            companyName: 'Shehadi Commercial Flooring',
            website: 'https://www.shehadi.com'
        }
    };

    const handleMarkerClick = (location, evt) => {
        evt.stopPropagation(); // Prevent map click from closing tooltip
        setSelectedMarker(location);

        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate tooltip dimensions (approximate)
        const tooltipWidth = 200; // minWidth of tooltip
        const tooltipHeight = 160; // approximate height based on content

        // Calculate initial position
        let x = evt.clientX;
        let y = evt.clientY - 40;

        // Adjust x position if tooltip would go off screen
        if (x + tooltipWidth/2 > viewportWidth) {
            x = viewportWidth - tooltipWidth/2 - 20;
        } else if (x - tooltipWidth/2 < 0) {
            x = tooltipWidth/2 + 20;
        }

        // Adjust y position if tooltip would go off screen
        if (y + tooltipHeight > viewportHeight) {
            y = viewportHeight - tooltipHeight - 20;
        } else if (y < 0) {
            y = 20;
        }

        setTooltipPosition({ x, y });
        
        setTooltipContent(
            <div>
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
                <div style={{ 
                    fontWeight: '600',
                    fontSize: '16px',
                    marginBottom: '6px',
                    color: '#C2D720',
                    letterSpacing: '0.5px'
                }}>
                    {locationData[location.city].companyName}
                </div>
                <div style={{ 
                    color: '#fff',
                    opacity: 0.9,
                    fontSize: '14px',
                    marginBottom: '8px'
                }}>
                    {location.city}, {location.state}
                </div>
                <a 
                    href={locationData[location.city].website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'block',
                        fontSize: '14px',
                        color: '#C2D720',
                        textDecoration: 'none',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '8px',
                        marginTop: '4px',
                        cursor: 'pointer'
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    Visit Website →
                </a>
            </div>
        );
    };

    // Close tooltip when clicking outside
    React.useEffect(() => {
        const handleClickOutside = () => {
            setSelectedMarker(null);
            setTooltipContent("");
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ComposableMap
                projection="geoAlbersUsa"
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'default'
                }}
            >
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
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    },
                                    hover: {
                                        fill: "#2a2a2a",
                                        outline: 'none',
                                        cursor: 'default'
                                    },
                                    pressed: {
                                        fill: "#2a2a2a",
                                        outline: 'none',
                                        cursor: 'default'
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
                                onClick={(evt) => handleMarkerClick(location, evt)}
                            >
                                <g
                                    style={{
                                        cursor: 'pointer',
                                        transform: 'translate(-12, -24)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!selectedMarker) {
                                            handleMarkerClick(location, e);
                                        }
                                        e.currentTarget.style.transform = 'translate(-12, -28)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!selectedMarker) {
                                            setTooltipContent("");
                                        }
                                        e.currentTarget.style.transform = 'translate(-12, -24)';
                                    }}
                                >
                                    <circle
                                        r="8"
                                        fill={selectedMarker?.city === location.city ? '#e0f000' : '#C2D720'}
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
            </ComposableMap>
            {tooltipContent && (
                <div
                    style={{
                        position: 'fixed',
                        top: tooltipPosition.y,
                        left: tooltipPosition.x,
                        transform: 'translateX(-50%)',
                        backgroundColor: '#242424',
                        color: 'white',
                        padding: '10px 14px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: '500',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        zIndex: 1000,
                        minWidth: '200px',
                        textAlign: 'center'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {tooltipContent}
                </div>
            )}
        </div>
    );
};

export default USMap; 