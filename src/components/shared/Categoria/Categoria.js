import "./Categoria.css";
import Botao from "../../actions/Botao/Botao";
import ImagemFolha from "../ImagemFolha/ImagemFolha";
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
    <div className="container">
      {Object.entries(fotosDasPlantas).map(([pic, resolution]) => {
        return (
          <div className="container-img-btn-categoria" key={pic}>
            <Link to={props.url}>
              <ImagemFolha
                src={pic}
                sizes={resolution}
                className={props.tipoFoto}
                maxDesktopSize="200px"
                maxTabletSize="150px"
                maxMobileSize="100px"
                urlImagens={props.urlImagens}
              />
            </Link>
            <Link to={props.url}>
              <Botao class="btn-verde" color="branco bold">
                {props.nome}
              </Botao>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Categorias;
