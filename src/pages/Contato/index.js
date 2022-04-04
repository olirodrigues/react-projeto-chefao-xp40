import Form from "../../components/Form";
import "./estiloContato.css";
import Texto from "../../components/Texto/Texto";
import LinksContato from "../../components/LinksContato";


function Contato() {
  return (
    <div className="container-contato">
      <div className="main-contato">
        <article className="texto-contato">        
        <Texto Texto tipo="titulo1" class="verde-escuro ">
            Contato
          </Texto>
          <br/>
          <br/>
          <Texto tipo="titulo1" class="h1-contato">
            Seria ótimo se nossas plantinhas falassem. Mas nós podemos aprender
            e entender todos os sinais elas que nos dão. Mande sua dúvida que
            teremos prazer em responder.
          </Texto>
        </article>
        <Form />
      </div>
      <div className="container-planta">
      <img
          className="planta-contato2"
          src='https://raw.githubusercontent.com/gabezrodz/imagens-chefao-xp40/main/contato/CT01.png'
          alt="imagem de planta com links de redes sociais"
        />
        <img
          className="planta-contato1"
          src='https://raw.githubusercontent.com/gabezrodz/imagens-chefao-xp40/main/contato/CT02.png'
          alt="imagem de planta com links de redes sociais"
        />
                <img
          className="planta-contato3"
          src='https://raw.githubusercontent.com/gabezrodz/imagens-chefao-xp40/main/contato/CT03.png'
          alt="imagem de planta com links de redes sociais"
        />
        <div className="links-externos">
          <LinksContato />
        </div>
      </div>
    </div>
  );
}

export default Contato;
