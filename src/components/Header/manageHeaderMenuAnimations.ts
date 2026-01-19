import createHeaderMenuTimeline from "./createHeaderMenuTimeline";

const manageHeaderMenuAnimations = () => {
  const buttonEl = document.getElementById("menu-btn");
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");
  const menuEl = document.getElementById("menu-content");
  const overlay = document.getElementById("menu-overlay");

  if (!buttonEl || !openBtn || !closeBtn || !menuEl || !overlay) return;

  let isOpen: boolean = false;
  const menuTl = createHeaderMenuTimeline({
    openBtn,
    closeBtn,
    menuEl,
    overlay,
  });

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
