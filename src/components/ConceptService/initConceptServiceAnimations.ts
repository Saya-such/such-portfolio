import setupRhomsScrollAnimation from "@/libs/animations/setupRhomsScrollAnimation";

const initConceptServiceAnimations = () => {
  const rhoms = document.getElementById("rhoms-concept");
  const prev = document.getElementById("concept");
  const next = document.getElementById("service");

  if (!rhoms || !prev || !next) return;

  setupRhomsScrollAnimation({
    trigger: rhoms,
    prev,
    next,
    start: "top 80%",
    end: "bottom 50%",
    startPC: "top 80%",
    endPC: "10% top",
    kind: "ConceptService",
  });
};

export default initConceptServiceAnimations;
