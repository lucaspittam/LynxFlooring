"use client";

import { useEffect, useRef, useState } from "react";

const ProjectsMasonry = ({ projects, categories }) => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const Isotope = require("isotope-layout");
      isotope.current = new Isotope(".mil-portfolio-grid", {
        itemSelector: ".mil-grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        },
        transitionDuration: '0.5s',
      });
    }
  }, [isClient]);

  useEffect(() => {
    if (isotope.current && isClient) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, isClient]);

  const handleFilterKeyChange = (key, e) => {
    e.preventDefault();
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".mil-filter a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-filter");
      if (filterValue == key) {
        filter.classList.add("mil-current");
      } else {
        filter.classList.remove("mil-current");
      }
    });
  };

  if (!isClient) {
    return (
      <div className="mil-preloader">
        <div className="mil-preloader-content">
          <div className="mil-ticker mil-h5 mil-softened">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mil-filter mil-up mil-mb-90">
        <div className="mil-filter-links">
          <a href="#" data-filter="*" className="mil-current" onClick={(e) => handleFilterKeyChange("*", e)}>All</a>
          {categories?.map((item, key) => (
            <a 
              href="#" 
              data-filter={`${item.slug}`} 
              key={`project-filter-${key}`} 
              onClick={(e) => handleFilterKeyChange(item.slug, e)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="row mil-portfolio-grid">
        <div className="grid-sizer"></div>
        {projects?.map((item, key) => (
          <div 
            className={`col-lg-6 mil-grid-item ${item.category_slug}`} 
            key={`project-item-${key}`}
          >
            <a href={item.link} className="mil-portfolio-item mil-mb-60">
              <div className="mil-cover-frame mil-up">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="mil-description mil-up">
                <div>
                  <p className="mil-upper mil-mb-5">{item.category}</p>
                  <h4>{item.title}</h4>
                </div>
                <div className="mil-link mil-icon-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsMasonry;
  