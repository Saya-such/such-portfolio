import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const createConceptImageLoopTimeline = (trigger: HTMLElement): GSAPTimeline => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      toggleActions: "play pause resume pause",
    },
  });

  tl.to(trigger, {
    repeat: -1,
    keyframes: [
      {
        y: 8,
        rotate: -1,
        opacity: 0.5,
        ease: "power1.in",
        duration: 2.0,
      },
      { y: 0, rotate: 0, opacity: 1.0, duration: 2.0 },
    ],
  });

  return tl;
};

export default createConceptImageLoopTimeline;
