import "./estiloPlantas.css";
import Categorias from "../../components/Categoria/Categoria";
import Texto from "../../components/Texto/Texto";
import AnimacaoLoading from "../../components/AnimacaoLoading/AnimacaoLoading";
import { useEffect, useState } from "react";
import { getPlantas } from "../../services/routes/plantas";

function Plantas() {
  const [plantas, setPlantas] = useState(null);

  const getDadosPlanta = async () => {
    const response = await getPlantas();

    setPlantas(
      response.map((res) => {
        const fotosArray = [
          res.foto_celular,
          res.foto_desktop,
          res.foto_tablet,
        ];

        return {
          id: res.id,
          nome: res.nome,
          fotos: fotosArray,
          categoria: res.nome.replace(/[í]/g, "i").replace().toLowerCase(),
        };
      }),
    );
  };

  useEffect(() => {
    getDadosPlanta();
  }, []);

  if (plantas == null) {
    return <AnimacaoLoading />;
  }

  return (
    <div id="main-content">
      <div className="container-plantas">
        <div className="container-titulo">
          <Texto tipo="titulo1" class="h1-hind">
            Cada plantinha da{" "}
            <Texto tipo="titulo1" class="verde-claro bold h1-hind">
              Mee
            </Texto>{" "}
            é um universo único. <br />
            Qual categoria você gostaria de consultar?
          </Texto>
        </div>
        <div className="container-fotos">
          {plantas.map((planta) => (
            <Categorias
              tipoFoto="circulo"
              nome={planta.nome}
              fotos={planta.fotos}
              key={planta.nome}
              urlImagens="https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/"
              url={`/plantas/${planta.categoria}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plantas;
