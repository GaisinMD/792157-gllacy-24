var link = document.querySelector(".button-feedback");
var popup = document.querySelector(".overlay-modal");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=name]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("overlay-modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("overlay-modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("overlay-modal-show")) {
      popup.classList.remove("overlay-modal-show");
    }
  }
});


ymaps.ready(init);

function init() {
  myMap = new ymaps.Map("yandex-map", {
      center: [59.938631, 30.323055],
      zoom: 17,
      controls: ['smallMapDefaultSet']
    }),    

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Магазин мороженного Gllacy',
      balloonContent: 'Добро пожаловать!'
    }, 
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      iconImageSize: [80, 140],
      iconImageOffset: [-37, -140]
    });

  myMap.geoObjects
    .add(myPlacemark);
};
