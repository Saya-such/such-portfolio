import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { FadeInProps } from "@/types/FadeInProps";

gsap.registerPlugin(ScrollTrigger);

const startBlurFadeInOnScroll = ({ target, duration = 0.5 }: FadeInProps) => {
  return gsap.from(target, {
    opacity: 0.3,
    filter: "blur(8px)",
    duration,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
    },
  });
};

export default startBlurFadeInOnScroll;
