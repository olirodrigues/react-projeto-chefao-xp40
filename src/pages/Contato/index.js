import Form from "../../components/Form";
import "./estiloContato.css";
import Texto from "../../components/Texto/Texto";
import PlantaContato from "../../assets/plantaContato.png";
import LinksContato from "../../components/LinksContato";

function Contato() {
  return (
    <div className="container-contato">
      <div className="main-contato">
        <article className="texto-contato">
          <Texto tipo="titulo1" class="h1-contato">
            Seria ótimo se nossas plantinhas falassem. Mas nós podemos aprender
            e entender todos os sinais elas que nos dão. Mande sua dúvida que
            teremos prazer em responder.
          </Texto>
        </article>
        <Form />
      </div>
      <div>
        <img
          className="planta-contato"
          src={PlantaContato}
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
