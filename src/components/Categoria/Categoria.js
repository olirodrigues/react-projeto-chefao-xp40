import Botao from "../Botao/Botao";
import ImagemFolha from "../ImagemFolha/ImagemFolha";
import "./Categoria.css";
import { Link } from "react-router-dom";

const Categorias = (props) => {
  const fotosDasPlantas = props.fotos
    .filter((fotos) => typeof fotos === "string")
    .map((pic) => pic.split("x"))
    .reduce((picsWithResolutions, [pic, resolution]) => {
      if (!picsWithResolutions[pic]) {
        picsWithResolutions[pic] = [];
      }
      picsWithResolutions[pic].push(resolution);

      return picsWithResolutions;
    }, []);

  return (
    <Link to={props.url}>
      <div className="container">
        {Object.entries(fotosDasPlantas).map(([pic, resolution]) => {
          return (
            <div className="container-img-btn" key={props.id}>
              <ImagemFolha
                key={pic}
                src={pic}
                sizes={resolution}
                className={props.tipoFoto}
                maxDesktopSize="200px"
                maxTabletSize="150px"
                maxMobileSize="100px"
                urlImagens={props.urlImagens}
              />
              <Link to={props.url}>
                <Botao class="btn-verde" color="branco bold">
                  {props.nome}
                </Botao>
              </Link>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default Categorias;

//   console.log(fotinhasPlantas);

// const obj = Object.values(plantas[0].fotos)
//   .filter((pic) => typeof pic === "string")
//   .map((pic) => pic.split("x"))
//   .reduce((picsWithResolutions, [pic, resolution]) => {
//     if (!picsWithResolutions[pic]) {
//       picsWithResolutions[pic] = [];
//     }
//     picsWithResolutions[pic].push(resolution);

//     return picsWithResolutions;
//   }, {});

// console.log(obj);
