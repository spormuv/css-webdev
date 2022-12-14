'use strict';

$(document).ready(function () {
  // tabs
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
  //validation
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: 'Please specify your name',
          minlength: jQuery.validator.format(
            'At least {0} characters required!'
          ),
        },
        phone: 'Please specify your phone',
        email: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
      },
    });
  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  //phone mask

  $('input[name="phone"]').mask('(999) 999-9999');

  //sending forms

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });
});

// carousel
const slides = document.querySelectorAll('.slide');
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector('.btn-next');

let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener('click', function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector('.btn-prev');

prevSlide.addEventListener('click', function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

//tab cards toggle class
const more = document.querySelectorAll('.catalog-item__link');
const back = document.querySelectorAll('.catalog-item__back');

function toggleClass() {
  const wrapper = this.closest('div.catalog-item__wrapper');
  wrapper.classList.toggle('catalog-item__wrapper_active');
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

//scroll

const up = document.querySelector('.pageup');

window.addEventListener('scroll', () => {
  if (this.scrollY > 800) {
    up.style.display = 'block';
    setTimeout(() => (up.style.opacity = '1'), 500);
  } else {
    new Promise((res) => {
      setTimeout(() => res((up.style.opacity = '0')), 500);
    }).then(() => (up.style.display = 'none'));
  }
});

//animation scroll
new WOW().init();
