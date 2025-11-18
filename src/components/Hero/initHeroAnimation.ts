import blurFadeIn from "@/libs/animations/blurFadeIn";

const initHeroAnimation = () => {
  const heroEl = document.getElementById("hero");
  const logoEl = document.getElementById("hero-logo");

  if (!heroEl || !logoEl) return;

  //ロゴのフェードイン
  blurFadeIn({ target: logoEl, options: { y: -5 } });
};

export default initHeroAnimation;
