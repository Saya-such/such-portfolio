import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blurFadeIn from "@/libs/animations/blurFadeIn";
import fadeIn from "@/libs/animations/fadeIn";
import setBgColor from "@/libs/animations/setBgColor";

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

const createRhomsTimeline = ({
  prev,
  prevFade,
  // start,
  // end,
  afterFns,
  reverse,
  rhomsInner,
  rhomsImg,
}: {
  trigger: HTMLElement;
  prev: HTMLElement;
  prevFade: HTMLElement;
  // start: string;
  // end: string;
  afterFns?: (() => void)[];
  reverse: boolean;
  rhomsInner: HTMLElement;
  rhomsImg: NodeListOf<Element>;
}): GSAPTimeline => {
  const tl = gsap.timeline({
    onComplete: () => {
      if (afterFns) {
        runAfterFns(afterFns);
      }
    },
  });
  tl.to(rhomsInner, {
    filter: "blur(5px)",
  });
  tl.to(
    rhomsImg,
    {
      scale: 1.1,
    },
    "<",
  ).to(rhomsImg, {
    scale: 1.3,
  });
  if (!reverse) {
    tl.to(prevFade, {
      opacity: 0,
    });
    tl.to(prev, {
      opacity: 0,
    });
  }

  return tl;
};

const runNextFadeInAll = (next: HTMLElement, play: boolean = true) => {
  const nextFadeTargets = next.querySelectorAll(".fadeIn");
  const nextBlurFadeTargets = next.querySelectorAll(".blurFadeIn");

  if (nextFadeTargets) {
    nextFadeTargets.forEach((target) => {
      if (target instanceof HTMLElement) {
        const fadeInTl = fadeIn({
          target: target,
          duration: 0.3,
        });
        play ? fadeInTl.play() : fadeInTl.reverse();
      }
    });
  }
  if (nextBlurFadeTargets) {
    nextBlurFadeTargets.forEach((target) => {
      if (target instanceof HTMLElement) {
        const blurTl = blurFadeIn({
          target: target,
          duration: 0.5,
          opacity: 0,
        });
        play ? blurTl.play() : blurTl.reverse();
      }
    });
  }
};

const runAfterFns = (afterFns: (() => void)[]) => {
  afterFns.forEach((fn) => fn());
};

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
}) => {
  const rhomsInner = trigger.querySelector<HTMLElement>(".rhoms-inner");
  const rhomsImg = trigger.querySelectorAll(".rhoms-img");
  const prevFade = prev.querySelector<HTMLElement>(".fade");

  if (!rhomsInner || !rhomsImg || !prevFade) return;

  const tl = createRhomsTimeline({
    trigger,
    prev,
    prevFade,
    // start,
    // end,
    afterFns,
    rhomsInner,
    rhomsImg,
    reverse,
  });

  if (
    window.matchMedia("(orientation: portrait) and (max-width: 1024px)").matches
  ) {
    if (!reverse) {
      ScrollTrigger.create({
        trigger,
        id: "conceptRSP",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
        animation: tl,
        onEnter: () => {
          runNextFadeInAll(next, false);
        },
        onEnterBack: () => {
          runNextFadeInAll(next, false);
        },
        onLeave: () => {
          runNextFadeInAll(next, true);
        },
      });
    } else {
      ScrollTrigger.create({
        trigger,
        id: "worksRSP",
        start: "top 50%",
        end: "top top",
        scrub: true,
        animation: tl,
        onUpdate: (self) => {
          tl.progress(1 - self.progress);
        },
        onEnter: () => {
          runNextFadeInAll(next, false);
        },
        onEnterBack: () => {
          setBgColor("transparent");
          runNextFadeInAll(next, false);
          prevFade.classList.replace("opacity-0", "opacity-100");
        },
        onLeave: () => {
          prevFade.classList.replace("opacity-100", "opacity-0");
          runNextFadeInAll(next, true);
          setBgColor("main");
        },
      });
    }
  } else {
    if (!reverse) {
      ScrollTrigger.create({
        trigger,
        id: "conceptRPC",
        start: "top 80%",
        end: "top top",
        scrub: 1,
        animation: tl,
        onEnter: () => {
          runNextFadeInAll(next, false);
        },
        onEnterBack: () => {
          runNextFadeInAll(next, false);
        },
        onLeave: () => {
          runNextFadeInAll(next, true);
        },
      });
    } else {
      ScrollTrigger.create({
        trigger,
        id: "worksRPC",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        animation: tl,
        onUpdate: (self) => {
          tl.progress(1 - self.progress);
        },
        onEnter: () => {
          runNextFadeInAll(next, false);
        },
        onEnterBack: () => {
          setBgColor("transparent");
          runNextFadeInAll(next, false);
          prevFade.classList.replace("opacity-0", "opacity-100");
        },
        onLeave: () => {
          prevFade.classList.replace("opacity-100", "opacity-0");
          runNextFadeInAll(next, true);
          setBgColor("main");
        },
      });
    }
  }
};

export default setupRhomsScrollAnimation;
