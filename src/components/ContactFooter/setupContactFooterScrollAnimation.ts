import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import setBgColor from "@/libs/animations/setBgColor";

gsap.registerPlugin(ScrollTrigger);

const setupContactFooterScrollAnimation = (
  trigger: HTMLElement,
  prev: HTMLElement,
) => {
  const isSP = window.matchMedia(
    "(orientation: portrait) and (max-width: 1023px)",
  ).matches;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: true,
      start: isSP ? "50% bottom" : "60% bottom",
      end: "bottom bottom",
      onEnter: () => {
        prev.classList.replace("bg-main", "transparent");
        trigger.classList.replace("bg-main", "transparent");
      },
      onLeaveBack: () => {
        prev.classList.replace("transparent", "bg-main");
        trigger.classList.replace("transparent", "bg-main");
      },
    },
  });

  tl.to({}, { duration: 1 })
    .add(() => {
      setBgColor("main");
    }, 0.1)
    .add(() => {
      setBgColor("dark");
    }, 0.3);
};

export default setupContactFooterScrollAnimation;
