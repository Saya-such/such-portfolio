import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import setBgColor from "@/libs/animations/setBgColor";

gsap.registerPlugin(ScrollTrigger);

const setupContactFooterScrollAnimation = (
  trigger: HTMLElement,
  prev: HTMLElement,
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: true,
      markers: true,
      start: "top bottom",
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

  tl.add(() => {
    setBgColor("main");
  }, 0.3).add(() => {
    setBgColor("dark");
  }, 0.5);
};

export default setupContactFooterScrollAnimation;
