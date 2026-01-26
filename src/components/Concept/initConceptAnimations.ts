import startBlurFadeInOnScroll from "@/libs/animations/startBlurFadeInOnScroll";
import createConceptImageLoopTimeline from "./createConceptImageLoopTimeline";

const initConceptAnimations = (trigger: HTMLElement) => {
  const tit = trigger.querySelector<HTMLElement>("#concept-tit");
  const img = trigger.querySelector<HTMLElement>("#concept-img");

  if (!tit || !img) return;

  startBlurFadeInOnScroll({ target: tit });
  createConceptImageLoopTimeline(img);
};

export default initConceptAnimations;
