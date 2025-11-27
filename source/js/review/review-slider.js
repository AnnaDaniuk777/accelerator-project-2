import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const reviewContainer = document.querySelector('.review__slider');
let reviewSwiper = null;

export function initReviewSwiper() {
  const tabletBreakpoint = 768;
  const desktopBreakpoint = 1440;

  let slidesPerView = 1;
  let spaceBetween = 15;

  if (window.innerWidth >= tabletBreakpoint && window.innerWidth < desktopBreakpoint) {
    slidesPerView = 'auto';
    spaceBetween = 30;
  } else if (window.innerWidth >= desktopBreakpoint) {
    slidesPerView = 'auto';
    spaceBetween = 120;
  }

  if (reviewSwiper) {
    reviewSwiper.destroy(true, true);
    reviewSwiper = null;
  }

  if (reviewContainer) {
    reviewSwiper = new Swiper('.review__slider', {
      modules: [Navigation],
      slidesPerView: slidesPerView,
      spaceBetween: spaceBetween,
      speed: 500,
      watchOverflow: true,
      initialSlide: 0,

      navigation: {
        nextEl: '.review__button--next',
        prevEl: '.review__button--prev',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      on: {
        init: function () {
          updateReviewNavigationButtons(this);
        },
        slideChange: function () {
          updateReviewNavigationButtons(this);
        }
      }
    });
  }
}

function updateReviewNavigationButtons(swiper) {
  const prevButton = document.querySelector('.review__button--prev');
  const nextButton = document.querySelector('.review__button--next');

  if (prevButton && nextButton) {
    prevButton.classList.toggle('review__button--disabled', swiper.isBeginning);
    nextButton.classList.toggle('review__button--disabled', swiper.isEnd);
  }
}

let reviewResizeTimeout;
function handleReviewResize() {
  clearTimeout(reviewResizeTimeout);
  reviewResizeTimeout = setTimeout(initReviewSwiper, 100);
}

document.addEventListener('DOMContentLoaded', initReviewSwiper);
window.addEventListener('resize', handleReviewResize);
