const headerEl = document.getElementById("header");
const menuEl = document.getElementById("menu");
const logo = headerEl
  ?.querySelector<HTMLElement>("#header-logo")
  ?.querySelector("svg");
const menuOpen = menuEl?.querySelector<HTMLElement>("#menu-open");
const whiteDia = menuOpen?.querySelector(".dia-white");
const mainColorDia = menuOpen?.querySelector(".dia-main");
const menuLabel = menuOpen?.querySelector(".menu-label");

const setHeaderColor = (color: "white" | "main") => {
  if (
    !headerEl ||
    !menuEl ||
    !logo ||
    !menuOpen ||
    !whiteDia ||
    !mainColorDia ||
    !menuLabel
  )
    return;

  if (color === "main") {
    logo.classList.replace("fill-white", "fill-main");
    whiteDia.classList.replace("opacity-100", "opacity-0");
    mainColorDia.classList.replace("opacity-0", "opacity-100");
    menuLabel.classList.replace("text-white", "text-main");
  } else {
    logo.classList.replace("fill-main", "fill-white");
    whiteDia.classList.replace("opacity-0", "opacity-100");
    mainColorDia.classList.replace("opacity-100", "opacity-0");
    menuLabel.classList.replace("text-main", "text-white");
  }
};
export default setHeaderColor;
