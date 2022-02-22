import "../style/sass/main.css";

const menu = document.querySelector(".hide");
const btn = document.querySelector("#toggle-menu");
const close = document.querySelector("#close-btn");

// Toggle menu
btn.addEventListener("click", () => {
  menu.classList.toggle("menu");
});

close.addEventListener("click", () => {
  menu.classList.toggle("menu");
});
// Toggle menu

// letter animation
