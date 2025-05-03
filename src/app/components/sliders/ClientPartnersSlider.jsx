"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Data from "@data/sliders/partners";

// Lightweight partner carousel using CSS animation
export default function ClientPartnersSlider() {
  const [items, setItems] = useState([]);
  // Removed currentPosition state

  useEffect(() => {
    // Get first 6 items only for better performance
    const optimizedItems = Data.items.slice(0, 6);
    setItems(optimizedItems);
    
    // Removed setInterval logic
  }, []); // Effect runs only once on mount

  return (
    <div 
      className="mil-partners mil-relative mil-section-off-screen"
      style={{ backgroundColor: '#ffffff' }} // Set background to white
    >
      {/* Removed the background image div */}
      
      <div className="container mil-p-120-120">
        <div className="mil-partners-wrapper"
             style={{ 
               overflow: 'hidden',
               position: 'relative'
             }}>
          {/* Added mil-partners-scroll class for CSS animation */}
          <div 
            className="mil-partners-scroll" 
            style={{ 
              display: 'flex', 
              // Removed transform and transition inline styles
              alignItems: 'center' // Added vertical alignment
            }}
          >
            {/* Duplicate items for infinite effect - kept duplication */}
            {[...items, ...items, ...items].map((item, key) => {
              // Determine if this is one of the 6th items in the duplicated array
              const isSixthItem = (key % items.length) === 5;
              
              // Base style with increased height
              let itemStyle = { 
                flex: '0 0 150px',
                height: '120px', // Set base height
                margin: '0 30px' 
              };

              // Apply wider style if it's the 6th item
              if (isSixthItem) {
                itemStyle.flex = '0 0 200px'; // Increase flex-basis (width)
              }

              return (
                <div
                  className="partner-item"
                  key={`partners-slider-item-${key}`}
                  style={itemStyle} // Apply dynamic style
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="mil-partner-frame"
                    // Set explicit height on the anchor to match the div for fill to work reliably
                    style={{ width: "100%", height: "100%", position: "relative", display: 'block' }} 
                  >
                    <Image 
                      src={item.image} 
                      alt={item.alt} 
                      fill
                      // Adjust sizes based on the item width
                      sizes={isSixthItem ? "(max-width: 768px) 160px, 200px" : "(max-width: 768px) 120px, 150px"}
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
