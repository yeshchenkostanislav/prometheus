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