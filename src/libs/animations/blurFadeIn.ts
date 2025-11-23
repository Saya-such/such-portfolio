import { gsap } from "gsap";
import type { FadeInProps } from "@/types/FadeInProps";

const blurFadeIn = ({
  target,
  duration = 0.8,
  fromOptions = {},
  toOptions = {},
}: FadeInProps) => {
  return gsap.fromTo(
    target,
    {
      ...fromOptions,
      opacity: 0.3,
      filter: "blur(8px)",
    },
    {
      ...toOptions,
      opacity: 1.0,
      filter: "blur(0px)",
      duration,
      ease: "power1.in",
    },
  );
};

export default blurFadeIn;
