document.querySelector('.main-nav').classList.remove('main-nav--nojs');

const menuToggle = document.querySelector('.main-nav__toggle');
const navigationList = document.querySelector('.main-nav__list');

menuToggle.addEventListener ('click', () => {
  navigationList.classList.toggle('main-nav__list--opened');
  menuToggle.classList.toggle('main-nav__toggle--active');
});
