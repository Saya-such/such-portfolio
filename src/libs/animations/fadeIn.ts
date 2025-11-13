import { gsap } from "gsap";
import type { FadeInProps } from "@/types/FadeInProps";

const fadeIn = ({ target, duration = 1.0, options = {} }: FadeInProps) => {
  return gsap.from(target, {
    opacity: 0,
    duration,
    ease: "power1.in",
    ...options,
  });
};

export default fadeIn;
