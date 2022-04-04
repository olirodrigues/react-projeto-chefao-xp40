import "./SobreNos.css";
import { getSobrePostId, getFotosSobre } from "../../services/routes/sobre";
import { useEffect, useState } from "react";
import Texto from "../../components/Texto/Texto";
import { NavLink, useParams } from "react-router-dom";
import GridImgBlogDesktop from "../../components/GridImgBlogDesktop";
import { useMediaQuery } from "react-responsive";

function Sobrenos() {
  const [sobre, setSobre] = useState(null);

  const params = useParams();
  const tablet = useMediaQuery({
    query: "(max-width:1024px)",
  });
  const celular = useMediaQuery({
    query: "(max-width:380px)",
  });

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



  const imagensSobre = () => {
    if (celular) {
      return (
        <GridImgBlogDesktop
          src1={`${getFotosSobre}${sobre.fotos.celular}.png`}
        />
      );
    } else if (tablet && !celular) {
      return (
        <GridImgBlogDesktop
          src1={`${getFotosSobre}${sobre.fotos.tablet[0]}.png`}
          src2={`${getFotosSobre}${sobre.fotos.tablet[1]}.png`}
          src3={`${getFotosSobre}${sobre.fotos.tablet[2]}.png`}
          src4={`${getFotosSobre}${sobre.fotos.desktop[3]}.png`}
        />
      );
    } else {
      return (
        <GridImgBlogDesktop
          src1={`${getFotosSobre}${sobre.fotos.desktop[0]}.png`}
          src2={`${getFotosSobre}${sobre.fotos.desktop[1]}.png`}
          src3={`${getFotosSobre}${sobre.fotos.desktop[3]}.png`}
          src4={`${getFotosSobre}${sobre.fotos.desktop[2]}.png`}
        />
      );
    }
  };

  const conteudoSobre = () => {
    return (
      <section className="containter-sobre">
        <Texto tipo="titulo1" class="verde-escuro ">
          Nossa Empresa
        </Texto>
        <div className="container-conteudo">
          <div className="container-textos">
            <div className="container-abas">
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
            {params.id == 1 ? (
              <div>
                <Texto tipo="paragrafo" class="cinza">
                  A mee é uma empresa que se preocupa com o bem-estar das
                  pessoas.
                  <br />
                  <br />
                  Nossos produtos são pensados principalmente para ambientes
                  internos que proporcionam conforto ao seu lar. Nossas
                  plantinhas são de espécies que requerem poucos cuidados
                  visando pessoas que querem ter muito verde dentro de casa
                  aliando ao aspecto estético e decorativo. Se você não tem
                  muito espaço e nem tempo para tarefas mais complexas de
                  jardinagem pode contar com a gente que vamos lhe ajudar nessa
                  tarefa.
                </Texto>
              </div>
            ) : (
              <div>
                <Texto tipo="paragrafo" class="cinza">
                  No meio da floresta amazônica. Um momento de beleza
                  incomparável, em uma única noite do ano, sem qualquer aviso
                  acontece um fenômeno.
                  <br />
                  <br />
                  Esse momento que Margaret Mee perseguiu para conseguir
                  registrar o desabrochar da Flor da Lua que acontece em um
                  cacto raro.
                  <br />
                  <br />
                  A busca incansável por esse momento mostra a paixão que Mee
                  tinha por sua profissão. É essa mulher, botânica do século XX
                  quem homenageamos com o nome da nossa empresa.
                  <br />
                  <br />
                  Muito antes do ambientalismo ser uma bandeira a ser levantada
                  e os problemas do desmatamento da Amazônia estarem em todos os
                  jornais e de conhecimento público, essa mulher talentosa e
                  extremamente engajada colocou o holofote sobre a questão.
                </Texto>
              </div>
            )}
          </div>
          <div
            className={params.id == 1 ? "grid-sobre__nos" : "grid-sobre__mee"}
          >
            {imagensSobre()}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div id="main-content">
      {sobre !== null ? conteudoSobre() : "Carregando"}
    </div>
  );
}

export default Sobrenos;
