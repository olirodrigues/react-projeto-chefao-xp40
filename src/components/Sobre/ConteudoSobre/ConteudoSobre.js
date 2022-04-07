import "./ConteudoSobre.css";
import Texto from "../../Texto/Texto";
import { NavLink } from "react-router-dom";
import TextosSobre from "../TextosSobre/TextosSobre";

const ConteudoSobre = ({ id }) => {
  return (
    <div className="container-conteudo-sobrenos">
      <div className="container-abas__sobre">
        <NavLink
          to="/sobrenos/1"
          className={({ isActive }) => (isActive ? "aba-ativa" : "nao-ativa")}
        >
          <Texto tipo="titulo2" class="cinza">
            Nós
          </Texto>
        </NavLink>
        <NavLink
          to="/sobrenos/2"
          className={({ isActive }) => (isActive ? "aba-ativa" : "")}
        >
          <Texto tipo="titulo2" class="cinza">
            Margarete Mee
          </Texto>
        </NavLink>
      </div>
      <div className="container-texto-sobrenos">
        <TextosSobre id={id} />
      </div>
    </div>
  );
};

export default ConteudoSobre;
