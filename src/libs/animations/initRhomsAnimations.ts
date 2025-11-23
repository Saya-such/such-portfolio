import setupRhomsScrollAnimation from "@/libs/animations/setupRhomsScrollAnimation";

const initRhomsAnimations = () => {
  const cRhoms = document.getElementById("rhoms-concept");
  const cRhomsPrev = document.getElementById("concept");
  const cRhomsNext = document.getElementById("service");

  const wRhoms = document.getElementById("rhoms-works");
  const wRhomsPrev = document.getElementById("works");
  const wRhomsNext = document.getElementById("contact");

  if (
    !cRhoms ||
    !cRhomsPrev ||
    !cRhomsNext ||
    !wRhoms ||
    !wRhomsPrev ||
    !wRhomsNext
  )
    return;

  setupRhomsScrollAnimation({
    trigger: cRhoms,
    prev: cRhomsPrev,
    next: cRhomsNext,
  });

  setupRhomsScrollAnimation({
    trigger: wRhoms,
    prev: wRhomsPrev,
    next: wRhomsNext,
    reverse: true,
  });
};

export default initRhomsAnimations;
