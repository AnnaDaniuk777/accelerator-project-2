import Swiper from 'swiper';
import 'swiper/css';

export function initHeroSlider() {
  const swiper = new Swiper('.slider__swiper', {
    loop: true,
    simulateTouch: false,
    breakpoints: {
      320: {
        simulateTouch: true,
      },
      768: {
        simulateTouch: true,
      },
      1440: {
        simulateTouch: false,
      }
    },
    on: {
      init: function (swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function (swiper) {
        updateCustomPagination(swiper);
      },
    },
  });

  function updateCustomPagination(swiper) {
    const bullets = document.querySelectorAll('.slider__pagination-bullet');
    const activeIndex = swiper.realIndex;

    bullets.forEach((bullet, index) => {
      if (index === activeIndex) {
        bullet.classList.add('slider__pagination-bullet--active');
      } else {
        bullet.classList.remove('slider__pagination-bullet--active');
      }
    });
  }

  const bullets = document.querySelectorAll('.slider__pagination-bullet');
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      swiper.slideToLoop(index);
    });
  });

  return swiper;
}
