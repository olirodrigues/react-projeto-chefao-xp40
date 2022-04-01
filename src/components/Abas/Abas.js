import "./Abas.css";
import Texto from "../Texto/Texto";
import { useState } from "react";

function Abas({ nomeAbas, conteudoAbas }) {
  const [tabFoco, setTabFocus] = useState(0);

  console.log(tabFoco);
  // {tabFoco === index ? "v" : "x"}
  return (
    <div className="container-abas">
      <nav>
        {nomeAbas.map((titulo, index) => (
          <div
            className={`titulos-abas${tabFoco === index ? " titulo-foco" : ""}`}
            key={titulo}
            onClick={() => setTabFocus(index)}
          >
            <Texto tipo="titulo2" class="preto">
              {titulo}
            </Texto>
          </div>
        ))}
      </nav>

      <div className="conteudo-abas">{conteudoAbas[tabFoco]}</div>
    </div>
  );
}

export default Abas;
