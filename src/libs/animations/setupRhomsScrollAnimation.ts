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
}): GSAPTimeline | null | void => {
  let tl = null;

  const rhomsImg = trigger.getElementsByClassName("rhoms-img");

  if (!rhomsImg) return;

  const prevFade = prev.querySelector(".fade");

  const runNextFadeAll = (play: boolean = true) => {
    const nextFadeTargets = next.querySelectorAll(".fadeIn");
    const nextBlurFadeTargets = next.querySelectorAll(".blurFadeIn");

    if (nextFadeTargets) {
      nextFadeTargets.forEach((target) => {
        const fadeInTl = fadeIn({
          target: target as HTMLElement,
          duration: 0.3,
        });
        play ? fadeInTl.reverse() : fadeInTl.play();
      });
    }
    if (nextBlurFadeTargets) {
      nextBlurFadeTargets.forEach((target) => {
        const blurTl = blurFadeIn({
          target: target as HTMLElement,
          duration: 0.5,
          opacity: 0,
        });
        play ? blurTl.reverse() : blurTl.play();
      });
    }
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
        scrub: 1,
        onEnter: () => {
          if (reverse) {
            runNextFadeAll(false);
          } else {
            runNextFadeAll(true);
          }
        },
        onEnterBack: () => {
          if (reverse) {
            runNextFadeAll(false);
          } else {
            runNextFadeAll(true);
          }
        },
        onLeave: () => {
          if (reverse) {
            runNextFadeAll(true);
          } else {
            runNextFadeAll(false);
          }
        },
        onLeaveBack: () => {
          if (reverse) {
            runNextFadeAll(true);
          } else {
            runNextFadeAll(false);
          }
        },
      },
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

  if (tl !== null) {
    tl.to(rhomsImg, {
      filter: "blur(5px)",
      scale: 1.1,
    }).to(rhomsImg, {
      scale: 1.3,
    });
    if (prevFade) {
      tl.to(prevFade, {
        opacity: 0,
      });
    }
    tl.to(prev, {
      opacity: 0,
    });
  }

  return tl;
};

export default setupRhomsScrollAnimation;
