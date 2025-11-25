import { initMobileMenu } from './header/menu.js';
import { initHeroSlider } from './hero/hero-slider.js';
import { initGallerySlider } from './gallery/gallery-slider.js';
import { initAdvantagesSwiper } from './advantage/advantage-slider.js';
import { initReviewSlider } from './review/review-slider.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroSlider();
  initGallerySlider();
  initAdvantagesSwiper();
  initReviewSlider();
});


