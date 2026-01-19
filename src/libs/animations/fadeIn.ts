import { gsap } from "gsap";
import type { FadeInProps } from "@/types/FadeInProps";

const fadeIn = ({
  target,
  duration = 0.8,
  fromOptions = {},
  toOptions = {},
}: FadeInProps): GSAPTimeline => {
  const tl = gsap.timeline({ pause: true });
  tl.fromTo(
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

  return tl;
};

export default fadeIn;
