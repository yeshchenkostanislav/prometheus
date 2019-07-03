 var mySwiper = new Swiper($('[data-slider="banner"]'), {
   speed: 400,
   spaceBetween: 100,
   slidesPerView: 1,
   navigation: {
     nextEl: '.banner-button-next',
     prevEl: '.banner-button-prev'
   }
 });