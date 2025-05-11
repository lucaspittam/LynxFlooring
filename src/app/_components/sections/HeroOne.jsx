"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState, memo } from "react";

// Simplified HeroOne component
const HeroOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Use requestAnimationFrame for smoother initialization
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  return (
    <>
      {/* banner */}
      <section className="mil-banner">
        {/* Removed mil-dynamic-bg and mil-gradient-overlay for potential performance gain */}
        {/* <div className="mil-dynamic-bg">
          <div className="mil-gradient-overlay"></div>
        </div> */}

        <div className="mil-bg-img-container">
          {/* Developer TODO: Ensure the source image (Data.bg_image) is optimized (e.g., WebP/AVIF format, appropriate dimensions, and compression). */}
          <Image
            src={Data.bg_image}
            alt="background"
            fill
            priority
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              // Apply filter initially and remove conditional logic
              filter: "grayscale(100%)", // Always grayscale -- Restored
            }}
          />
        </div>

        <div
          className="mil-overlay"
          style={{
            background:
              "linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
          }}
        />

        <div className="container">
          <div className="mil-banner-content">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="mil-mb-90">
                  <h1
                    className={`mil-upper mil-light mil-mb-60 ${isVisible ? 'mil-fade-in' : 'mil-hidden'}`}
                    style={{
                      transitionDelay: "0.2s",
                      textAlign: "center"
                    }}
                    dangerouslySetInnerHTML={{ __html: Data.title }}
                  />
                  <p
                    className={`mil-light mil-mb-60 ${isVisible ? 'mil-fade-in' : 'mil-hidden'}`}
                    style={{ 
                      transitionDelay: "0.3s",
                      fontSize: "1.1rem",
                      lineHeight: "1.5",
                      color: "rgba(255, 255, 255, 0.85)",
                      maxWidth: "600px", 
                      letterSpacing: "0.02em",
                      margin: "0 auto",
                      textAlign: "center" 
                    }}
                    dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(HeroOne);