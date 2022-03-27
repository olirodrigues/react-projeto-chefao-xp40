import "./Botao.css";
import Texto from "../Texto/Texto";

function Botao(props) {
  return (
    <button className={props.class} src={props.src}>
      <Texto tipo="paragrafo" class={props.color}>
        {props.children}
      </Texto>
    </button>
  );
}

export default Botao;
