const menu = document.querySelector(".hide");
const btn = document.querySelector("#toggle-menu");
const close = document.querySelector("#close-btn");
const sliderSection = document.querySelector(".projects-section");
const slider = document.querySelector(".slider");

let isPressedDown = false;
let cursorXSpace;

// Toggle menu
btn.addEventListener("click", () => {
  menu.classList.toggle("menu");
});

close.addEventListener("click", () => {
  menu.classList.toggle("menu");
});
// Toggle menu

// Slider
