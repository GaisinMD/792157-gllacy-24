var link = document.querySelector(".button-feedback");
var popup = document.querySelector(".overlay-modal");
var close = document.querySelector(".modal-close");
var byname = popup.querySelector(".feedback-item-name");
var userMail = popup.querySelector(".feedback-item-mail");
var message = popup.querySelector(".feedback-item-text");
var form = popup.querySelector(".feedback-form");
var sectionForm = popup.querySelector(".modal-feedback-form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("overlay-modal-show");
  byname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("overlay-modal-show");
  sectionForm.classList.remove("modal-feedback-form-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("overlay-modal-show")) {
      popup.classList.remove("overlay-modal-show");
      sectionForm.classList.remove("modal-feedback-form-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!byname.value || !userMail.value || !message.value) {
    evt.preventDefault();
    sectionForm.classList.remove("modal-feedback-form-error");
    sectionForm.offsetWidth = sectionForm.offsetWidth;
    sectionForm.classList.add("modal-feedback-form-error");
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
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/pin.svg',
      iconImageSize: [80, 140],
      iconImageOffset: [-37, -140]
    });

  myMap.geoObjects
    .add(myPlacemark);
};
