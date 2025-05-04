"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import styles from "./USMap.module.css";

const geoUrl = "/states-10m.json";

const USMap = ({ locations }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const mapRef = useRef(null);
  const startPanRef = useRef(null);

  // Convert city names to coordinates and add company names
  const locationData = {
    Portland: {
      coordinates: [-122.6784, 45.5155],
      companyName: "Floor Solutions",
      website: "https://www.floorsol.com",
    },
    Kent: {
      coordinates: [-122.2348, 47.3809],
      companyName: "G&W Commercial Interiors",
      website: "https://www.gwcinteriors.com/",
    },
    "Fort Lauderdale": {
      coordinates: [-80.1373, 26.1224],
      companyName: "Resource4Floors",
      website: "https://www.resource4floors.com",
    },
    Lincoln: {
      coordinates: [-96.6782, 40.8258],
      companyName: "MidWest Floor Covering",
      website: "https://www.mwfloor.com/",
    },
    Livermore: {
      coordinates: [-121.768, 37.6819],
      companyName: "Flooring Solutions",
      website: "https://www.flooring-solutions.com/",
    },
    "New York": {
      coordinates: [-74.006, 40.7128],
      companyName: "Shehadi Commercial Flooring",
      website: "https://www.shehadi.com",
    },
    Fairfield: {
      coordinates: [-74.3176, 40.8759],
      companyName: "Shehadi Commercial Flooring",
      website: "https://www.shehadi.com",
    },
  };

  const handleMarkerClick = (location, evt) => {
    try {
      evt.stopPropagation(); // Prevent map click from closing tooltip
      
      // If panning, don't trigger click
      if (isPanning) return;
  
      // Toggle selected state - if clicking the same marker, close it
      if (selectedMarker?.city === location.city) {
        setSelectedMarker(null);
        setTooltipContent("");
        return;
      }
      
      // Set new selected marker
      setSelectedMarker(location);
  
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      // Calculate tooltip dimensions (approximate)
      const tooltipWidth = 260; // minWidth of tooltip
      const tooltipHeight = 180; // approximate height based on content
  
      // Calculate initial position
      let x = evt.clientX;
      let y = evt.clientY - 40;
  
      // Adjust x position if tooltip would go off screen
      if (x + tooltipWidth / 2 > viewportWidth) {
        x = viewportWidth - tooltipWidth / 2 - 20;
      } else if (x - tooltipWidth / 2 < 0) {
        x = tooltipWidth / 2 + 20;
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
          <button 
            className={styles.closeButton} 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMarker(null);
              setTooltipContent("");
            }}
            aria-label="Close"
          >
            ×
          </button>
          <div className={styles.markerIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="10" fill="#C2D720" />
              <path 
                d="M8 12L11 15L16 9" 
                stroke="#242424" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.companyName}>
            {locationData[location.city].companyName}
          </div>
          <div className={styles.locationText}>
            {location.city}, {location.state}
          </div>
          <a
            href={locationData[location.city].website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteLink}
            onClick={(e) => e.stopPropagation()}
          >
            Visit Website →
          </a>
        </div>
      );
    } catch (error) {
      console.error('Error in handleMarkerClick:', error);
    }
  };

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mapRef.current && !mapRef.current.contains(e.target) || 
          (e.target.closest('.rsm-geography') && !e.target.closest('.rsm-marker'))) {
        setSelectedMarker(null);
        setTooltipContent("");
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Handle window resize for responsive positioning
  useEffect(() => {
    const handleResize = () => {
      if (selectedMarker) {
        // Re-trigger click to recalculate tooltip position
        setSelectedMarker(null);
        setTooltipContent("");
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedMarker]);

  // Track panning to prevent accidental marker clicks
  const handleMouseDown = (e) => {
    startPanRef.current = { x: e.clientX, y: e.clientY };
    setIsPanning(false);
  };

  const handleMouseMove = (e) => {
    if (!startPanRef.current) return;
    
    const deltaX = Math.abs(e.clientX - startPanRef.current.x);
    const deltaY = Math.abs(e.clientY - startPanRef.current.y);
    
    // If moved more than 5px, consider it panning
    if (deltaX > 5 || deltaY > 5) {
      setIsPanning(true);
    }
  };

  const handleMouseUp = () => {
    startPanRef.current = null;
    // Reset panning state after a brief delay to allow click events
    setTimeout(() => {
      setIsPanning(false);
    }, 100);
  };

  return (
    <div className={styles.mapContainer} ref={mapRef}>
      <div className={styles.mapControls}>
        <button className={styles.resetButton} onClick={() => {
          setSelectedMarker(null);
          setTooltipContent("");
        }}>Reset Map</button>
      </div>
      
      <ComposableMap projection="geoAlbersUsa" className={styles.composableMap}>
        <ZoomableGroup 
          center={[-96, 38]} 
          zoom={1.05} 
          minZoom={1.05} 
          maxZoom={1.05}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#2a2a2a"
                  stroke="#3d3d3d"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      outline: "none",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    },
                    hover: {
                      fill: "#333333",
                      outline: "none",
                      cursor: "default",
                    },
                    pressed: {
                      fill: "#2a2a2a",
                      outline: "none",
                      cursor: "default",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {locations.map((location, index) => {
            const locationInfo = locationData[location.city];
            if (locationInfo) {
              const isSelected = selectedMarker?.city === location.city;
              return (
                <Marker
                  key={index}
                  coordinates={locationInfo.coordinates}
                  onClick={(evt) => handleMarkerClick(location, evt)}
                >
                  <g
                    className={`${styles.markerGroup} ${isSelected ? styles.selected : ""}`}
                    onMouseEnter={(e) => {
                      e.currentTarget.classList.add(styles.hovered);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.classList.remove(styles.hovered);
                    }}
                  >
                    {/* Enlarged hit area (transparent) */}
                    <circle
                      r="20"
                      fill="transparent"
                      className={styles.hitArea}
                    />
                    
                    {/* Pulse animation */}
                    {isSelected && (
                      <circle
                        r="15"
                        className={styles.markerPulse}
                        opacity={1}
                      />
                    )}
                    
                    {/* Marker outer circle */}
                    <circle
                      r="8"
                      fill={isSelected ? "#e0f000" : "#C2D720"}
                      stroke="#242424"
                      strokeWidth="2"
                      className={styles.markerOuter}
                    />
                    
                    {/* Inner circle */}
                    <circle r="3" fill="#242424" />
                    
                    {/* City name - always visible */}
                    <text
                      textAnchor="middle"
                      y={20}
                      fontSize="10"
                      fill="#fff"
                      className={styles.markerLabel}
                      style={{ opacity: 1 }}
                    >
                      {location.city}
                    </text>
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
          className={styles.tooltip}
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
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
