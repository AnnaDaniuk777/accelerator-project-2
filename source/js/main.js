import { initMobileMenu } from './header/menu.js';
import { initHeroSwiper } from './hero/hero-slider.js';
import { initGallerySwiper } from './gallery/gallery-slider.js';
import { initAdvantagesSwiper } from './advantage/advantage-slider.js';
import { initReviewSwiper } from './review/review-slider.js';
import { initTrainingSwiper } from './training/training-slider.js';
import { initToursSwiper } from './tours/tours-slider.js';

const initSliders = () => {
  initHeroSwiper();
  initGallerySwiper();
  initAdvantagesSwiper();
  initReviewSwiper();
  initTrainingSwiper();
  initToursSwiper();
};

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initSliders, 50);
});

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSliders();
});


