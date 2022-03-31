import "./Cuidados.css";
import Texto from "../Texto/Texto";
import IconeSol from "../IconeSol";
import IconePata from "../IconePata";
import IconeGota from "../IconeGota";

function Cuidados({ iluminacao, agua, pet }) {
  return (
    <div>
      <div>
        <IconeSol />
        <Texto tipo="paragrafo">{iluminacao}</Texto>
      </div>
      <div>
        <IconeGota />
        <Texto tipo="paragrafo">{agua}</Texto>
      </div>
      <div>
        <IconePata />
        <Texto tipo="paragrafo">{pet}</Texto>
      </div>
    </div>
  );
}

export default Cuidados;
