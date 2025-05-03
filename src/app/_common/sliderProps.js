// Import minimal CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SliderProps = {
  milInfiniteSlider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    simulateTouch: false,
    allowTouchMove: false,
    watchSlidesProgress: false,
    observer: false,
    observeParents: false,
    resizeObserver: false,
    updateOnWindowResize: false,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
  },
  milBannerSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    lazy: true,
    navigation: {
      prevEl: ".mil-banner-prev",
      nextEl: ".mil-banner-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milBannerSlider2: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
    lazy: true,
    navigation: {
      prevEl: ".mil-banner-prev",
      nextEl: ".mil-banner-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milProcessSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    lazy: true,
    navigation: {
      prevEl: ".mil-process-prev",
      nextEl: ".mil-process-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milReviewsSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: "fade",
    lazy: true,
    navigation: {
      prevEl: ".mil-process-prev",
      nextEl: ".mil-process-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milIllustrationSlider: {
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
  },
};
