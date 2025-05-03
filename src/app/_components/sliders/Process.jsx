"use client";

// import { SliderProps } from "@common/sliderProps"; // Config is now applied directly
// import { Swiper, SwiperSlide } from "swiper/react"; // Will be dynamically imported
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import Swiper modules for milProcessSlider
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Data from "@data/sliders/process.json";

// Dynamically import Swiper components
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

const ProcessSlider = ({ bgStyle = "default", paddingTop = "120" }) => {
  
  // Define Swiper config directly
  const milProcessSliderProps = {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      lazy: true,
      navigation: {
          prevEl: ".mil-process-prev",
          nextEl: ".mil-process-next",
      },
      pagination: {
          el: ".mil-banner-pagination", // Check if this selector is correct/unique for process slider
          type: "bullets",
          clickable: true,
      },
      modules: [Navigation, Pagination] // Add modules here
  };

  return (
    <>
      {/* process slider */}
      <section className={`mil-${bgStyle}-bg mil-relative`}>
        {bgStyle == "soft" && (
          // Replace background img with next/image 
          <Image 
            src="/img/other/bg.svg" 
            className="mil-bg-img" 
            alt="background" 
            fill 
            loading="lazy"
            style={{ objectFit: 'cover' }}
          />
        )}

        <div className={`container mil-p-${paddingTop}-60`}>
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="mil-mb-90">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                />
                <h2
                  className="mil-upper mil-up"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-adaptive-right mil-up mil-mb-90">
                <div className="mil-nav-buttons">
                  <div className="mil-slider-button mil-process-prev">Prev</div>
                  <div className="mil-slider-button mil-process-next">Next</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ensure Swiper component is rendered only after dynamic import resolves */}
          {Swiper && SwiperSlide && (
            <Swiper
              {...milProcessSliderProps}
              className="swiper-container mil-process-slider"
            >
              {/* Note: Original had an extra <div className="swiper-wrapper">, which is automatically created by Swiper/react component. Removing it. */}
              {Data.slides.map((slide, slide_key) => (
                <SwiperSlide
                  className="swiper-slide"
                  key={`process-slider-item-${slide_key}`}
                >
                  {/* Note: Original had an extra <div className="swiper-slide">. Removing it. */}
                  <div className="row">
                    {slide.map((item, key) => (
                      <div
                        className="col-lg-4"
                        key={`process-slider-item-${slide_key}-step-${key}`}
                      >
                        <div
                          className="mil-process-box mil-icon-box mil-up mil-mb-60"
                          // Parallax attributes removed
                          // data-swiper-parallax-duration="400"
                          // data-swiper-parallax="-900"
                          // data-swiper-parallax-scale=".8"
                          // data-swiper-parallax-opacity="0"
                        >
                          <div className="mil-icon mil-icon-border mil-mb-30">
                            {/* Replace icon img with next/image */}
                            <Image 
                              src="/img/icons/11.svg" 
                              alt="icon" 
                              width={24} // Provide width
                              height={24} // Provide height
                              loading="lazy"
                            />
                          </div>
                          <h4 className="mil-upper mil-mb-30">
                            {item.title}
                          </h4>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
      {/* process slider end */}
    </>
  );
};
export default ProcessSlider;
