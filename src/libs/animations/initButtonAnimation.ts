import createButtonAnimationTimeline from "@/components/Button/createButtonAnimationTimeline";

const initButtonAnimation = () => {
  const buttons = document.querySelectorAll(".btn-link");

  if (!buttons.length) return;

  return Array.from(buttons).map((target) => {
    let tl = createButtonAnimationTimeline(target as HTMLElement);
    tl.play();

    target.addEventListener("pointerenter", () => {
      tl.seek(1.5).pause();
    });
    target.addEventListener("pointerleave", () => {
      tl.restart();
    });
  });
};

export default initButtonAnimation;
