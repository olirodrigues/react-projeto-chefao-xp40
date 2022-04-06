import "./BlogPostConteudo.css"
import Texto from "../../../Texto/Texto";
import ImagensGrid from "../../../ImagensGrid/ImagensGrid";
import { getFotosBlogPostId } from "../../../../services/routes/blog";
import TextosBlog from "../BlogPostTextos/TextosBlog";

const ConteudoBlog = ({ id, fotos, titulo }) => {
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
      <div className="container-post_grid">
        <ImagensGrid
          src1={`${getFotosBlogPostId}${fotos.tablet[0]}.png`}
          src2={`${getFotosBlogPostId}${fotos.tablet[1]}.png`}
          src3={`${getFotosBlogPostId}${fotos.tablet[2]}.png`}
          src4={`${getFotosBlogPostId}${fotos.desktop[2]}.png`}
        />
      </div>
    </div>
  );
};

export default ConteudoBlog;
