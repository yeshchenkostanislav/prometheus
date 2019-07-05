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
  var swiperFeedback = new Swiper($('[data-slider="feedback"]'), {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    navigation: {
      nextEl: '.feedback-button-next',
      prevEl: '.feedback-button-prev'
    },
    breakpoints: {
      540: {
        slidesPerView: 1
      }
    }
  });
  var swiperFeedbackText = new Swiper($('[data-slider="feedback-text"]'), {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1,
    initialSlide: 2,
    loop: true,
    navigation: {
      nextEl: '.feedback-button-next',
      prevEl: '.feedback-button-prev'
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
  // Инициализация и уничтожение карты при нажатии на кнопку.
  function init() {
    var myMap;

    $('#toggle').bind({
      click: function click() {
        if (!myMap) {
          myMap = new ymaps.Map('map', {
            center: [55.767752, 40.730410], // Новосибирск
            zoom: 9
          }, {
            searchControlProvider: 'yandex#search'
          });
          $("#toggle").attr('value', 'Скрыть карту');
        } else {
          myMap.destroy(); // Деструктор карты
          myMap = null;
          $("#toggle").attr('value', 'Показать карту снова');
        }
      }
    });
  }
  var swiperFeedback = new Swiper($('[data-slider="partners"]'), {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    setWrapperSize: true,
    navigation: {
      nextEl: '.partners-button-next',
      prevEl: '.partners-button-prev'
    },
    breakpoints: {
      992: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 2,
        centeredSlides: false
      }
    }
  });
});