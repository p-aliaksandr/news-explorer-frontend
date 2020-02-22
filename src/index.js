import './pages/style.css';

const buttonMobileMenu = document.querySelector('.header__menu-mobile');
const crossMobileMenu = document.querySelector('.popup__menu-close');

function openMobileMenu() {
  document.querySelector('.popup__menu').classList.toggle('popup__menu_is-opened');
}

function closeMobileMenu() {
  document.querySelector('.popup__menu').classList.toggle('popup__menu_is-opened');
}

buttonMobileMenu.addEventListener('click', openMobileMenu);
crossMobileMenu.addEventListener('click', closeMobileMenu);
