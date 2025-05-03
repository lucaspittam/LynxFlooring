"use client";

// import { SliderProps } from "@common/sliderProps"; // Config is now applied directly
// import { Swiper, SwiperSlide } from "swiper/react"; // Will be dynamically imported
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Data from "@data/sliders/testimonial";
import Data2 from "@data/sliders/partners";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

// Dynamically import Swiper components
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

const TestimonialSlider = ({ showPartners = 1 }) => {
  useEffect(() => {
    ScrollAnimation();
  }, []);

  // Define Swiper configs directly or import from sliderProps if preferred and adapt
  const milReviewsSliderProps = {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      effect: "fade",
      lazy: true, // Consider if lazy loading Swiper slides is needed
      navigation: {
          prevEl: ".mil-process-prev", // Make sure these selectors exist and are unique
          nextEl: ".mil-process-next",
      },
      pagination: {
          el: ".mil-banner-pagination", // Make sure this selector exists and is unique
          type: "bullets",
          clickable: true,
      },
      modules: [EffectFade, Navigation, Pagination] // Add modules here
  };

  const milInfiniteSliderProps = {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 8000,
      autoplay: {
          delay: 0,
          disableOnInteraction: false,
      },
      loop: true,
      simulateTouch: false,
      allowTouchMove: false,
      watchSlidesProgress: false, // Optimization: disable features not explicitly needed
      observer: false,
      observeParents: false,
      resizeObserver: false,
      updateOnWindowResize: false,
      breakpoints: {
          768: {
              slidesPerView: 2,
          },
          992: {
              slidesPerView: 4,
          },
      },
      modules: [Autoplay] // Add modules here
  };


  return (
    <>
      {/* reviews */}
      <section className="mil-soft-bg mil-relative">
        {/* Replace background img with next/image */}
        <Image 
          src="/img/other/bg.svg" 
          className="mil-bg-img" 
          alt="background" 
          fill // Use fill for background images
          loading="lazy" // Defer loading offscreen images
          style={{ objectFit: 'cover' }} // Ensure proper scaling
        />

        <div className="container mil-p-120-120">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mil-mb-60">
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
            <div className="col-lg-7 mil-mt-suptitle-offset">
              {/* Ensure Swiper component is rendered only after dynamic import resolves */}
              {Swiper && SwiperSlide && (
                <Swiper
                  {...milReviewsSliderProps} // Spread the config including modules
                  className="swiper-container mil-reviews-slider"
                >
                  {Data.items.map((item, key) => (
                    <SwiperSlide
                      className="swiper-slide"
                      key={`testimonial-slider-item-${key}`}
                    >
                      <div
                        className="mil-review-frame mil-mb-30"
                        // Parallax attributes removed
                        // data-swiper-parallax-x="-200"
                        // data-swiper-parallax-opacity="0"
                      >
                        <div className="mil-reviev-head mil-up">
                          <div className="mil-left">
                            <div className="mil-quote">
                              {/* Replace icon img with next/image */}
                              <Image 
                                src="/img/icons/12.svg" 
                                alt="quote icon" 
                                width={24} // Provide width
                                height={24} // Provide height
                              />
                            </div>
                            <div className="mil-review-avatar">
                              {/* Replace avatar img with next/image */}
                              <Image 
                                src={item.image} 
                                alt={item.name} 
                                width={60} // Provide width
                                height={60} // Provide height
                                style={{ borderRadius: '50%', objectFit: 'cover' }} // Maintain styling if needed
                              />
                            </div>
                          </div>
                          <div className="mil-name">
                            <h6 className="mil-upper">{item.name}</h6>
                            <p className="mil-text-sm mil-dark-soft">
                              {item.role}
                            </p>
                          </div>
                        </div>
                        <div className="mil-up">
                          <p
                            className="mil-review-text"
                            // data-swiper-parallax="-60" // Parallax attribute removed
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <div className="mil-nav-buttons mil-reviews-nav mil-up">
                <div className="mil-slider-button mil-process-prev">Prev</div>
                <div className="mil-slider-button mil-process-next">Next</div>
              </div>
            </div>
            {showPartners == 1 && (
              <div className="col-12 mil-p-120-0">
                <div className="mil-partners">
                  <div className="mil-background-grid mil-softened"></div>
                   {/* Ensure Swiper component is rendered only after dynamic import resolves */}
                  {Swiper && SwiperSlide && (
                    <Swiper
                      {...milInfiniteSliderProps} // Spread the config including modules
                      className="swiper-container mil-infinite-show mil-up"
                    >
                      {Data2.items.map((item, key) => (
                        <SwiperSlide
                          className="swiper-slide"
                          key={`partners-slider-item-${key}`}
                        >
                          <a
                            href={item.link}
                            target="_blank"
                            className="mil-partner-frame"
                            // Add position relative for fill Image
                            style={{ position: 'relative', display: 'inline-block', width: '150px', height: '80px' }} 
                          >
                            {/* Replace partner img with next/image */}
                            <Image 
                              src={item.image} 
                              alt={item.alt} 
                              fill // Use fill to fit the anchor container
                              sizes="(max-width: 768px) 50vw, (max-width: 992px) 25vw, 150px" // Provide sizes based on layout/breakpoints
                              style={{ objectFit: 'contain' }} // Maintain aspect ratio
                              loading="lazy" // Defer loading offscreen images
                            />
                          </a>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* reviews end */}
    </>
  );
};
export default TestimonialSlider;
