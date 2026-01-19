import { gsap } from "gsap";
import type { FadeInProps } from "@/types/FadeInProps";

const blurFadeIn = ({
  target,
  duration = 0.8,
  opacity = 0.3,
  fromOptions = {},
  toOptions = {},
}: FadeInProps): GSAPTimeline => {
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    target,
    {
      ...fromOptions,
      opacity,
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

  return tl;
};

export default blurFadeIn;
