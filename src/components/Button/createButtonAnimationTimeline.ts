import { gsap } from "gsap";

const createButtonAnimationTimeline = (target: HTMLElement) => {
  const circle = target.querySelector(".btn-circle");
  const diamond = target.querySelector(".btn-dia");

  const tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.1, ease: "sine.in" },
  });

  if (!circle || !diamond) return tl;

  tl.set(diamond, { rotation: 45 });

  tl.to(circle, {
    repeat: -1,
    duration: 2.0,
    repeatDelay: 2.0,
    keyframes: [
      { scale: 0.9, opacity: 0.8 },
      { scale: 1.0, opacity: 1.0 },
      { scale: 1.2, opacity: 0.9, duration: 0.02 },
      { scale: 1.25, opacity: 0.8, duration: 0.2 },
      { scale: 1.3, opacity: 0 },
      { scale: 1.0, opacity: 0, duration: 0.02, delay: 0.2 },
    ],
  }).fromTo(
    diamond,
    {
      scale: 0.7,
    },
    {
      repeat: -1,
      duration: 1.5,
      repeatDelay: 2.5,
      rotate: 45,
      scale: 1.0,
    },
    "<",
  );

  return tl;
};

export default createButtonAnimationTimeline;
