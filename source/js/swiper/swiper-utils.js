export function destroySwiper({ swiperInstance, swiperContainer, wrapper, slides, clonedSlides }) {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }

  swiperContainer.classList.remove('swiper');
  wrapper.classList.remove('swiper-wrapper');

  clonedSlides.forEach((slide) => {
    if (slide && slide.parentNode === wrapper) {
      wrapper.removeChild(slide);
    }
  });

  slides.forEach((slide) => {
    slide.classList.remove('swiper-slide');
  });
}

export function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
