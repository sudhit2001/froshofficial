gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".card",
  {
    opacity: 0,
    scale: 0.1,
  },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 0.5,
    stagger: {
      amount: 1,
    },
    scrollTrigger: ".card",
  }
);
