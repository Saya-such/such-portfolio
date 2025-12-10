import setupRhomsScrollAnimation from "@/libs/animations/setupRhomsScrollAnimation";

const initWorksToFooterAnimations = () => {
  const rhoms = document.getElementById("rhoms-works");
  const prev = document.getElementById("works");
  const next = document.getElementById("contact");

  if (!rhoms || !prev || !next) return;

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

export default initWorksToFooterAnimations;
