if (document.querySelector('#map')) {
    // Yandex map
    ymaps.ready(init);
}
var myMap, myPlacemark;
  
function init() {
  myMap = new ymaps.Map("map", {
    center: [55.612268, 37.629529],
    zoom: 15
  });
  
  myPlacemark = new ymaps.Placemark([55.612268, 37.629529], {
    hintContent: 'Улица Дорожная, дом 3 корпус 11 кабинет 406'
  });
  
  myMap.geoObjects.add(myPlacemark);
  // Cancel zoom on desktop
  myMap.behaviors.disable('scrollZoom');
  // Cancel zoom on mobile
  myMap.behaviors.disable('drag');
}

const form = document.querySelector('.form');
const submitInput = document.querySelector('.form__buttom--js');
const introForm = document.querySelector('.header__form');
const submitForm = document.querySelector('.js-submit-form');

form && form.addEventListener("submit", (e) => {
  e.preventDefault();
  var t = new FormData(form),
      n = {
          method: "POST",
          credentials: "same-origin",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name: t.get("name"),
              tel: t.get("tel"),
              email: t.get("email"),
              equipment: t.get("equipment"),
              message: t.get("message")
          })
      };
  fetch("/send_post.php", n).then((e) => { 
    introForm.classList.add('hide');
    submitForm.classList.add('visible');   
  }).catch((e) => {
      return console.log('error');
  });
});

  