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

import Data from "@data/sliders/recent-projects";
import Link from "next/link";

// Dynamically import Swiper components
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

const RecentProjectsSlider = () => {

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
      {/* recent projects slider */}
      <section>
        <div className="container mil-p-120-30">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-between align-items-center flex-sm-row-reverse">
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

                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="mil-avatar-frame mil-up mil-mb-30">
                      <div className="mil-avatar mil-mb-30">
                        {/* Replace avatar img with next/image */}
                        <Image 
                          src={Data.avatar.image} 
                          alt={Data.avatar.name} 
                          width={80} // Estimate size, adjust if needed
                          height={80} // Estimate size, adjust if needed
                          style={{ borderRadius: '50%', objectFit: 'cover' }} // Maintain styles
                        />
                      </div>
                      <h5 className="mil-upper mil-mb-10">
                        {Data.avatar.name}
                      </h5>
                      <p className="mil-text-sm mil-dark-soft">
                        {Data.avatar.subname}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <ul className="mil-icon-list mil-mb-30">
                      {Data.links.map((item, key) => (
                        <li
                          key={`recent-projects-links-item-${key}`}
                          className="mil-hover mil-up"
                        >
                          <Link href={item.link} style={{ display: 'flex', alignItems: 'center' }}>
                            {/* Replace icon img with next/image */}
                            <Image 
                              src="/img/icons/11.svg" 
                              alt="icon" 
                              width={20} // Estimate size
                              height={20} // Estimate size
                              style={{ marginRight: '10px' }} // Add spacing
                              loading="lazy"
                            />
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                              sizes="(max-width: 992px) 100vw, 50vw" // Example sizes, adjust
                              priority={key === 0}
                              loading={key === 0 ? undefined : "lazy"}
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
      {/* recent projects slider end */}
    </>
  );
};
export default RecentProjectsSlider;
