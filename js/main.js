const menu = document.querySelector(".hide");
const btn = document.querySelector("#toggle-menu");

btn.addEventListener("click", () => {
  menu.classList.add("menu");
});
