'use strict';

import './index.html';
import './style.scss';

// hamburger
const hamburger = document.querySelector('.hamburger');
const menuClose = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link > a');

hamburger.addEventListener('click', () => {
  menu.classList.add('menu_active');
});
menuClose.addEventListener('click', () => {
  menu.classList.remove('menu_active');
});
menuLinks.forEach((link) =>
  link.addEventListener('click', () => {
    menu.classList.remove('menu_active');
  })
);

// skills rating width
const counters = document.querySelectorAll('.skills__ratings-counter');
counters.forEach((counter) => {
  const span = counter.parentElement.querySelector('span');
  span.style.width = counter.textContent;
});
