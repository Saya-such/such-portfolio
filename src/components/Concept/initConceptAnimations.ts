import startBlurFadeInOnScroll from "@/libs/animations/startBlurFadeInOnScroll";
import createConceptImageLoopTimeline from "./createConceptImageLoopTimeline";

const initConceptAnimations = () => {
  const trigger = document.getElementById("concept");

  if (!trigger) return;

  const tit = trigger.querySelector<HTMLElement>("#concept-tit");
  const img = trigger.querySelector<HTMLElement>("#concept-img");

  if (!tit || !img) return;

  startBlurFadeInOnScroll({ target: tit });
  createConceptImageLoopTimeline(img);
};

export default initConceptAnimations;
