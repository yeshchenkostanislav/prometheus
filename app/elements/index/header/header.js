function burgMenu() {
  // скрипт для бургер меню, отменяет стандартное действие клика по ссылке

  $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
  });
}
burgMenu();