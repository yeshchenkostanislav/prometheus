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
       slidesPerColumn: 1,

     },
     // when window width is >= 640px
     768: {
       slidesPerView: 2,
       slidesPerColumn: 3
     }
   }
 })