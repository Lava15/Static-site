gsap.set(".letter", { yPercent: -103 });
const tl = gsap.timeline({ repeat: 4 });
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

// text animation
const tl2 = gsap.timeline();

function init() {
  tl2
    .set(".text-1", { xPercent: 0 })
    .to(
      ".text-1",
      { duration: 3, x: 500, xPercent: -100, ease: "slow(0.6, 1)" },
      "0.5"
    )
    .from(
      ".text-1",
      {
        xPercent: -100,
        x: 100,
        duration: 3,
        scale: 0,
        ease: "slow(0.6, 0.6, true)",
      },
      "<"
    );
}
init();
