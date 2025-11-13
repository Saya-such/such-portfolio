//Tailwindの背景色クラスをまとめた定数
const BG_CLASS_MAP = {
  main: "bg-main",
  dark: "bg-dark",
  transparent: "bg-transparent",
} as const;

type BgKey = keyof typeof BG_CLASS_MAP;

/**
 * @description
 * 指定した背景色クラスを main 要素(mainEl)に適用する。
 * 既存の背景色クラス（BG_CLASS_MAP 内のクラス）は一度全て削除した上で、新しいクラスを追加することで衝突を防ぐ。
 */
const setBgColor = (mainEl: HTMLElement, key: BgKey) => {
  const newClassName = BG_CLASS_MAP[key];

  //既存の背景クラスを全て削除
  Object.values(BG_CLASS_MAP).forEach((v) => mainEl.classList.remove(v));

  //新しい背景クラスを付与
  mainEl.classList.add(newClassName);
};

export default setBgColor;
