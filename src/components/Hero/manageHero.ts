import blurFadeIn from "@/libs/animations/blurFadeIn";
import setupElementHeight from "@/libs/setupElementHeight";

const manageHero = () => {
  const heroEl = document.getElementById("hero");
  const logoEl = document.getElementById("hero-logo");

  if (!heroEl || !logoEl) return;

  //ロゴのフェードイン
  blurFadeIn({ target: logoEl, options: { y: -5 } });

  //Heroの高さを初回読み込み時のビューポートに固定
  setupElementHeight(heroEl);
};

export default manageHero;
