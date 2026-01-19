import setupContactFooterScrollAnimation from "./setupContactFooterScrollAnimation";

const initContactFooterAnimations = () => {
  const trigger = document.getElementById("footer");
  const contact = document.getElementById("contact");

  if (!trigger || !contact) return;

  setupContactFooterScrollAnimation(trigger, contact);
};

export default initContactFooterAnimations;
