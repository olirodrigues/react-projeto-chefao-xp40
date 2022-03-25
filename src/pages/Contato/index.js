
import Form from '../../components/Form'
import './estiloContato.css'
import Texto from '../../components/Texto/Texto';

function Contato() {
  return (
    <div >
      <article className='textoContato'>
        <Texto tipo='titulo1'
          children='Seria ótimo se nossas plantinhas falassem. Mas nós podemos aprender e entender todos os sinais elas que nos dão. Mande sua dúvida que teremos prazer em responder.'
          class='h1-contato' />
      </article>
      <Form />
    </div>
  );
}

export default Contato;