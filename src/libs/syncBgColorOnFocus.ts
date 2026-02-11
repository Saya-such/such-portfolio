import setBgColor from "@/libs/animations/setBgColor";

const syncBgColorOnFocus = (next: HTMLElement) => {
  let tabbing = false;

  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") tabbing = true;
  });

  const runSetBgColor = () => {
    const rect = next.getBoundingClientRect();
    const mainColorY = rect.top + window.scrollY;
    const darkColorY = rect.bottom + window.scrollY;
    const scrollY = window.scrollY;

    if (scrollY < mainColorY) {
      setBgColor("transparent");
    } else if (darkColorY < scrollY) {
      setBgColor("dark");
    } else {
      setBgColor("main");
    }
  };

  document.addEventListener("focusin", () => {
    if (!tabbing) return;
    tabbing = false;

    requestAnimationFrame(() => {
      requestAnimationFrame(runSetBgColor);
    });
  });
};

export default syncBgColorOnFocus;
