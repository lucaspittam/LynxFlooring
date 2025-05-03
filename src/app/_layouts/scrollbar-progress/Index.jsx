"use client";

import { useEffect, memo } from "react";

const ScrollbarProgressModule = () => {
  useEffect(() => {
    // Lightweight scroll progress implementation
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      
      const progressBar = document.querySelector('.mil-progress');
      if (progressBar) {
        progressBar.style.height = `${progress}%`;
      }
    };
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* scrollbar progress */}
      <div className="mil-progress-track">
        <div className="mil-progress" style={{ height: 0, transition: 'height 0.1s' }} />
      </div>
      {/* scrollbar progress end */}
    </>
  );
};

export default memo(ScrollbarProgressModule);
