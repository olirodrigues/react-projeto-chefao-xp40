import "./Cuidados.css";
import Texto from "../Texto/Texto";
import IconeSol from "../IconeSol";
import IconePata from "../IconePata";
import IconeGota from "../IconeGota";

function Cuidados({ iluminacao, agua, pet }) {
  return (
    <div className="container-cuidados">
      <div className="texto-cuidados">
        <IconeSol />
        <Texto tipo="paragrafo">{iluminacao}</Texto>
      </div>
      <div className="texto-cuidados">
        <IconeGota />
        <Texto tipo="paragrafo">{agua}</Texto>
      </div>
      <div className="texto-cuidados">
        <IconePata />
        <Texto tipo="paragrafo">{pet}</Texto>
      </div>
    </div>
  );
}

export default Cuidados;
