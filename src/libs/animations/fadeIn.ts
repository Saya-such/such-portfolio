import { gsap } from "gsap";
import type { FadeInProps } from "@/types/FadeInProps";

const fadeIn = ({
  target,
  duration = 0.8,
  fromOptions = {},
  toOptions = {},
}: FadeInProps) => {
  return gsap.fromTo(
    target,
    {
      ...fromOptions,
      opacity: 0,
    },
    {
      ...toOptions,
      opacity: 1.0,
      duration,
      ease: "power1.in",
    },
  );
};

export default fadeIn;
