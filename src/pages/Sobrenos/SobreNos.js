import "./SobreNos.css";
import { getSobrePostId, getFotosSobre } from "../../services/routes/sobre";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConteudoSobre from "../../components/Sobre/ConteudoSobre/ConteudoSobre";
import Texto from "../../components/Texto/Texto";

const Sobrenos = () => {
  const [sobre, setSobre] = useState(null);
  const params = useParams();
  const getDadosSobreNos = async (postId) => {
    const response = await getSobrePostId(postId);
    const fotosArrayDesktop = [
      response.fotos_gerai.desktop_1,
      response.fotos_gerai.desktop_2,
      response.fotos_gerai.desktop_3,
      response.fotos_gerai.desktop_4,
    ];

    const fotosArrayTablet = [
      response.fotos_gerai.tablet_1,
      response.fotos_gerai.tablet_2,
      response.fotos_gerai.tablet_3,
    ];
    const fotosArray = {
      desktop: fotosArrayDesktop,
      tablet: fotosArrayTablet,
      celular: response.fotos_gerai.celular_1,
    };
    setSobre({
      titulo: response.sobre_titulo,
      texto: response.sobre_texto,
      fotos: fotosArray,
    });
  };

  useEffect(() => {
    getDadosSobreNos(params.id);
  }, [params.id]);

  if (sobre === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div id="main-content">
      <section className="containter-sobre">
        <Texto tipo="titulo1" class="verde-escuro ">
          Nossa Empresa
        </Texto>
        <ConteudoSobre id={params.id} fotos={sobre.fotos} urlFotos={getFotosSobre} />
      </section>
    </div>
  );
};

export default Sobrenos;
