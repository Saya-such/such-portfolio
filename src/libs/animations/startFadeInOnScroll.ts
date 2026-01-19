import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { FadeInProps } from "@/types/FadeInProps";

gsap.registerPlugin(ScrollTrigger);

const startFadeInOnScroll = ({ target, duration = 0.5 }: FadeInProps) => {
  return gsap.from(target, {
    y: 3,
    opacity: 0,
    duration,
    ease: "power1.in",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
    },
  });
};

export default startFadeInOnScroll;
