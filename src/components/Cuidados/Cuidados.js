import "./Cuidados.css";
import Texto from "../Texto/Texto";
import IconeSol from "../../assets/svg/plantasDetalhe/plantasSol.svg";
import IconePet from "../../assets/svg/plantasDetalhe/plantasPet.svg";
import IconePetToxico from "../../assets/svg/plantasDetalhe/plantasPetToxico.svg";
import IconeAgua from "../../assets/svg/plantasDetalhe/plantasAgua.svg";

function Cuidados({ iluminacao, agua, pet }) {
  return (
    <div className="container-cuidados">
      <div className="texto-cuidados">
        <div className="icones-cuidados">
          <img src={IconeSol} alt="" />
        </div>
        <Texto tipo="paragrafo">{iluminacao}</Texto>
      </div>
      <div className="texto-cuidados">
        <div className="icones-cuidados">
          <img src={IconeAgua} alt="" />
        </div>
        <Texto tipo="paragrafo">{agua}</Texto>
      </div>
      <div className="texto-cuidados">
        {pet === "Atenção: tóxico!" ? (
          <div className="icones-cuidados">
            <img src={IconePetToxico} alt="" />
          </div>
        ) : (
          <div className="icones-cuidados">
            <img src={IconePet} alt="" />{" "}
          </div>
        )}
        <Texto tipo="paragrafo">{pet}</Texto>
      </div>
    </div>
  );
}

export default Cuidados;
