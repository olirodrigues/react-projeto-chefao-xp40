import "./estiloBlogId.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBlogPostId, getFotosBlogId } from "../../services/routes/blog";
import GridImgBlogDesktop from "../../components/GridImgBlogDesktop";
import Texto from "../../components/Texto/Texto.js";
import SetaVoltar from "../../assets/svg/setas/setaVoltarSimples.svg";

function BlogId() {
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

  const conetudoBlog = () => {
    return (
      <div className="container-post">
        <div className="container-post_textos">
          <div>
            <h1>{post.titulo}</h1>
          </div>
          <div>
            <p>{post.texto}</p>
          </div>
        </div>
        <div className="container-post_grid">
          <GridImgBlogDesktop
            src1={`${getFotosBlogId}${post.fotos.desktop[0]}.png`}
            src2={`${getFotosBlogId}${post.fotos.desktop[1]}.png`}
            src3={`${getFotosBlogId}${post.fotos.desktop[3]}.png`}
            src4={`${getFotosBlogId}${post.fotos.desktop[2]}.png`}
          />
        </div>
      </div>
    );
  };

  return (
    <div id="main-content">
      <div className="blog-seta">
        <Link to="/blog">
          <img src={SetaVoltar} alt="seta para voltar" />
        </Link>
        <Texto tipo="titulo1" class="verde-escuro ">
          Blog
        </Texto>
      </div>
      {post !== null ? conetudoBlog() : "Carregando"}
    </div>
  );
}

export default BlogId;
