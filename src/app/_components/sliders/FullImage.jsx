"use client";

// import { SliderProps } from "@common/sliderProps"; // Config is now applied directly
// import { Swiper, SwiperSlide } from "swiper/react"; // Will be dynamically imported
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import Swiper modules for milIllustrationSlider
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Dynamically import Swiper components
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

const FullImageSlider = ({ items }) => {

  // Define Swiper config directly
  const milIllustrationSliderProps = {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      effect: "fade",
      loop: true,
      lazy: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      navigation: {
          prevEl: ".mil-illustration-prev",
          nextEl: ".mil-illustration-next",
      },
      modules: [EffectFade, Autoplay, Navigation] // Add modules here
  };

  return (
    <>
      {/* full image slider */}
      <div className="mil-illustration-slider-frame mil-up">
        {Swiper && SwiperSlide && items && items.length > 0 && (
          <Swiper
            {...milIllustrationSliderProps}
            className="swiper-container mil-illustration-slider"
          >
            {items.map((item, key) => (
              <SwiperSlide
                className="swiper-slide"
                key={`full-image-slider-item-${key}`}
              >
                <div
                  className="mil-illustration mil-fw-item"
                  // Parallax attributes removed
                  // data-swiper-parallax-x="50"
                  // data-swiper-parallax-scale="1.3"
                >
                  <div className="mil-image-frame">
                    {/* Replace img with next/image */}
                    <Image 
                      src={item.image} 
                      alt={item.alt} 
                      fill
                      sizes="100vw" // Assume full width, adjust if needed based on context
                      priority={key === 0} // Prioritize the first image
                      loading={key === 0 ? undefined : "lazy"} // Lazy load subsequent images
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="container">
          <div className="mil-illustration-slider-nav mil-up">
            <div className="mil-nav-buttons">
              <div className="mil-slider-button mil-illustration-prev">
                Prev
              </div>
              <div className="mil-slider-button mil-illustration-next">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* full image slider end */}
    </>
  );
};
export default FullImageSlider;
