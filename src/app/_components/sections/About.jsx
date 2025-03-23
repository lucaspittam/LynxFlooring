"use client";

import Data from "@data/sections/about.json";
import Link from "next/link";
import ModernBackground from "../../_common/modernBackgrounds";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && counterRef.current) {
          const target = parseInt(
            counterRef.current.getAttribute("data-number"),
          );
          let count = 0;
          const increment = Math.ceil(target / 40);
          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              clearInterval(timer);
              counterRef.current.textContent = target;
            } else {
              counterRef.current.textContent = count;
            }
          }, 60);
        }
      },
      { threshold: 0.1 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* about */}
      <section className="mil-relative">
        <div className="container mil-p-0-30">
          {/* Consistent background pattern with subtle variation */}
          <ModernBackground type="combined" softened={true} />

          <div className="row justify-content-between align-items-center flex-sm-row-reverse">
            <div className="col-lg-5">
              <div className="mil-mb-90 mil-about-content mil-fade-in">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                />
                <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <p
                  className="mil-up mil-mb-40 mil-text-reveal"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />
                <Link
                  href={Data.button.link}
                  className="mil-link mil-upper mil-up mil-link-hover"
                >
                  {Data.button.label}
                  <span className="mil-arrow mil-arrow-animated">
                    <img src="/img/icons/2.svg" alt="arrow" />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-illustration mil-up mil-mb-90 mil-about-image">
                <div className="mil-image-frame mil-parallax-image">
                  <img
                    src={Data.image.url}
                    alt={Data.image.alt}
                    className="mil-scale"
                    data-value-1="1"
                    data-value-2="2"
                    style={{
                      filter: "grayscale(70%)",
                      transform: "scale(0.5)",
                      transformOrigin: "center center",
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="mil-about-counter mil-counter-box">
                  <h1
                    className="mil-counter mil-right mil-mb-10"
                    data-number={Data.number.value}
                    ref={counterRef}
                  >
                    0
                  </h1>
                  <h5
                    className="mil-upper mil-right"
                    dangerouslySetInnerHTML={{ __html: Data.number.label }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
    </>
  );
};

export default AboutSection;
