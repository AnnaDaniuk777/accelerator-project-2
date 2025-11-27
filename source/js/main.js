import { initMobileMenu } from './header/menu.js';
import { initHeroSlider } from './hero/hero-slider.js';
import { initGallerySlider } from './gallery/gallery-slider.js';
import { initAdvantagesSwiper } from './advantage/advantage-slider.js';
import { initReviewSwiper } from './review/review-slider.js';
import { initTrainingSwiper } from './training/training-slider.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroSlider();
  initGallerySlider();
  initAdvantagesSwiper();
  initReviewSwiper();
  initTrainingSwiper();
});


