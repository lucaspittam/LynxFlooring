'use client';

import { useEffect, useState } from "react";
import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";

const PagesLayouts = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) { // Changed to trigger earlier for smoother transition
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`mil-header-container ${isScrolled ? 'mil-scrolled' : ''}`}>
        <Header layout={"default"} />
      </div>

      {/* content */}
      <div id="content" style={{ position: "relative", overflowY: "visible", minHeight: "100vh" }}>
        {children}
        <Footer layout={"default"} />
      </div>
    </>
  );
};

export default PagesLayouts;
