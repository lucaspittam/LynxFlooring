"use client";

// import { SliderProps } from "@common/sliderProps"; // No longer needed directly for modules
// import { Swiper, SwiperSlide } from "swiper/react"; // Will be dynamically imported
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import Swiper modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
// Base Swiper styles (usually needed)
import 'swiper/css'; 
// Required module styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// Autoplay doesn't usually have its own CSS, but include base if needed

import Data from "@data/sliders/hero-1.json";
import Link from "next/link";

import { useEffect, memo, useRef } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

// Dynamically import Swiper components
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });


const HeroOneSlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    ScrollAnimation();
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const timer = setTimeout(() => {
        swiperRef.current.swiper.update(); 
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* hero one slider */}
      <section className="mil-banner">
        {/* Ensure Swiper component is rendered only after dynamic import resolves */}
        {Swiper && SwiperSlide && (
          <Swiper
            ref={swiperRef}
            // Pass modules
            modules={[Navigation, Pagination, Autoplay, EffectFade]} 
            slidesPerView={1}
            spaceBetween={30}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect="fade"
            loop={true}
            navigation={{
              prevEl: ".mil-banner-prev",
              nextEl: ".mil-banner-next",
            }}
            pagination={{
              el: ".mil-banner-pagination",
              type: "bullets",
              clickable: true,
            }}
            className="swiper-container mil-banner-slider mil-scale"
            // data-value-1=".4" // Potentially related to custom animations/parallax, review if needed
            // data-value-2="1.4" // Potentially related to custom animations/parallax, review if needed
          >
            {Data.items.map((item, key) => (
              <SwiperSlide
                className="swiper-slide"
                key={`hero-one-slider-item-${key}`}
              >
                {/* Replace img with next/image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="mil-bg-img" 
                  fill={true} // Use fill for background-like images
                  priority={true} // Prioritize loading for hero images (LCP)
                  sizes="100vw" // Specify sizes for responsive loading
                  style={{ objectFit: 'cover', objectPosition: 'top' }} // Control image scaling and position
                  // Parallax attributes removed - review if needed and apply differently
                  // data-swiper-parallax-x="300"
                  // data-swiper-parallax-scale="1.3"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="mil-overlay" />

        <div className="container">
          <div className="mil-background-grid mil-top-space" />

          <div className="mil-banner-content">
            <div className="row justify-content-between align-items-end">
              <div className="col-xl-7">
                <div className="mil-mb-90">
                  <div
                    className="mil-light-soft mil-mb-60"
                    dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                  />
                  <h1
                    className="mil-upper mil-light mil-mb-60"
                    dangerouslySetInnerHTML={{ __html: Data.title }}
                  />
                  <Link
                    href={Data.button.link}
                    className="mil-link mil-light mil-upper"
                  >
                    {Data.button.label}
                    <span className="mil-arrow">
                      <img src="/img/icons/1.svg" alt="arrow" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="mil-banner-slider-panel mil-mb-60">
                  <div className="mil-banner-pagination mil-mb-30" />
                  <div className="mil-nav-buttons mil-light mil-mb-30">
                    <div className="mil-slider-button mil-banner-prev">
                      Prev
                    </div>
                    <div className="mil-slider-button mil-banner-next">
                      Next
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero one slider end */}
    </>
  );
};
export default memo(HeroOneSlider);
