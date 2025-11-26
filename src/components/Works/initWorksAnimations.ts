import startBlurFadeInOnScroll from "@/libs/animations/startBlurFadeInOnScroll";

const initWorksAnimations = () => {
  const tit = document
    .getElementById("works")
    ?.querySelector<HTMLElement>(".sec-tit");

  if (!tit) return;

  startBlurFadeInOnScroll({ target: tit });
};

export default initWorksAnimations;
