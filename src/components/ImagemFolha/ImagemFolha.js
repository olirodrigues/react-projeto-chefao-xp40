import "./ImagemFolha.css";

//<img class="sem-borda"
//   srcset="/imagem/PC0101-80.png 80w, /imagem/PC0101-500.png 500w, /imagem/PC0101-250.png 250w,/imagem/PC0101-30.png 30w"
//   size="(max-width=500px)" alt="">

function ImagemFolha({
  src,
  sizes,
  className,
  onClick,
  maxTabletSize,
  maxMobileSize,
  maxDesktopSize,
}) {
  const imagemUrl = sizes
    .map((size) => `/imagem/${src}-${size}.png ${size}w`)
    .join(", ");

  return (
    <div onClick={onClick} className={"container-" + className}>
      <img
        className={className}
        srcSet={imagemUrl}
        sizes={`(width <= 375px) ${maxMobileSize}, (width <= 1024px and width > 365px) ${maxTabletSize}, ${maxDesktopSize}`}
        alt=""
      ></img>
    </div>
  );
}

export default ImagemFolha;
