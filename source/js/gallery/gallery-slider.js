import Swiper from 'swiper';
import 'swiper/css';

export const initGallerySlider = () => {
  const gallerySlider = document.querySelector('.gallery__slider-wrapper');
  const prevButton = document.querySelector('.gallery__button--prev');
  const nextButton = document.querySelector('.gallery__button--next');

  const gallerySwiper = new Swiper(gallerySlider, {
    breakpoints: {
      320: {
        slidesPerView: 2,
        loop: true
      },
      768: {
        slidesPerView: 3,
        loop: true
      },
      1440: {
        slidesPerView: 5,
        loop: false,
        allowTouchMove: false,
        simulateTouch: false
      }
    },

    watchOverflow: true,

    on: {
      init: function () {
        if (window.innerWidth >= 1440) {
          this.disable();
        }
      },
      resize: function () {
        if (window.innerWidth >= 1440) {
          this.disable();
        } else {
          this.enable();
        }
      }
    }
  });

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      gallerySwiper.slidePrev();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      gallerySwiper.slideNext();
    });
  }

  return gallerySwiper;
};
