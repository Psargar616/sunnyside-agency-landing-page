// gsap.to("#arrow", { x: 200 }, {repeat: -1});

gsap.to("#arrow", {
  duration: 2,
  y: 100,
  repeat: -1,
});

gsap.to("#quote", {
  duration: 2,
  // repeat: 1,
  scale: 1.1,
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true);

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
  normalizeScroll: true,
});




