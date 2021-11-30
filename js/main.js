const menu = document.querySelector(".menu");
const btn = document.querySelector("#toggle-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("menu");
});
