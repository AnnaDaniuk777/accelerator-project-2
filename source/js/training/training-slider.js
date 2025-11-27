import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const trainingContainer = document.querySelector('.training__tutors-wrapper');
const trainingWrapper = document.querySelector('.training__tutors-list');
const trainingSlides = document.querySelectorAll('.training__tutors-item');
let trainingSwiper = null;

export function initTrainingSwiper() {
  const tabletBreakpoint = 768;
  const desktopBreakpoint = 1440;

  let slidesPerView = 1;
  let initialSlide = 2;

  if (window.innerWidth >= tabletBreakpoint && window.innerWidth < desktopBreakpoint) {
    slidesPerView = 3;
    initialSlide = 0;
  } else if (window.innerWidth >= desktopBreakpoint) {
    slidesPerView = 4;
    initialSlide = 0;
  }

  if (trainingSwiper) {
    trainingSwiper.destroy(true, true);
    trainingSwiper = null;
  }

  trainingContainer.classList.add('swiper');
  trainingWrapper.classList.add('swiper-wrapper');

  for (const slide of trainingSlides) {
    slide.classList.add('swiper-slide');
  }

  trainingSwiper = new Swiper('.training__tutors-wrapper', {
    modules: [Navigation],
    slidesPerView: slidesPerView,
    slidesPerGroup: 1,
    spaceBetween: window.innerWidth < tabletBreakpoint ? 15 : 20,
    speed: 500,
    watchOverflow: true,
    initialSlide: initialSlide,

    navigation: {
      nextEl: '.training__button--next',
      prevEl: '.training__button--prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    on: {
      init: function () {
        updateNavigationButtons(this);
      },
      slideChange: function () {
        updateNavigationButtons(this);
      }
    }
  });
}

function updateNavigationButtons(swiper) {
  const prevButton = document.querySelector('.training__button--prev');
  const nextButton = document.querySelector('.training__button--next');

  if (prevButton && nextButton) {
    prevButton.classList.toggle('training__button--disabled', swiper.isBeginning);
    nextButton.classList.toggle('training__button--disabled', swiper.isEnd);
  }
}

let resizeTimeout;
function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initTrainingSwiper, 100);
}

document.addEventListener('DOMContentLoaded', initTrainingSwiper);
window.addEventListener('resize', handleResize);
