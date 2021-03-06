import "./PlantasCategorias.css";
import Categorias from "../../components/shared/Categoria/Categoria";
import Texto from "../../components/shared/Texto/Texto";
import CategoriaCactos from "../../assets/svg/categoriasPlantas/categoriaCactos.svg";
import CategoriaSuculentas from "../../assets/svg/categoriasPlantas/categoriaSuculentas.svg";
import CategoriaHorticulas from "../../assets/svg/categoriasPlantas/categoriaHorticulas.svg";
import AnimacaoLoading from "../../components/layout/AnimacaoLoading/AnimacaoLoading";
import Icones from "../../components/shared/Icones/Icones";
import { useState, useEffect } from "react";
import { getPlantasCategorias } from "../../services/routes/plantas";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

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

  const tablet = useMediaQuery({
    query: "(max-width:1024px)",
  });

  if (categorias === null) {
    return <AnimacaoLoading />;
  }

  const textoCategorias = (categoria) => {
    if (categoria === "cactos") {
      return (
        <div>
          <div>
            <img src={CategoriaCactos} alt=""></img>
            <Texto tipo="titulo1" class="h1-hind  verde-claro bold">
              &nbsp;Cactos!&nbsp;
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
    <div id="main-content">
      <div id="container-plantas__categorias">
        <div className="container-titulo">
          {textoCategorias(params.categorias)}
        </div>
        <div className="container-seta-imagem-planta-categoria">
          <div className="seta-voltar-planta-categoria">
            <Link to="/plantas">
              {!tablet && (
                <Icones
                  icone="setaComCirculo"
                  className="hover-fundo-cinza seta-voltar-pagina seta-voltar-size-maior"
                />
              )}
            </Link>
          </div>
          <div className="container-foto">
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
      </div>
    </div>
  );
}

export default PlantasCategorias;
