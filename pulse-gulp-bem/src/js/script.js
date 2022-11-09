'use strict';

$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 800,
    // adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    }
  );
});

//tab cards toggle class

const more = document.querySelectorAll('.catalog-item__link');
const back = document.querySelectorAll('.catalog-item__back');

function toggleClass() {
  const wrapper = this.closest('div.catalog-item__wrapper');
  wrapper
    .querySelector('.catalog-item__content')
    .classList.toggle('catalog-item__content_active');
  wrapper
    .querySelector('.catalog-item__list')
    .classList.toggle('catalog-item__list_active');
}

function addEvent(btn) {
  btn.forEach((item) =>
    item.addEventListener('click', function (e) {
      e.preventDefault();
      toggleClass.call(this);
    })
  );
}

addEvent(more);
addEvent(back);

//modal

const overlay = document.querySelector('.overlay');
const modalConsult = document.querySelector('#consultation');
const modalOrder = document.querySelector('#order');
const modalThanks = document.querySelector('#thanks');

const modalClose = document.querySelectorAll('.modal__close');
const btnConsult = document.querySelectorAll('[data-modal="consultation"]');
const btnMini = document.querySelectorAll('.button_mini');

function reset() {
  overlay.style.display = 'none';
  modalConsult.style.display = 'none';
  modalOrder.style.display = 'none';
  modalThanks.style.display = 'none';
}

btnConsult.forEach((btn) =>
  btn.addEventListener('click', () => {
    overlay.style.display = 'block';
    modalConsult.style.display = 'block';
  })
);

btnMini.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const order = e.target
      .closest('.catalog-item')
      .querySelector('.catalog-item__subtitle').textContent;
    modalOrder.querySelector('.modal__descr').textContent = order;
    overlay.style.display = 'block';
    modalOrder.style.display = 'block';
  })
);

modalClose.forEach((item) => item.addEventListener('click', reset));
