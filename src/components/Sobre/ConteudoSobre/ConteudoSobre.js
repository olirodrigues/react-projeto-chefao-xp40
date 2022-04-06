import "./ConteudoSobre.css";
import Texto from "../../Texto/Texto";
import { NavLink } from "react-router-dom";
import ImagensSobre from "../ImagensSobre/ImsagensSobre";
import TextosSobre from "../TextosSobre/TextosSobre";

const ConteudoSobre = (props) => {
  return (
    <div className="container-conteudo">
      <div className="container-textos">
        <div className="container-abas__sobre">
          <NavLink
            to="/sobrenos/1"
            className={({ isActive }) => (isActive ? "aba-ativa" : "")}
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
        <TextosSobre id={props.id} />
      </div>
      <div className={props.id === "1" ? "grid-sobre__nos" : "grid-sobre__mee"}>
        <ImagensSobre fotos={props.fotos} />
      </div>
    </div>
  );
};

export default ConteudoSobre;
