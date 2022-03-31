import "./ImagemFolha.css";

function ImagemFolha({
  src,
  sizes,
  className,
  onClick,
  maxTabletSize,
  maxMobileSize,
  maxDesktopSize,
  categoria,
}) {
  const imagemUrl = sizes
    .map(
      (size) =>
        `https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/${src}x${size}.png ${size}w`,
      // `https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/${src}x${size}.png ${size}w`,
    )
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
