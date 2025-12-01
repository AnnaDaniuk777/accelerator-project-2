export const initMobileMenu = () => {
  const navMain = document.querySelector('.header__nav');
  const navToggle = document.querySelector('.header__button');
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  const toggleMenu = (isOpen) => {
    if (isOpen) {
      navMain.classList.remove('header__nav--closed');
      navMain.classList.add('header__nav--opened');
      navToggle.classList.add('header__button--active');
      overlay.classList.add('overlay--visible');
      body.classList.add('page-body--no-scroll');
    } else {
      navMain.classList.add('header__nav--closed');
      navMain.classList.remove('header__nav--opened');
      navToggle.classList.remove('header__button--active');
      overlay.classList.remove('overlay--visible');
      body.classList.remove('page-body--no-scroll');
    }
  };

  navToggle.addEventListener('click', () => {
    const isCurrentlyOpen = navMain.classList.contains('header__nav--opened');
    toggleMenu(!isCurrentlyOpen);
  });

  overlay.addEventListener('click', () => {
    toggleMenu(false);
  });

  document.querySelectorAll('.header__nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1439) {
        toggleMenu(false);
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1440) {
      toggleMenu(false);
    }
  });

  toggleMenu(false);
};
