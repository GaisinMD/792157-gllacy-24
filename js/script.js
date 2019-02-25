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