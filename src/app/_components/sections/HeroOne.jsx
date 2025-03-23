"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HeroOne = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* banner */}
            <section className="mil-banner">
                {/* Modern dynamic background */}
                <div className="mil-dynamic-bg">
                    <div className="mil-shape-1 mil-parallax" data-value-1="-100" data-value-2="100"></div>
                    <div className="mil-shape-2 mil-parallax" data-value-1="-50" data-value-2="50"></div>
                    <div className="mil-shape-3 mil-parallax" data-value-1="-30" data-value-2="30"></div>
                    <div className="mil-gradient-overlay"></div>
                </div>

                <img 
                    src={Data.bg_image} 
                    className="mil-bg-img mil-scale" 
                    data-value-1=".4" 
                    data-value-2="1.4" 
                    alt="background"
                    style={{ filter: 'grayscale(100%)' }}
                />
                
                <div className="mil-overlay" style={{ 
                    background: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
                    backdropFilter: 'blur(5px)'
                }} />
                
                <div className="container">
                    <div className="mil-banner-content">
                        <div className="row align-items-end">
                            <div className="col-xl-7">
                                <div className="mil-mb-90">
                                    <h1 className="mil-upper mil-light mil-mb-60 mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="row mil-mb-60">
                                    {Data.numbers.map((item, key) => (
                                    <div className="col-6" key={`hero-numbers-item-${key}`}>
                                        <div className="mil-counter-frame mil-light mil-mb-30 mil-up" style={{ "--index": key + 1 }}>
                                            <h4 className="mil-accent mil-thin mil-mb-10"><span className="mil-counter" data-number={item.value}>0</span>{item.valueAfter}</h4>
                                            <p className="mil-light" dangerouslySetInnerHTML={{__html : item.label}} />
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
}
export default HeroOne;