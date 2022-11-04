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
