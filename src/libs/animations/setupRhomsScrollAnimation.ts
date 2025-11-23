import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blurFadeIn from "./blurFadeIn";
import fadeIn from "./fadeIn";

gsap.registerPlugin(ScrollTrigger);

/**
 * セクション間のスクロールにあわせて Rhoms アニメーションをセットアップする。
 *
 * @param {Object} params
 * @param {HTMLElement} params.trigger - ScrollTrigger のトリガーになるRhoms要素
 * @param {HTMLElement} params.prev - 一つ前のセクション要素(triggerの親コンポーネント)
 * @param {HTMLElement} params.next - 一つ先のセクション要素
 * @param {string} params.start - ScrollTrigger の開始位置
 * @param {string} params.end - ScrollTrigger の終了位置
 * @param {(() => void)[]} [params.after] - アニメーション完了後に実行する関数の配列
 */

const setupRhomsScrollAnimation = ({
  trigger,
  prev,
  next,
  // start,
  // end,
  afterFns,
  reverse = false,
}: {
  trigger: HTMLElement;
  prev: HTMLElement;
  next: HTMLElement;
  // start: string;
  // end: string;
  afterFns?: (() => void)[];
  reverse?: boolean;
}): GSAPTimeline | null => {
  let tl = null;

  const rhomsImg = trigger.getElementsByClassName("rhoms-img");

  const prevFade = prev.querySelector(".fade");

  const nextFadeInAll = () => {
    const nextFadeTargets = next.querySelectorAll(".fadeIn");
    const nextBlurFadeTargets = next.querySelectorAll(".blurFadeIn");

    nextFadeTargets.forEach((target) =>
      fadeIn({ target: target as HTMLElement }),
    );
    nextBlurFadeTargets.forEach((target) =>
      blurFadeIn({ target: target as HTMLElement }),
    );
  };

  const runAfterFns = () => {
    if (afterFns) {
      afterFns.forEach((fn) => fn());
    }
  };

  if (window.matchMedia("(orientation: portrait) and (max-width: 1024px)")) {
    tl = gsap.timeline({
      onComplete: runAfterFns,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        end: "bottom 50%",
        markers: true,
        scrub: 1,
        onLeave: () => {
          nextFadeInAll();
        },
      },
    });
    tl.to(rhomsImg, {
      filter: "blur(5px)",
      scale: 1.2,
    });
    tl.to(prevFade, {
      opacity: 0,
    });
    tl.to(prev, {
      opacity: 0,
    });
  } else {
    tl = gsap.timeline({
      onComplete: runAfterFns,
      scrollTrigger: {
        trigger,
        start: "top 80%",
        end: "top top",
        markers: true,
        scrub: 1,
      },
    });
  }

  return tl;
};

export default setupRhomsScrollAnimation;
