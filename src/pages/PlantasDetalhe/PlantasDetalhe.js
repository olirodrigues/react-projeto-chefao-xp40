import "./PlantasDetalhe.css";
import Abas from "../../components/Abas/Abas";
import Carrossel from "../../components/Carrossel/Carrossel";
import Texto from "../../components/Texto/Texto";
import Cuidados from "../../components/Cuidados/Cuidados";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlantasId } from "../../services/routes/plantas";

function PlantasDetalhe() {
  const [plantas, setPlantas] = useState(null);
  const params = useParams();

  const getDadosPlantaId = async (params, id) => {
    const response = await getPlantasId(params, id);
    setPlantas({
      nome: response.nome,
      descricao: response.descricao,
      cuidados_descricao: response.cuidados_descricao,
      nome_cientifico: response.informaco.nome_cientifico,
      categoria_descricao: response.informaco.categoria_descricao,
      altura: response.informaco.altura,
      cuidados_iluminacao: response.cuidados_iluminacao,
      cuidados_agua: response.cuidados_agua,
      cuidados_pet: response.cuidados_pet,
      fotos: response.foto,
    });
  };

  useEffect(() => {
    getDadosPlantaId(params.categorias, params.id);
  }, []);

  if (plantas == null) {
    return <div id="main-content">Errou</div>;
  }

  const abaSobre = (
    <div className="container-sobre">
      <Texto tipo="paragrafo">{plantas.descricao}</Texto>
    </div>
  );

  const abaCuidados = (
    <div className="container-cuidados">
      <Texto tipo="paragrafo">{plantas.cuidados_descricao}</Texto>
    </div>
  );

  const abaInformacoes = (
    <div className="container-informacoes">
      <div>
        <Texto tipo="paragrafo" class="bold">
          Nome científico:{" "}
        </Texto>
        <Texto tipo="paragrafo">{plantas.nome_cientifico}</Texto>
      </div>
      <div>
        <Texto tipo="paragrafo" class="bold">
          Categoria:{" "}
        </Texto>
        <Texto tipo="paragrafo">{plantas.categoria_descricao}</Texto>
      </div>
      <div>
        <Texto tipo="paragrafo" class="bold">
          Altura:{" "}
        </Texto>
        <Texto tipo="paragrafo">{plantas.altura}</Texto>
      </div>
    </div>
  );

  return (
    <div id="main-content">
      <div className="container-plantasDetalhe">
        <div>
          <Texto tipo="titulo1" class="verde-escuro">
            {plantas.nome}
          </Texto>
          <Abas
            nomeAbas={["Sobre", "Cuidados", "Informações"]}
            conteudoAbas={[abaSobre, abaCuidados, abaInformacoes]}
          />

          <Cuidados
            iluminacao={plantas.cuidados_iluminacao}
            agua={plantas.cuidados_agua}
            pet={plantas.cuidados_pet}
          />
        </div>
        <Carrossel categoria={params.categorias} fotos={plantas.fotos} />
      </div>
    </div>
  );
}

export default PlantasDetalhe;
