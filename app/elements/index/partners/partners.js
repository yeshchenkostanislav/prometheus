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