import createHeaderMenuTimeline from "./createHeaderMenuTimeline";

const manageHeaderMenuAnimations = () => {
  const target = document.getElementById("menu");

  if (!target) return;

  const buttonEl = target.querySelector<HTMLElement>("#menu-btn");
  const menuEl = target.querySelector<HTMLElement>("#menu-content");

  if (!buttonEl || !menuEl) return;

  let isOpen: boolean = false;
  const menuTl = createHeaderMenuTimeline(target);

  buttonEl.addEventListener("click", () => {
    if (!isOpen) {
      menuTl.timeScale(1).play();
      buttonEl.setAttribute("aria-expanded", "true");
      isOpen = true;
    } else {
      menuTl.timeScale(1).reverse();
      buttonEl.setAttribute("aria-expanded", "false");
      isOpen = false;
    }
  });

  //メニューリンククリック時にメニューを閉じる
  menuEl.addEventListener("click", () => {
    if (isOpen) {
      menuTl.timeScale(3).reverse();
      buttonEl.setAttribute("aria-expanded", "false");
      isOpen = false;
    }
  });
};

export default manageHeaderMenuAnimations;
