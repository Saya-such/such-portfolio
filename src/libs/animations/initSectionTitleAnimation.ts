import startBlurFadeInOnScroll from "@/libs/animations/startBlurFadeInOnScroll";

const initSectionTitleAnimation = () => {
  const targets = document.querySelectorAll<HTMLElement>(".sec-tit");

  return Array.from(targets).map((target) => {
    startBlurFadeInOnScroll({ target });
  });
};

export default initSectionTitleAnimation;
