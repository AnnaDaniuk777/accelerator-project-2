export function destroySwiper({ swiperInstance, swiperContainer, wrapper, slides, clonedSlide = null }) {
  if (swiperInstance && !swiperInstance.destroyed) {
    swiperInstance.destroy(true, true);
  }

  swiperContainer?.classList.remove('swiper');
  wrapper?.classList.remove('swiper-wrapper');

  slides?.forEach((slide) => {
    slide.classList.remove('swiper-slide');
  });

  if (clonedSlide && clonedSlide.parentNode) {
    clonedSlide.remove();
  }
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
