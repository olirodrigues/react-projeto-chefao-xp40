import "./Contato.css";
import Formulario from "../../components/Formulario/Formulario";
import Texto from "../../components/Texto/Texto";
import LinksContato from "../../components/LinksContato";

function Contato() {
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
      </div>
    </div>
  );
}

export default Contato;
