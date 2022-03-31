import "./PlantasDetalhe.css";
import Abas from "../../components/Abas/Abas";
import Carrossel from "../../components/Carrossel/Carrossel";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlantasId } from "../../services/routes/plantas";

function PlantasDetalhe() {
  const [plantas, setPlantas] = useState(null);
  const params = useParams();

  const getDadosPlantaId = async (params, id) => {
    const response = await getPlantasId(params, id);
    setPlantas({
      fotos: response.foto,
    });
  };

  useEffect(() => {
    getDadosPlantaId(params.categorias, params.id);
  }, []);

  if (plantas == null) {
    return <div id="main-content">Errou</div>;
  }
  return (
    <div id="main-content">
      <Abas />
      <Carrossel categoria={params.categorias} fotos={plantas.fotos} />
    </div>
  );
}

export default PlantasDetalhe;
