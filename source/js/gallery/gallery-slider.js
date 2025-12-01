import Swiper from 'swiper';
import 'swiper/css';

export const initGallerySwiper = () => {
  const gallerySlider = document.querySelector('.gallery__slider-wrapper');
  const prevButton = document.querySelector('.gallery__button--prev');
  const nextButton = document.querySelector('.gallery__button--next');

  const gallerySwiper = new Swiper(gallerySlider, {
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 3,
        loop: true
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 5,
        loop: true
      },
      1440: {
        slidesPerView: 5,
        loop: false,
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
