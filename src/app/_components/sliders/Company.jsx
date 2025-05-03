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

import Data from "@data/sliders/company";

// Dynamically import Swiper components
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

const CompanySlider = () => {

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
      {/* company slider */}
      <section>
        <div className="container mil-p-0-30">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="mil-mb-60">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                />
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <p
                  className="mil-up mil-mb-40"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />

                {Data.signature != undefined && (
                  <div className="row align-items-center mil-up">
                    <div className="col-lg-5 mil-mb-30">
                      <h5 className="mil-upper mil-mb-10">
                        {Data.signature.name}
                      </h5>
                      <p>{Data.signature.subname}</p>
                    </div>
                    <div className="col-lg-6 mil-mb-30">
                      <h2 className="mil-font-2 mil-thin">
                        {Data.signature.text}
                      </h2>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-illustration-slider-frame mil-up mil-mb-90">
                {/* Ensure Swiper component is rendered only after dynamic import resolves */}
                {Swiper && SwiperSlide && (
                  <Swiper
                    {...milIllustrationSliderProps}
                    className="swiper-container mil-illustration-slider"
                  >
                    {Data.items.map((item, key) => (
                      <SwiperSlide
                        className="swiper-slide"
                        key={`illustration-slider-item-${key}`}
                      >
                        <div
                          className="mil-illustration"
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
                              sizes="(max-width: 992px) 100vw, 50vw" // Example sizes, adjust based on layout
                              priority={key === 0} // Prioritize the first image
                              loading={key === 0 ? undefined : "lazy"} // Lazy load others
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
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
          </div>
        </div>
      </section>
      {/* company slider end */}
    </>
  );
};
export default CompanySlider;
