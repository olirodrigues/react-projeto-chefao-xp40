import Categorias from "../../components/Categoria/Categoria";
import Texto from "../../components/Texto/Texto";
import "./PlantasCategorias.css";
import { useState, useEffect } from "react";
import { getPlantasCategorias } from "../../services/routes/plantas";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CategoriaCactos from "../../assets/svg/categoriasPlantas/categoriaCactos.svg";
import CategoriaSuculentas from "../../assets/svg/categoriasPlantas/categoriaSuculentas.svg";
import CategoriaHorticulas from "../../assets/svg/categoriasPlantas/categoriaHorticulas.svg";
import SetaVoltar from "../../assets/svg/setas/setaVoltarSimples.svg";

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

  const textoCategorias = (categoria) => {
    if (categoria === "cactos") {
      return (
        <div>
          <div>
            <img src={CategoriaCactos} alt=""></img>
            <Texto tipo="titulo1" class="h1-hind  verde-claro bold">
              {` `}Cactos!{` `}
            </Texto>
            <Texto tipo="titulo1" class="h1-hind">
              Nós temos três muito especiais.
            </Texto>
          </div>
          <div>
            <Texto tipo="titulo1" class="h1-hind">
              Qual deles você quer saber mais?
            </Texto>
          </div>
        </div>
      );
    }
    if (categoria === "suculentas") {
      return (
        <div>
          <div>
            <img src={CategoriaSuculentas} alt=""></img>
            <Texto tipo="titulo1" class="h1-hind  verde-claro bold">
              {` `}Suculentas!{` `}
            </Texto>
            <Texto tipo="titulo1" class="h1-hind">
              Nós temos três espécies lindas.
            </Texto>
          </div>
          <div>
            <Texto tipo="titulo1" class="h1-hind">
              Qual delas você quer saber mais?
            </Texto>
          </div>
        </div>
      );
    }
    if (categoria === "horticolas") {
      return (
        <div>
          <div>
            <img src={CategoriaHorticulas} alt=""></img>
            <Texto tipo="titulo1" class="h1-hind  verde-claro bold">
              {` `}Hortículas!{` `}
            </Texto>
            <Texto tipo="titulo1" class="h1-hind">
              Perfeitas para usar na culinária.
            </Texto>
          </div>
          <div>
            <Texto tipo="titulo1" class="h1-hind">
              Qual delas você quer saber mais?
            </Texto>
          </div>
        </div>
      );
    }
  };

  return (
    <div id="Container">
      <div className="container-titulo">
        {textoCategorias(params.categorias)}
      </div>
      <div className="container-foto">
        <Link to="/plantas">
          <img className="seta" src={SetaVoltar} alt=""></img>
        </Link>
        {categorias.map((planta) => (
          <Categorias
            tipoFoto="borda"
            key={planta.id}
            id={planta.id}
            fotos={planta.fotos}
            nome={planta.nome}
            urlImagens={`https://gabezrodz.github.io/imagens-chefao-xp40/plantas/categorias/${planta.categoria}`}
            url={`/plantas/${planta.categoria}/${planta.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default PlantasCategorias;
