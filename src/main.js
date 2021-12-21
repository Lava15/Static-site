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

sliderSection.addEventListener("mousedown", (e) => {
  let isPressedDown = true;
  cursorXSpace = e.offsetX - slider.offsetLeft;
});

sliderSection.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  slider.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

const boundCards = () => {
  const container_rect = sliderSection.getBoundingClientRect();
  const slider_rect = slider.getBoundingClientRect();

  if (parseInt(slider.style.left) > 0) {
    slider.style.left = 0;
  } else if (slider_rect.right < container_rect.right) {
    slider.style.left = `-${slider_rect.width - container_rect.width}px`;
  }
};
