// Когда пользователь прокрутит вниз 1200px, тогда показывается кнопка
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById('up').style.display = "block";
    } 
    else {
        document.getElementById('up').style.display = "none";
    }
}

// Нажатие кнопки
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// swiper
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'cube',
      cubeEffect: {
        slideShadows: false,
      },
  });