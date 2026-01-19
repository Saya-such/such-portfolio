import { gsap } from "gsap";

const toggleClassName = (el: HTMLElement, style?: string) => {
  el.classList.toggle(style ? style : "invisible");
};

const createHeaderMenuTimeline = ({
  openBtn,
  closeBtn,
  menuEl,
  overlay,
}: {
  openBtn: HTMLElement;
  closeBtn: HTMLElement;
  menuEl: HTMLElement;
  overlay: HTMLElement;
}): GSAPTimeline => {
  const openDeco = openBtn.querySelector(".diamond.animate");
  const openLabel = openBtn.querySelector(".menu-label");
  const closeDeco = closeBtn.querySelector(".diamond.animate");
  const closeLabel = closeBtn.querySelector(".menu-label");
  const menuNav = menuEl.querySelector(".menu-nav");

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.3,
      ease: "sine.in",
    },
  });

  if (!openDeco || !closeDeco || !openLabel || !closeLabel || !menuNav)
    return tl;

  tl.fromTo(openLabel, { opacity: 1.0 }, { opacity: 0 });
  tl.add(() => {
    toggleClassName(openBtn);
    toggleClassName(menuEl, "opacity-0");
    overlay.classList.replace("opacity-0", "opacity-50");
    toggleClassName(overlay);
    toggleClassName(menuEl);
    toggleClassName(closeBtn);
  });
  tl.fromTo(closeDeco, { scale: 0 }, { scale: 1.0 });
  tl.fromTo(closeLabel, { opacity: 0 }, { opacity: 1.0 });

  return tl;
};

export default createHeaderMenuTimeline;
