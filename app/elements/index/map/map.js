// Инициализация и уничтожение карты при нажатии на кнопку.
function init() {
  var myMap;

  $('#toggle').bind({
    click: function () {
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

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/marker.png',
    // Размеры метки.
    iconImageSize: [64, 64],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-32, -64]
  });


  myMap.behaviors
    // Отключаем часть включенных по умолчанию поведений:
    //  - drag - перемещение карты при нажатой левой кнопки мыши;
    //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
    .disable(['scrollZoom', 'drag', 'rightMouseButtonMagnifier'])
    // Включаем линейку.
    .enable('ruler');

  myMap.geoObjects
    .add(myPlacemark);
});
}