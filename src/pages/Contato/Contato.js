import "./Contato.css";
import Formulario from "../../components/actions/Formulario/Formulario";
import Texto from "../../components/shared/Texto/Texto";
import LinksContato from "../../components/actions/LinksContato/LinksContato";
import { useMediaQuery } from "react-responsive";

function Contato() {
  const desktop = useMediaQuery({
    query: "(min-width:1025px)",
  });

  const tablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });

  return (
    <div id="main-content">
      <div className="container-contato">
        <div className="container-texto-formulario">
          <div className="titulo-contato">
            <Texto tipo="titulo1" class="verde-escuro ">
              Contato
            </Texto>
          </div>

          <div className="texto-contato">
            <Texto tipo="paragrafo">
              Seria ótimo se nossas plantinhas falassem. Mas nós podemos
              aprender e entender todos os sinais elas que nos dão. Mande sua
              dúvida que teremos prazer em responder.
            </Texto>
          </div>
          <div>
            <Formulario />
          </div>
        </div>
        {desktop && (
          <div className="container-social-imagem-desktop">
            <LinksContato />

            <div className="backgroung-image-contato-desktop" />
          </div>
        )}
        {tablet && (
          <div className="container-social-imagem-tablet">
            <div className="componente-links-contato">
              <LinksContato />
            </div>
            <img
              src="https://gabezrodz.github.io/imagens-chefao-xp40/contato/CT01.png"
              alt=""
              className="imagem-tablet-contato-1"
            />
            <img
              src="https://gabezrodz.github.io/imagens-chefao-xp40/contato/CT02.png"
              alt=""
              className="imagem-tablet-contato-2"
            />
            <img
              src="https://gabezrodz.github.io/imagens-chefao-xp40/contato/CT03.png"
              alt=""
              className="imagem-tablet-contato-3"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Contato;
