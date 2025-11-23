import Swiper from 'swiper';
import 'swiper/css';

export const initAdvantageSlider = () => {
  const advantageWrapper = document.querySelector('.advantage__slider-wrapper');
  const advantageList = document.querySelector('.advantage__list');
  const advantageItems = document.querySelectorAll('.advantage__item');

  if (window.innerWidth < 1440) {
    advantageWrapper.classList.remove('swiper');
    advantageList.classList.remove('swiper-wrapper');
    advantageItems.forEach((item) => item.classList.remove('swiper-slide'));

    return null;
  }

  advantageWrapper.classList.add('swiper');
  advantageList.classList.add('swiper-wrapper');
  advantageItems.forEach((item) => item.classList.add('swiper-slide'));

  const prevButton = document.querySelector('.advantage__button--prev');
  const nextButton = document.querySelector('.advantage__button--next');

  const advantageSwiper = new Swiper(advantageWrapper, {
    slidesPerView: 3.5,
    slidesPerGroup: 2,
    loop: true,
    allowTouchMove: false,
    simulateTouch: false,
    watchOverflow: true,
  });

  if (prevButton) {
    prevButton.addEventListener('click', () => advantageSwiper.slidePrev());
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => advantageSwiper.slideNext());
  }

  const handleResize = () => {
    if (window.innerWidth < 1440 && advantageSwiper && !advantageSwiper.destroyed) {
      advantageWrapper.classList.remove('swiper');
      advantageList.classList.remove('swiper-wrapper');
      advantageItems.forEach((item) => item.classList.remove('swiper-slide'));
      advantageSwiper.destroy(true, true);
      window.removeEventListener('resize', handleResize);
    }
  };

  window.addEventListener('resize', handleResize);

  return advantageSwiper;
};
