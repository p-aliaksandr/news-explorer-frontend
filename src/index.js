import './pages/style.css';

const buttonMobileMenu = document.querySelector('.header__menu-mobile');
const crossMobileMenu = document.querySelector('.header__popup-mobile-close');

function openMobileMenu() {
  document.querySelector('.header__popup-mobile').classList.toggle('header_is-opened');
}

function closeMobileMenu() {
  document.querySelector('.header__popup-mobile').classList.toggle('header_is-opened');
}

buttonMobileMenu.addEventListener('click', openMobileMenu);
crossMobileMenu.addEventListener('click', closeMobileMenu);
