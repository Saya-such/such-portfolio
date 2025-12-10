import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import runNextFadeInAllAnimations from "@/libs/animations/runNextFadeInAllAnimations";
import { setupNextFadeInAllAnimations } from "@/libs/animations/runNextFadeInAllAnimations";
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

type Kind = "ConceptService" | "WorksToFooter";

const createRhomsTimeline = ({
  prev,
  rhomsInner,
  rhomsImg,
  kind,
}: {
  prev: HTMLElement;
  rhomsInner: HTMLElement;
  rhomsImg: NodeListOf<Element>;
  kind: Kind;
}): GSAPTimeline | null => {
  const isConcept = kind === "ConceptService";

  const tl = gsap.timeline();

  tl.to(rhomsInner, {
    filter: "blur(5px)",
  })
    .to(
      rhomsImg,
      {
        scale: 1.1,
      },
      "<",
    )
    .to(rhomsImg, {
      scale: 1.3,
    });
  if (isConcept) {
    tl.to(prev, {
      opacity: 0,
    });
  }

  return tl;
};

const setupRhomsScrollAnimation = ({
  trigger,
  prev,
  next,
  start,
  end,
  startPC,
  endPC,
  kind,
}: {
  trigger: HTMLElement;
  prev: HTMLElement;
  next: HTMLElement;
  start: string;
  end: string;
  startPC: string;
  endPC: string;
  kind: Kind;
}) => {
  const rhomsInner = trigger.querySelector<HTMLElement>(".rhoms-inner");
  const rhomsImg = trigger.querySelectorAll(".rhoms-img");

  if (!rhomsInner || !rhomsImg) return;

  const tl = createRhomsTimeline({
    prev,
    rhomsInner,
    rhomsImg,
    kind,
  });

  if (!tl) return;

  const isConcept = kind === "ConceptService";

  const prevFade = prev.querySelector(".prev-fade");

  const isSP = window.matchMedia(
    "(orientation: portrait) and (max-width: 1024px)",
  );

  const nextFadeInTls = setupNextFadeInAllAnimations(next);

  const handleUpdate = isConcept
    ? undefined
    : (self: ScrollTrigger) => {
        tl.progress(1 - self.progress);
      };

  ScrollTrigger.create({
    trigger,
    id: kind,
    start: isSP ? start : startPC,
    end: isSP ? end : endPC,
    scrub: 1,
    animation: isConcept ? tl : undefined,
    onUpdate: handleUpdate,
    onEnter: () => {
      runNextFadeInAllAnimations(nextFadeInTls, "out");
    },
    onEnterBack: () => {
      if (isConcept) {
        runNextFadeInAllAnimations(nextFadeInTls, "out");
      } else {
        if (prevFade) {
          setBgColor("transparent");
          runNextFadeInAllAnimations(nextFadeInTls, "out");
          prevFade.classList.replace("opacity-0", "opacity-100");
        }
      }
    },
    onLeave: () => {
      if (isConcept) {
        runNextFadeInAllAnimations(nextFadeInTls, "in");
      } else {
        if (prevFade) {
          prevFade.classList.replace("opacity-100", "opacity-0");
          runNextFadeInAllAnimations(nextFadeInTls, "in");
          setBgColor("main");
        }
      }
    },
  });
};

export default setupRhomsScrollAnimation;
