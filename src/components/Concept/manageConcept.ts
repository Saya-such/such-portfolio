import createConceptImageLoopTimeline from "./createConceptImageLoopTimeline";

const manageConcept = () => {
  const imgEl = document.getElementById("concept-img");

  if (!imgEl) return;

  createConceptImageLoopTimeline(imgEl);
};

export default manageConcept;
