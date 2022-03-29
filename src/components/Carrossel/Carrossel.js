import { useState } from "react";
import "./Carrossel.css";
import ImagemFolha from "../ImagemFolha/ImagemFolha";

function Carrossel() {
  const plantas = {
    foto: {
      id: 1,

      desktop_1: "PC0101x500",
      desktop_2: "PC0102x500",
      desktop_3: "PC0103x500",
      desktop_icon_1: "PC0101x80",
      desktop_icon_2: "PC0102x80",
      desktop_icon_3: "PC0103x80",
      celular_1: "PC0101x250",
      celular_2: "PC0102x250",
      celular_3: "PC0103x250",
      celular_icon_1: "PC0101x30",
      celular_icon_2: "PC0102x30",
      celular_icon_3: "PC0103x30",
      cel_categorias_plantas: "PC0101x150",
    },
  };

  const fotosSizes = Object.values(plantas.foto)
    .filter((fotos) => typeof fotos === "string")
    .map((fotos) => fotos.split("x"))
    .reduce((picsWithResolutions, [fotos, resolution]) => {
      if (!picsWithResolutions[fotos]) {
        picsWithResolutions[fotos] = [];
      }
      picsWithResolutions[fotos].push(resolution);

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
        />
      </div>

      <div className="container-grid">
        {Object.entries(fotosSizes).map(([fotos, resolutions]) => {
          return (
            <ImagemFolha
              key={fotos}
              src={fotos}
              sizes={resolutions}
              className="sem-borda"
              maxMobileSize="30px"
              maxTabletSize="80px"
              maxDesktopSize="80px"
              onClick={() => setFotoCarrossel(fotos)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carrossel;
