import startBlurFadeInOnScroll from "@/libs/animations/startBlurFadeInOnScroll";
import createConceptImageLoopTimeline from "./createConceptImageLoopTimeline";

const initConceptAnimations = () => {
  const tit = document.getElementById("concept-tit");
  const img = document.getElementById("concept-img");

  if (!tit || !img) return;

  startBlurFadeInOnScroll({ target: tit });
  createConceptImageLoopTimeline(img);
};

export default initConceptAnimations;
