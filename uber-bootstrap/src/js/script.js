const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu_item');

function opac() {
  hamburger.classList.toggle('hamburger_active');
  menu.classList.toggle('menu_active');
}

hamburger.addEventListener('click', opac);
menuItem.forEach((item) => item.addEventListener('click', opac));
