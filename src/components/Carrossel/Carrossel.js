import { useState } from "react";
import "./Carrossel.css";
import ImagemFolha from "../ImagemFolha/ImagemFolha";

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

  const [fotoCarrossel, setFotoCarrossel] = useState(
    Object.entries(fotosSizes)[0][0],
  );

  return (
    <div className="container-carrossel-grid">
      <div className="container-carrossel">
        <ImagemFolha
          key={fotoCarrossel}
          src={fotoCarrossel}
          sizes={Object.entries(fotosSizes)[0][1]}
          className="sem-borda"
          maxMobileSize="250px"
          maxTabletSize="500px"
          maxDesktopSize="500px"
          categoria={props.categoria}
          url={`https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/${props.categoria}`}
        />
      </div>

      <div className="container-grid">
        {Object.entries(fotosSizes).map(([fotos, sizes]) => {
          return (
            <ImagemFolha
              key={fotos}
              src={fotos}
              sizes={sizes}
              className="sem-borda"
              maxMobileSize="30px"
              maxTabletSize="80px"
              maxDesktopSize="80px"
              onClick={() => setFotoCarrossel(fotos)}
              url={`https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/${props.categoria}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carrossel;
