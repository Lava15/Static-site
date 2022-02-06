var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  loop: true,
  parallax: true,
  speed: 1200,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 30,
    shadowScale: 1,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
var swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerGroup: 1,
  slidesPerView: 3,
  speed: 800,
  parallax: true,
  watchSlidesProgress: true,

  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
});
