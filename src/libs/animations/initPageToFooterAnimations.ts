import setupRhomsScrollAnimation from "./setupRhomsScrollAnimation";

const initPageToFooterAnimations = (prev: HTMLElement) => {
  const rhoms = prev.querySelector<HTMLElement>("#rhoms-lower");
  const next = document.getElementById("contact");

  if (!rhoms || !next) return;

  setupRhomsScrollAnimation({
    trigger: rhoms,
    prev,
    next,
    start: "top 50%",
    end: "top top",
    startPC: "top bottom",
    endPC: "bottom 60%",
    kind: "WorksToFooter",
  });
};

export default initPageToFooterAnimations;
