import Categorias from "../../components/Categoria/Categoria";
import Texto from "../../components/Texto/Texto";
import "./PlantasCategorias.css";
import { useState, useEffect } from "react";
import { getPlantasCategorias } from "../../services/routes/plantas";
import { useParams } from "react-router-dom";

function PlantasCategorias() {
  const [categorias, setCategorias] = useState(null);
  const params = useParams();

  const getCategorias = async (nomeCategoria) => {
    const response = await getPlantasCategorias(nomeCategoria);

    setCategorias(
      response.map((res) => {
        const fotosArray = [
          res.foto.categoria_plantas,
          res.foto.cel_categorias_plantas,
        ];

        return {
          nome: res.nome,
          id: res.fotos_id,
          fotos: fotosArray,
          categoria: res.categoria,
        };
      }),
    );
  };

  useEffect(() => {
    getCategorias(params.categorias);
  }, [params.categorias]);

  console.log(categorias);

  if (categorias === null) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div id="Container">
      <div className="container-titulo">
        {categorias.map((planta) => (
          <Categorias
            key={planta.id}
            id={planta.id}
            fotos={planta.fotos}
            nome={planta.nome}
            url={`https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/${planta.categoria}`}
          />
        ))}
      </div>
    </div>
  );
}

export default PlantasCategorias;
