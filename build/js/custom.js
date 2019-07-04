'use strict';

$('document').ready(function () {
  $('.about-company__arrow').click(function () {

    var descrList = $('.about-company__descr-list');

    if (descrList.css("height") > '230px') {
      descrList.css({
        'height': '230px'
      });
      $('.about-company-svg').css({
        'transform': 'rotate(-90deg)'
      });
    } else {
      descrList.css({
        'height': 'initial'
      });

      $('.about-company-svg').css({
        'transform': 'rotate(90deg)'
      });
    }
  });

  $(window).resize(function () {
    if ($(window).width() == 320) {
      $('.about-company__img').children().attr('src', 'img/about-company-bg2.png');
    }
  });
  var sightsSlider = new Swiper($('[data-slider="advantages"]'), {
    slidesPerView: 3,
    setWrapperSize: true,
    spaceBetween: 15,
    slidesPerColumn: 2,
    allowTouchMove: false,
    navigation: {
      nextEl: '.advantages-button-next',
      prevEl: '.advantages-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
        slidesPerColumn: 1

      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        slidesPerColumn: 3
      }
    }
  });
  var mySwiper = new Swiper($('[data-slider="banner"]'), {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
      nextEl: '.banner-button-next',
      prevEl: '.banner-button-prev'
    }
  });
  function burgMenu() {
    // скрипт для бургер меню, отменяет стандартное действие клика по ссылке

    $('.menu-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('menu-btn_active');
      $('.menu-nav').toggleClass('menu-nav_active');
    });
  }
  burgMenu();
});