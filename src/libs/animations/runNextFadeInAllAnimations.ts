import blurFadeIn from "@/libs/animations/blurFadeIn";
import fadeIn from "@/libs/animations/fadeIn";

export const setupNextFadeInAllAnimations = (
  next: HTMLElement,
): GSAPTimeline[] => {
  const nextFadeTargets = next.querySelectorAll(".fadeIn");
  const nextBlurFadeTargets = next.querySelectorAll(".blurFadeIn");

  const tls: GSAPTimeline[] = [];

  if (nextFadeTargets) {
    nextFadeTargets.forEach((target) => {
      if (target instanceof HTMLElement) {
        const tl = fadeIn({
          target: target,
          duration: 0.3,
        });
        tls.push(tl);
      }
    });
  }
  if (nextBlurFadeTargets) {
    nextBlurFadeTargets.forEach((target) => {
      if (target instanceof HTMLElement) {
        const tl = blurFadeIn({
          target: target,
          duration: 0.5,
          opacity: 0,
        });
        tls.push(tl);
      }
    });
  }

  return tls;
};

const runNextFadeInAllAnimations = (
  tls: GSAPTimeline[],
  direction: "in" | "out",
) => {
  tls.forEach((tl) => {
    if (direction === "in") {
      tl.play();
    } else {
      tl.reverse();
    }
  });
};

export default runNextFadeInAllAnimations;
