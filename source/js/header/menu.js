export const initMobileMenu = () => {
  const navMain = document.querySelector('.header__nav');
  const navToggle = document.querySelector('.header__button');

  navToggle.addEventListener('click', () => {
    navMain.classList.toggle('header__nav--closed');
    navToggle.classList.toggle('header__button--active');
    document.body.classList.toggle('body--no-scroll');
  });

  document.querySelectorAll('.header__nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1439) {
        navMain.classList.add('header__nav--closed');
        navMain.classList.remove('header__nav--opened');
        navToggle.classList.remove('header__button--active');
        document.body.classList.remove('body--no-scroll');
      }
    });
  });
};
