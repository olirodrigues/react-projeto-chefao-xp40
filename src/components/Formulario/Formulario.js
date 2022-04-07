import "./Formulario.css";
import Texto from "../Texto/Texto";
import Botao from "../Botao/Botao";
import IconeNome from "../../assets/svg/contato/contatoNome.svg";
import IconeEmail from "../../assets/svg/contato/contatoEmail.svg";
import IconeTelefone from "../../assets/svg/contato/contatoTelefone.svg";
import IconeMensagem from "../../assets/svg/contato/contatoMensagem.svg";

function Form() {
  return (
    <div className="container-formulario">
      <div className="item-formulario">
        <div className="icone-label-formulario">
          <img src={IconeNome} className="icones-contato" alt="" />
          <label>
            <Texto tipo="paragrafo" class="p-contato bold">
              Nome
            </Texto>
          </label>
        </div>
        <input placeholder="Seu nome" type="text" />
      </div>

      <div className="item-formulario">
        <div className="icone-label-formulario">
          <img src={IconeEmail} className="icones-contato" alt="" />
          <label>
            <Texto tipo="paragrafo" class="p-contato bold">
              E-mail
            </Texto>
          </label>
        </div>
        <input placeholder="exemplo@email.com.br" type="text" />
      </div>

      <div className="item-formulario">
        <div className="icone-label-formulario">
          <img src={IconeTelefone} className="icones-contato" alt="" />
          <label>
            <Texto tipo="paragrafo" class="p-contato bold">
              Telefone
            </Texto>
          </label>
        </div>
        <input placeholder="(xx) 99999-9999" type="text" />
      </div>

      <div className="item-formulario">
        <div className="icone-label-formulario">
          <img src={IconeMensagem} className="icones-contato" alt="" />
          <label>
            <Texto tipo="paragrafo" class="p-contato bold">
              Mensagem
            </Texto>
          </label>
        </div>
        <input placeholder="Escreva aqui sua mensagem" type="text" />
      </div>

      <div className="btn-enviar-contato">
        <Botao class="btn-verde" color="branco semi-bold">
          Enviar
        </Botao>
      </div>
    </div>
  );
}

export default Form;
