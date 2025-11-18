import { gsap } from "gsap";

const createButtonAnimationTimeline = (target: HTMLElement) => {
  const tl = gsap.timeline();

  tl.set(".btn-dia", { rotation: 45 });

  tl.to(target, {
    repeat: -1,
    duration: 3.0,
    repeaDelay: 2.0,
    keyframes: [
      { scale: 1.0, opacity: 1.0, duration: 0.08 },
      { scale: 1.2, opacity: 1.0, duration: 0.02 },
      { scale: 1.3, opacity: 0.9, duration: 0.1 },
      { scale: 1.3, opacity: 0, duration: 0.1 },
      { scale: 1.0, opacity: 1.0, ease: "power1.in", duration: 0.1 },
    ],
  }).to(
    ".btn-dia",
    {
      repeat: -1,
      duration: 3.0,
      repeaDelay: 2.0,
      keyframes: [
        { scale: 1.0, duration: 0.1 },
        { scale: 0.9, duration: 0.1 },
        { scale: 1.0, delay: 0.1, ease: "power1.in", duration: 0.1 },
      ],
    },
    "<",
  );

  return tl;
};

export default createButtonAnimationTimeline;
