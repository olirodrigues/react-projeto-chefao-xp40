import "./ConteudoPost.css";
import Texto from "../../../../shared/Texto/Texto";
import TextosBlog from "../TextosPost/TextosPost";

const ConteudoBlog = ({ id, titulo }) => {
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
    </div>
  );
};

export default ConteudoBlog;
