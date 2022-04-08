import { useState } from "react";
import "./Carrossel.css";
import ImagemFolha from "../ImagemFolha/ImagemFolha";
import SetaDireita from "../../assets/svg/setas/setaDireita.svg";
import SetaEsquerda from "../../assets/svg/setas/setaEsquerda.svg";

function Carrossel(props) {
  const fotosSizes = Object.values(props.fotos)
    .filter((fotos) => typeof fotos === "string")
    .map((fotos) => fotos.split("x"))
    .reduce((picsWithResolutions, [fotos, sizes]) => {
      if (!picsWithResolutions[fotos]) {
        picsWithResolutions[fotos] = [];
      }
      picsWithResolutions[fotos].push(sizes);

      return picsWithResolutions;
    }, {});

  const [fotoCarrossel, setFotoCarrossel] = useState(0);
  const [current, setCurrent] = useState(0);
  const lenght = Object.entries(fotosSizes).length;

  // const nextSlide = () => {
  //   setCurrent(current === 0 ? lenght - 1 : current - 1);
  // };

  // const plevSlide = () => {
  //   setCurrent(current === lenght - 1 ? 0 : current + 1);
  // };

  const animacaoCarrossel = (index) => {
    if (fotoCarrossel === 0) {
      if (index === fotoCarrossel + 1) {
        return "slide proximo";
      }
      if (index === lenght - 1) {
        return "slide anterior";
      }
      return "slide select";
    }
    if (fotoCarrossel === 1) {
      if (index === fotoCarrossel + 1) {
        return "slide proximo";
      }
      if (index === fotoCarrossel - 1) {
        return "slide anterior";
      }
      return "slide select";
    }
    if (fotoCarrossel === 2) {
      if (index === 0) {
        return "slide proximo";
      }
      if (index === fotoCarrossel - 1) {
        return "slide anterior";
      }
      return "slide select";
    }
  };

  return (
    <div className="container-carrossel-grid">
      <div className="container-carrossel">
        {Object.entries(fotosSizes).map(([fotos, sizes], index) => {
          return (
            <ImagemFolha
              key={fotos}
              src={fotos}
              sizes={sizes}
              className={`sem-borda ${animacaoCarrossel(index)}`}
              maxMobileSize="250px"
              maxTabletSize="500px"
              maxDesktopSize="500px"
              urlImagens={`https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/${props.categoria}`}
            />
          );
        })}
      </div>

      <div className="container-grid">
        {Object.entries(fotosSizes).map(([fotos, sizes], index) => {
          return (
            <>
              <ImagemFolha
                key={fotos}
                src={fotos}
                sizes={sizes}
                className={`sem-borda ${animacaoCarrossel(index)} ${
                  fotoCarrossel === index
                    ? "foto-carrossel-com-foco"
                    : "foto-carrossel-sem-foco"
                }`}
                maxMobileSize="30px"
                maxTabletSize="80px"
                maxDesktopSize="80px"
                onClick={() => setFotoCarrossel(index)}
                urlImagens={`https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/${props.categoria}`}
              />
              <div className="containter-setas__carrosel">
                <img src={SetaEsquerda} alt="seta direita"  />
                <img src={SetaDireita} alt="seta direita"  />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Carrossel;
