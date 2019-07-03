$('.about-company__arrow').click(() => {

  let descrList = $('.about-company__descr-list');

  if (descrList.css("height") > '230px') {
    descrList.css({
      'height': '230px'
    })
    $('.about-company-svg').css({
      'transform': 'rotate(-90deg)'
    })
  } else {
    descrList.css({
      'height': 'initial'
    })

    $('.about-company-svg').css({
      'transform': 'rotate(90deg)'
    })
  }
});

$(window).resize(function () {
  if ($(window).width() == 320) {
    $('.about-company__img').children().attr('src', 'img/about-company-bg2.png');
  }
})