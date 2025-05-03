"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState, memo, useCallback } from "react";

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
              // Apply filter along with transform based on visibility
              filter: isVisible ? "grayscale(100%)" : "grayscale(0%)",
              transform: isVisible ? "scale(1)" : "scale(0.98)",
              // Ensure transition applies to both transform and filter, adjusted for smoothness
              transition: "transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.9s cubic-bezier(0.25, 0.1, 0.25, 1)",
              willChange: "transform, filter" // Hint for browser optimization
            }}
          />
        </div>

        <div
          className="mil-overlay"
          style={{
            background:
              "linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
            backdropFilter: "blur(5px)",
          }}
        />

        <div className="container">
          <div className="mil-banner-content">
            <div className="row align-items-end">
              <div className="col-xl-7">
                <div className="mil-mb-90">
                  <h1
                    className={`mil-upper mil-light mil-mb-60 ${isVisible ? 'mil-fade-in' : 'mil-hidden'}`}
                    style={{ 
                      transitionDelay: "0.2s"
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
                      letterSpacing: "0.02em"
                    }}
                    dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                  />
                </div>
              </div>
              <div className="col-xl-5">
                <div className="row mil-mb-60">
                  {Data.numbers.map((item, key) => (
                    <div className="col-6" key={`hero-numbers-item-${key}`}>
                      <div
                        className={`mil-counter-frame mil-light mil-mb-30 ${isVisible ? 'mil-fade-in' : 'mil-hidden'}`}
                        style={{ 
                          transitionDelay: `${0.4 + (key * 0.15)}s`
                        }}
                      >
                        <h4 className="mil-accent mil-thin mil-mb-10">
                          <SimpleCounter 
                            value={item.value} 
                            isVisible={isVisible}
                            delay={0.4 + (key * 0.15)}
                          />
                          {item.valueAfter}
                        </h4>
                        <p
                          className="mil-light"
                          dangerouslySetInnerHTML={{ __html: item.label }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};

// Simplified counter component: Removed JS animation, displays value directly.
const SimpleCounter = memo(({ value, isVisible, delay }) => {
  // We don't need displayValue state or the complex effect anymore
  const targetValue = parseInt(value, 10);

  // Render the final value directly. The parent div handles the fade-in via transitionDelay.
  // We add a simple opacity transition here tied to isVisible for clarity, though parent handles it.
  return (
    <span style={{
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out',
      transitionDelay: `${delay}s` // Ensure span respects the delay too
    }}>
      {isNaN(targetValue) ? '0' : targetValue.toString()}
    </span>
  );
});

SimpleCounter.displayName = 'SimpleCounter';

export default memo(HeroOne);
