import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { destroySwiper, debounce } from '../swiper/swiper-utils.js';
import 'swiper/css';

const advContainer = document.querySelector('.advantage__slider-wrapper');
const advWrapper = document.querySelector('.advantage__list');
const advSlides = document.querySelectorAll('.advantage__item');
let advSwiper = null;
let clonedSlides = [];

function initAdvantagesSwiper() {
  const breakpoint = 1440;

  if (window.innerWidth >= breakpoint && !advSwiper) {
    advContainer.classList.add('swiper');
    advWrapper.classList.add('swiper-wrapper');

    if (advSlides.length > 0 && clonedSlides.length === 0) {
      advSlides.forEach((slide, index) => {
        const clonedSlide = slide.cloneNode(true);
        clonedSlide.classList.add('advantage__item', 'swiper-slide');
        clonedSlide.setAttribute('data-cloned', 'true');
        clonedSlide.setAttribute('data-cloned-index', index);
        advWrapper.appendChild(clonedSlide);
        clonedSlides.push(clonedSlide);
      });
    }

    for (const slide of advSlides) {
      slide.classList.add('swiper-slide');
    }

    advSwiper = new Swiper('.advantage__slider-wrapper', {
      modules: [Navigation],
      loop: true,
      speed: 1000,
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 0,
      loopAddBlankSlides: false,
      loopedSlides: advSlides.length,
      watchSlidesProgress: true,

      navigation: {
        nextEl: '.advantage__button--next',
        prevEl: '.advantage__button--prev',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      on: {
        init: function () {
          setTimeout(() => {
            this.update();
            this.slideToLoop(2, 0);
          }, 100);
        }
      }
    });

  } else if (window.innerWidth < breakpoint && advSwiper) {
    destroySwiper({
      swiperInstance: advSwiper,
      swiperContainer: advContainer,
      wrapper: advWrapper,
      slides: advSlides,
      clonedSlides: clonedSlides
    });
    advSwiper = null;
    clonedSlides = [];
  }
}

const debouncedResizeAdvantagesSwiper = debounce(initAdvantagesSwiper, 200);

document.addEventListener('DOMContentLoaded', initAdvantagesSwiper);
window.addEventListener('resize', debouncedResizeAdvantagesSwiper);

export { initAdvantagesSwiper, debouncedResizeAdvantagesSwiper };
