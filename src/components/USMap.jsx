"use client";

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import styles from "./USMap.module.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const USMap = ({ locations }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [selectedMarker, setSelectedMarker] = useState(null);

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
        <div className={styles.markerIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C2D720"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
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
      </div>,
    );
  };

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setSelectedMarker(null);
      setTooltipContent("");
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.mapContainer}>
      <ComposableMap projection="geoAlbersUsa" className={styles.composableMap}>
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
                    fill: "#2a2a2a",
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
            return (
              <Marker
                key={index}
                coordinates={locationInfo.coordinates}
                onClick={(evt) => handleMarkerClick(location, evt)}
              >
                <g
                  className={`${styles.markerGroup} ${selectedMarker?.city === location.city ? styles.selected : ""}`}
                  onMouseEnter={(e) => {
                    if (!selectedMarker) {
                      handleMarkerClick(location, e);
                    }
                    e.currentTarget.classList.add(styles.hovered);
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedMarker) {
                      setTooltipContent("");
                    }
                    e.currentTarget.classList.remove(styles.hovered);
                  }}
                >
                  <circle
                    r="8"
                    fill={
                      selectedMarker?.city === location.city
                        ? "#e0f000"
                        : "#C2D720"
                    }
                    stroke="#242424"
                    strokeWidth="2"
                    cx="12"
                    cy="12"
                    className={styles.markerOuter}
                  />
                  <circle r="3" fill="#242424" cx="12" cy="12" />
                </g>
              </Marker>
            );
          }
          return null;
        })}
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
