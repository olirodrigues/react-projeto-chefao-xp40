import "./BlogPost.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogPostId, getFotosBlogPostId } from "../../services/routes/blog";
import ConteudoBlog from "../../components/Blog/BlogPost/ConteudoPost/ConteudoPost";
import Texto from "../../components/Texto/Texto.js";
import SetaVoltar from "../../assets/svg/setas/setaVoltarSimples.svg";
import GridPosts from "../../components/Grid/GridPosts/GridPosts";

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

  if (post === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div id="main-content">
      <div className="container-post-blog">
        <div className="blog-seta blog-titulo">
          <Link to="/blog">
            <img src={SetaVoltar} alt="seta para voltar" />
          </Link>
          <Texto tipo="titulo1" class="verde-escuro ">
            Blog
          </Texto>
        </div>
        <div className='blog-conteudo'>
          <ConteudoBlog id={id} titulo={post.titulo} fotos={post.fotos} urlFotos={getFotosBlogPostId} />
        </div>
        <div className=" blog-imagem">
          <GridPosts fotos={post.fotos} urlFotos={getFotosBlogPostId} />
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
