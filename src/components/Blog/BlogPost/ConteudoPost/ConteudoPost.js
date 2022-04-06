import "./ConteudoPost.css";
import Texto from "../../../Texto/Texto";
import TextosBlog from "../TextosPost/TextosPost";
import GridPosts from "../../../Grid/GridPosts/GridPosts";

const ConteudoBlog = ({ id, fotos, titulo, urlFotos }) => {
  return (
    <div className="container-post">
      <div className="container-post_textos">
        
        <div className="textos-titulo">
          <Texto tipo="titulo2" class="h2-blog preto">
            {titulo}
          </Texto>
        </div>
        <div className="textos-paragrafo">
          <TextosBlog id={id} />
        </div>
      </div>
      {/* <div className="container-post_grid">
        <GridPosts fotos={fotos} urlFotos={urlFotos} />
      </div> */}
    </div>
  );
};

export default ConteudoBlog;
