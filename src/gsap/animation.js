gsap.set(".letter", { yPercent: -103 });
const tl = gsap.timeline();
tl.to(".letter", {
  duration: 1,
  yPercent: 0,
  stagger: 0.05,
  ease: "expo.inOut",
}).to(".letter:not([data-char = '.'])", {
  duration: 1,
  yPercent: 103,
  stagger: 0.1,
  ease: "expo.inOut",
});
console.log("test gsap");
