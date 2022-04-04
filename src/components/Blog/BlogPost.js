import "./BlogPost.css";
import Botao from "../Botao/Botao";
import Texto from "../Texto/Texto";

import { Link } from "react-router-dom";


const BlogPost = (props) => {
  return (
    <div className="card-container">
      <div className="card-container__imagem">
        <img
          src={`https://gabezrodz.github.io/imagens-chefao-xp40/blog/${props.fotos.Capa_do_blog}.png`}
          alt=""
        />
      </div>
      <div className="card-textos">
        <div className="titulo-post">
          <Texto tipo="titulo2" class="cinza-escuro h2-blog">
            {props.titulo}
          </Texto>
        </div>
        <div>
          <Texto tipo="paragrafo" class="cinza-escuro">
            {props.resumo}
          </Texto>
        </div>
      </div>
      <div>

        <Link to={`/blog/${props.id}`}>

        <Botao class="outline" color="cinza bold">
          Ler artigo
        </Botao>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
