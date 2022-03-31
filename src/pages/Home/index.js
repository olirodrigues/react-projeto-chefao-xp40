import Texto from "../../components/Texto/Texto";
import Botao from "../../components/Botao/Botao";
import "./estiloHome.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="main-content-full" className="sem-margin-right">
      <div className="container-home">
        <div className="texto">
          <div>
            <div>
              <Texto tipo="titulo1" class="h1-hind cinza-escuro bold">
                Olá,
              </Texto>
            </div>

            <div>
              <Texto tipo="titulo1" class="h1-hind cinza-escuro">
                Nossas plantinhas
                <Texto tipo="titulo1" class="verde-claro bold h1-hind">
                  {" "}
                  Mee{" "}
                </Texto>
                precisam de cuidados muito especiais.
              </Texto>
            </div>
            <div>
              <Texto tipo="titulo1" class="h1-hind cinza-escuro">
                Você quer aprender a cuidar?
              </Texto>
            </div>
          </div>
          <div className="botao">
            <Link to="/plantas">
              <Botao class="btn-verde" color="branco semi-bold">
                Quero aprender
              </Botao>
            </Link>
          </div>
        </div>
        <div className="imagem">
          <img
            srcSet="https://gabezrodz.github.io/imagens-chefao-xp40/home/home-padrao.png 1020w, https://gabezrodz.github.io/imagens-chefao-xp40/home/home-mobile.png 375w"
            sizes="(width <= 375px) 375px, 1020px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
