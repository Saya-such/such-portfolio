import createButtonAnimationTimeline from "@/components/Button/createButtonAnimationTimeline";

const initButtonAnimation = () => {
  const targets = document.querySelectorAll(".btn-circle");

  if (!targets) return;

  return Array.from(targets).map((target) => {
    createButtonAnimationTimeline(target as HTMLElement);
  });
};

export default initButtonAnimation;
