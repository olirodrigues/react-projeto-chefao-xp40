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
        <img src={IconeSol} alt="" />
        <Texto tipo="paragrafo">{iluminacao}</Texto>
      </div>
      <div className="texto-cuidados">
        <img src={IconeAgua} alt="" />
        <Texto tipo="paragrafo">{agua}</Texto>
      </div>
      <div className="texto-cuidados">
        {pet === "Atenção: tóxico!" ? (
          <img src={IconePetToxico} alt="" />
        ) : (
          <img src={IconePet} alt="" />
        )}
        <Texto tipo="paragrafo">{pet}</Texto>
      </div>
    </div>
  );
}

export default Cuidados;
