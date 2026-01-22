const basePath = (path: string) => {
  const base = import.meta.env.BASE_URL;

  //二重スラッシュの防止
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${base}${normalizedPath}`;
};

export default basePath;
