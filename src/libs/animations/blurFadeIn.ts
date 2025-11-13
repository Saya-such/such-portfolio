import { gsap } from "gsap";
import type { FadeInProps } from "@/types/FadeInProps";

const blurFadeIn = ({ target, duration = 1.0, options = {} }: FadeInProps) => {
  return gsap.from(target, {
    opacity: 0.3,
    filter: "blur(8px)",
    duration,
    ease: "power1.inOut",
    ...options,
  });
};

export default blurFadeIn;
