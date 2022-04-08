import "./BlogPost.css";
import ConteudoBlog from "../../components/layout/Blog/BlogPost/ConteudoPost/ConteudoPost";
import Texto from "../../components/shared/Texto/Texto";
import GridPosts from "../../components/shared/Grid/GridPosts/GridPosts";
import Icones from "../../components/shared/Icones/Icones";
import AnimacaoLoading from "../../components/layout/AnimacaoLoading/AnimacaoLoading";
import { useMediaQuery } from "react-responsive";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogPostId, getFotosBlogPostId } from "../../services/routes/blog";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const getDadosDoPost = async (paramsId) => {
    const response = await getBlogPostId(paramsId);

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
    setPost({
      titulo: response.post_titulo,
      texto: response.post_texto,
      fotos: fotosArray,
    });
  };

  useEffect(() => {
    getDadosDoPost(id);
  }, [id]);

  const tablet = useMediaQuery({
    query: "(max-width:1024px)",
  });

  if (post === null) {
    return <AnimacaoLoading />;
  }

  return (
    <div id="main-content">
      <div className="container-post-blog">
        <div className="blog-seta-titulo">
          <Link to="/blog">
            {!tablet ? (
              <Icones
                icone="setaComCirculo"
                className="hover-fundo-cinza seta-voltar-pagina"
              />
            ) : (
              <Icones
                icone="setaVoltarSimples"
                className="seta-voltar-pagina"
              />
            )}
          </Link>
          <Texto tipo="titulo1" class="verde-escuro ">
            Blog
          </Texto>
        </div>
        <div className="blog-conteudo">
          <ConteudoBlog
            id={id}
            titulo={post.titulo}
            fotos={post.fotos}
            urlFotos={getFotosBlogPostId}
          />
        </div>
        <div className=" blog-imagem">
          <GridPosts fotos={post.fotos} urlFotos={getFotosBlogPostId} />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
