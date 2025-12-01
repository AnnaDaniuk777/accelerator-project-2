import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

let toursSwiper = null;

const updateButtons = (swiper) => {
  const prevBtn = document.querySelector('.tours__button--prev');
  const nextBtn = document.querySelector('.tours__button--next');

  if (prevBtn) {
    prevBtn.classList.toggle('tours__button--disabled', swiper.isBeginning);
  }
  if (nextBtn) {
    nextBtn.classList.toggle('tours__button--disabled', swiper.isEnd);
  }
};

export const initToursSwiper = () => {
  if (toursSwiper) {
    toursSwiper.destroy(true, true);
  }

  let slidesPerView = 1;
  let spaceBetween = 15;

  if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    slidesPerView = 2;
    spaceBetween = 18;
  } else if (window.innerWidth >= 1440) {
    slidesPerView = 3;
    spaceBetween = 30;
  }

  toursSwiper = new Swiper('.tours__swiper', {
    modules: [Navigation],
    slidesPerView: slidesPerView,
    slidesPerGroup: 1,
    spaceBetween: spaceBetween,

    navigation: {
      nextEl: '.tours__button--next',
      prevEl: '.tours__button--prev',
    },

    on: {
      init: function () {
        updateButtons(this);
      },
      slideChange: function () {
        updateButtons(this);
      }
    }
  });
};
