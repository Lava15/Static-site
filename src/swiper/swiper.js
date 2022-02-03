var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  loop: true,
  parallax: true,
  speed: 1200,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.97,
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
  effect: "cards",
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // },

  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
});
