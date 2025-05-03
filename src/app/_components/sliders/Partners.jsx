"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { memo } from 'react';

import Data from "@data/sliders/partners";

// Remove the Modern Background for better performance
const PartnersSlider = memo(({ bgStyle }) => {
  // Use fewer items in the loop for better performance
  const optimizedItems = Data.items.slice(0, 6);

  return (
    <>
      <div className={`mil-${bgStyle || 'soft'}-bg mil-partners mil-relative mil-section-off-screen`}>
        {bgStyle == "soft" && (
          <div className="mil-bg-img-container">
            <Image 
              src="/img/other/bg.svg" 
              alt="background" 
              fill
              sizes="100vw"
              loading="lazy"
            />
          </div>
        )}

        <div className="container mil-p-120-120">
          <div className="mil-partners-wrapper">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              loop={true}
              simulateTouch={false}
              allowTouchMove={false}
              watchSlidesProgress={false}
              observer={false}
              observeParents={false}
              updateOnWindowResize={false}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
              className="swiper-container mil-infinite-show"
            >
              {optimizedItems.map((item, key) => {
                // Define base style with increased height
                let itemStyle = { width: "150px", height: "150px", position: "relative" }; // Increased base height to 100px
                // Check if it's the 6th item (index 5) and apply modified style
                if (key === 5) { 
                  // Keep width 200px, set height to 100px
                  itemStyle = { ...itemStyle, width: "200px", height: "150px" }; 
                }

                return (
                  <SwiperSlide
                    className="swiper-slide"
                    key={`partners-slider-item-${key}`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      className="mil-partner-frame"
                      style={itemStyle} // Apply the dynamic style
                    >
                      <Image 
                        src={item.image} 
                        alt={item.alt} 
                        fill
                        // Sizes relate more to width, keep as is for now
                        sizes={key === 5 ? "200px" : "150px"} 
                        style={{ objectFit: "contain" }}
                        loading="lazy"
                      />
                    </a>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
});

PartnersSlider.displayName = 'PartnersSlider';

export default PartnersSlider;
