const reload = () => {
  let width = window.innerWidth;

  //リサイズ時にリロード処理
  window.addEventListener("resize", () => {
    if (width === window.innerWidth) return;
    width = window.innerWidth;
    window.location.reload();
  });

  //端末の向きが変化した時にリロード処理
  window.addEventListener("orientationchange", () => {
    window.location.reload();
  });
};

export default reload;
