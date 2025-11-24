import Swiper from 'swiper';
import 'swiper/css';

export const initAdvantageSlider = () => {
  const sliderWrapper = document.querySelector('.advantage__slider-wrapper');
  const prevButton = document.querySelector('.advantage__button--prev');
  const nextButton = document.querySelector('.advantage__button--next');

  const advantageSwiper = new Swiper(sliderWrapper, {
    slidesPerView: 'auto',
    slidesPerGroup: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    initialSlide: 2,
    allowTouchMove: false,
    simulateTouch: false,

    on: {
      init: function () {
        if (window.innerWidth >= 1440) {
          this.enable();
        } else {
          this.disable();
        }
      },
      resize: function () {
        if (window.innerWidth >= 1440) {
          this.enable();
        } else {
          this.disable();
        }
      }
    }
  });

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      advantageSwiper.slidePrev();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      advantageSwiper.slideNext();
    });
  }

  return advantageSwiper;
};
