import blurFadeIn from "@/libs/animations/blurFadeIn";
import setupElementHeight from "@/libs/setupElementHeight";

const manageHero = () => {
  const heroEl = document.getElementById("hero");

  if (!heroEl) return;

  const logoEl = heroEl.querySelector<HTMLElement>("#hero-logo");

  if (!logoEl) return;

  //ロゴのフェードイン
  const tl = blurFadeIn({
    target: logoEl,
    fromOptions: { y: -5 },
    toOptions: { y: 0 },
  });
  tl.play();

  //Heroの高さを初回読み込み時のビューポートに固定
  setupElementHeight(heroEl);
};

export default manageHero;
