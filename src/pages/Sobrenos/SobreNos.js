import "./SobreNos.css";
import ConteudoSobre from "../../components/layout/Sobre/ConteudoSobre/ConteudoSobre";
import GridPosts from "../../components/shared/Grid/GridPosts/GridPosts";
import Texto from "../../components/shared/Texto/Texto";
import AnimacaoLoading from "../../components/layout/AnimacaoLoading/AnimacaoLoading";
import { getSobrePostId, getFotosSobre } from "../../services/routes/sobre";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    return <AnimacaoLoading />;
  }

  return (
    <div id="main-content">
      <div className="containter-sobrenos">
        <div className="sobrenos-titulo">
          <Texto tipo="titulo1" class="verde-escuro ">
            Nossa Empresa
          </Texto>
        </div>
        <div className="sobrenos-conteudo">
          <ConteudoSobre id={params.id} />
        </div>
        <div
          className={`${
            params.id === "1" ? "grid-sobre__nos" : "grid-sobre__mee"
          }`}
        >
          <GridPosts fotos={sobre.fotos} urlFotos={getFotosSobre} />
        </div>
      </div>
    </div>
  );
};

export default Sobrenos;
