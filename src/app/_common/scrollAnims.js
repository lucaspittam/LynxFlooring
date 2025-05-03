import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Debounce function to limit how often the animation functions are called
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Flag to track if animations are initialized
let animationsInitialized = false;

export const ScrollAnimation = () => {
  // Only initialize animations once
  if (animationsInitialized) return;
  animationsInitialized = true;

  gsap.registerPlugin(ScrollTrigger);

  // Batch animations to reduce reflows
  gsap.set(".mil-up", { opacity: 0, y: 50, scale: 0.98 });

  // Use a single ScrollTrigger for all appearance animations
  ScrollTrigger.batch(".mil-up", {
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.05,
        ease: "sine",
      });
    },
    onLeaveBack: (batch) => {
      gsap.to(batch, {
        opacity: 0,
        y: 50,
        scale: 0.98,
        stagger: 0.05,
        ease: "sine",
      });
    },
    start: "top 85%",
  });

  // Optimize scale image animations
  /* -- Commented out for testing hero scroll performance
  document.querySelectorAll(".mil-scale").forEach((section) => {
    const value1 = section.getAttribute("data-value-1");
    const value2 = section.getAttribute("data-value-2");

    gsap.fromTo(
      section,
      { scale: value1 },
      {
        scale: value2,
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
  });
  */

  // Optimize parallax
  /* -- Commented out for testing hero scroll performance
  document.querySelectorAll(".mil-parallax").forEach((section) => {
    const value1 = section.getAttribute("data-value-1");
    const value2 = section.getAttribute("data-value-2");

    gsap.fromTo(
      section,
      { y: value1 },
      {
        y: value2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
  });
  */

  // Optimize skill animations with batching
  const skillProgs = document.querySelectorAll(".mil-skill-prog");
  if (skillProgs.length > 0) {
    ScrollTrigger.batch(".mil-skill-prog", {
      onEnter: (batch) => {
        batch.forEach((element) => {
          const value1 = element.getAttribute("data-value-1");
          const value2 = element.getAttribute("data-value-2");
          
          gsap.fromTo(
            element,
            { width: value1 },
            {
              width: value2,
              duration: 1.5,
              ease: "power2.out",
            }
          );
        });
      },
      start: "top 85%",
    });
  }

  // Optimize counters with better animation
  const counters = document.querySelectorAll(".mil-counter");
  if (counters.length > 0) {
    ScrollTrigger.batch(".mil-counter", {
      onEnter: (batch) => {
        batch.forEach((element) => {
          const num = parseFloat(element.dataset.number);
          const split = (num + "").split(".");
          const decimals = split.length > 1 ? split[1].length : 0;
          
          gsap.to(element, {
            innerText: num,
            duration: 1.5,
            ease: "power2.out",
            snap: { innerText: 1 / (Math.pow(10, decimals) || 1) },
          });
        });
      },
      start: "top 85%",
    });
  }

  // Optimize progressbar with simpler animation
  gsap.to(".mil-progress", {
    height: "100%",
    ease: "none",
    scrollTrigger: {
      scrub: 0.3,
    },
  });

  // Optimize top panel handling with debouncing
  const milTopPanel = document.querySelector(".mil-top-panel");
  if (milTopPanel !== undefined) {
    const handleScroll = debounce(() => {
      if (window.scrollY > 10) {
        milTopPanel.classList.add("mil-active");
      } else {
        milTopPanel.classList.remove("mil-active");
      }
    }, 10);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
  }
};
