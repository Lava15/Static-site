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
gsap.set(".text-1 ", {
  duration: 2.5,
  x: -1200,
  ease: "slow(0.7, 0.7, false)",
  scale: 0,
  opacity: 0,
});
const tl2 = gsap.timeline({ repeat: 1, ease: "slow(0.7, 0.7, false)" });
tl2
  .to(".text-1 ", {
    duration: 2.5,
    x: 0,
    stagger: 0.05,
    ease: "slow(0.7, 0.7, false)",
    scale: 1,
    opacity: 1,
  })
  .to(".text-1 ", {
    duration: 2.5,
    scale: 0,
    x: 1400,
    stagger: 0.05,
    ease: "slow(0.7, 0.7, false)",
  });

gsap.set(".text-2 ", {
  duration: 3,
  x: 1200,
  ease: "power4.out",
  scale: 0,
  opacity: 0,
});
const tl3 = gsap
  .timeline({ repeat: 1, ease: "expo.inOut" })
  .to(".text-2 ", {
    duration: 3,
    x: 0,
    stagger: 0.1,
    ease: "power4.out",
    scale: 1,
    opacity: 1,
  })
  .to(".text-2 ", {
    duration: 2,
    x: -1400,
    scale: 0,
    stagger: 0.05,
    ease: "power4.out",
  });

const tl4 = gsap
  .timeline({
    repeat: 0,
    repeatDelay: 2,
    ease: "expo.inOut",
  })
  .to("#photo", { yPercent: 200 }, { duration: 3, opacity: 0 })
  .fromTo(
    "#photo",
    { yPercent: -200 },
    { duration: 2, opacity: 1, yPercent: 0 },
    "<"
  );
