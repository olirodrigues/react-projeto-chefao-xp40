import Categorias from "../../components/Categoria/Categoria";
import Texto from "../../components/Texto/Texto";
import "./PlantasCategorias.css";

import { useState } from "react";
import { getPlantasCategorias } from "../../services/routes/plantas";

function PlantasCategorias() {
  const [categorias, setCategoria] = useState(null);

  const getCategorias = async () => {
    const response = await getPlantasCategorias();

    setCategoria(response.getPlantasCategorias);
  };

  if (categorias == null) {
    return <div id="main-content"></div>;
  }
  return (
    <div id="Container">
      <div className="container-titulo">
        <Texto tipo="titulo1" class="verde-claro bold h1-hind">
          Cactos!{" "}
        </Texto>
        <Texto tipo="titulo1" class="h1-hind">
          Nós temos três muito especiais. <br />
          Qual deles você quer saber mais?
        </Texto>
      </div>
    </div>
  );
}

export default PlantasCategorias;
