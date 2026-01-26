import { gsap } from "gsap";

const toggleClassName = (el: HTMLElement, style?: string) => {
  el.classList.toggle(style ? style : "invisible");
};

const createHeaderMenuTimeline = (target: HTMLElement): GSAPTimeline => {
  const openBtn = target.querySelector<HTMLElement>("#menu-open");
  const closeBtn = target.querySelector<HTMLElement>("#menu-close");
  const menuEl = target.querySelector<HTMLElement>("#menu-content");
  const overlay = target.querySelector<HTMLElement>("#menu-overlay");
  const openDeco = openBtn?.querySelector<HTMLElement>(".diamond.animate");
  const openLabel = openBtn?.querySelector<HTMLElement>(".menu-label");
  const closeDeco = closeBtn?.querySelector<HTMLElement>(".diamond.animate");
  const closeLabel = closeBtn?.querySelector<HTMLElement>(".menu-label");
  const menuNav = menuEl?.querySelector<HTMLElement>(".menu-nav");

  const tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.3,
      ease: "sine.in",
    },
  });

  if (
    !openBtn ||
    !closeBtn ||
    !menuEl ||
    !overlay ||
    !openDeco ||
    !closeDeco ||
    !openLabel ||
    !closeLabel ||
    !menuNav
  )
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
