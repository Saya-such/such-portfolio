import Lenis from "lenis";

/**
 * @description ページ全体に慣性スクロールの適用をする。
 */
const enableSmoothScroll = () => {
  const lenis = new Lenis({
    //アンカーリンクにも適用
    anchors: true,
  });

  function raf(time: DOMHighResTimeStamp) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export default enableSmoothScroll;
