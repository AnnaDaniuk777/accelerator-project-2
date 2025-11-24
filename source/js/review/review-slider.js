import Swiper from 'swiper';

export const initReviewSlider = () => {
  const reviewSlider = document.querySelector('.review__slider');
  const prevButton = document.querySelector('.review__button--prev');
  const nextButton = document.querySelector('.review__button--next');

  const reviewSwiper = new Swiper(reviewSlider, {
    slidesPerView: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 'auto',
      },
      1440: {
        slidesPerView: 'auto',
      }
    },

    watchOverflow: true,
  });

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      reviewSwiper.slidePrev();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      reviewSwiper.slideNext();
    });
  }

  reviewSwiper.on('slideChange', () => {
    updateButtonStates();
  });

  updateButtonStates();

  function updateButtonStates() {
    if (prevButton) {
      prevButton.classList.toggle('review__button--disabled', reviewSwiper.isBeginning);
    }
    if (nextButton) {
      nextButton.classList.toggle('review__button--disabled', reviewSwiper.isEnd);
    }
  }

  return reviewSwiper;
};
