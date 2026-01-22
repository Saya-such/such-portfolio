const basePath = (path: string) => {
  const base = import.meta.env.BASE_URL;

  // baseとpathの間のスラッシュを1つにする
  // baseの末尾にスラッシュがあるかどうかで条件分岐
  const updateBase = base.endsWith("/") ? base : `${base}/`;
  // 受け取ったpathがスラッシュで始めるかどうかで条件分岐
  const updatePath = path.startsWith("/") ? path.slice(1) : path;

  return `${updateBase}${updatePath}`;
};

export default basePath;
