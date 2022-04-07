import "./Formulario.css";
import Texto from "../Texto/Texto";
import Botao from "../Botao/Botao";
import IconeNome from "../../assets/svg/contato/contatoNome.svg";
import IconeEmail from "../../assets/svg/contato/contatoEmail.svg";
import IconeTelefone from "../../assets/svg/contato/contatoTelefone.svg";
import IconeMensagem from "../../assets/svg/contato/contatoMensagem.svg";
import IconeAtencao from "../../assets/svg/contato/contatoAtencao.svg";
import IconeCheck from "../../assets/svg/contato/contatoCheck.svg";

import { useState } from "react";

const campoVazio = (valor) => valor.trim().length === 0;

function Form() {
  const [formulario, setFormulario] = useState(null);

  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputTelefone, setInputTelefone] = useState("");
  const [inputMensagem, setInputMensagem] = useState("");

  const confirmaFormulario = (event) => {
    event.preventDefault();

    const nomeDigitado = inputNome;
    const emailDigitado = inputEmail;
    const telefoneDigitado = inputTelefone;
    const mensagemDigitada = inputMensagem;

    const nomeValido = !campoVazio(nomeDigitado);
    const emailValido = !campoVazio(emailDigitado);
    const telefoneValido = !campoVazio(telefoneDigitado);
    const mensagemValida = !campoVazio(mensagemDigitada);

    if (nomeValido && emailValido && telefoneValido && mensagemValida) {
      setFormulario(true);
      setInputNome("");
      setInputEmail("");
      setInputTelefone("");
      setInputMensagem("");
    } else {
      setFormulario(false);
    }
  };

  return (
    <form onSubmit={confirmaFormulario} className="container-formulario">
      <div className="item-formulario">
        <div className="icone-label-formulario">
          <img src={IconeNome} className="icones-contato" alt="" />
          <label>
            <Texto tipo="paragrafo" class="p-contato bold">
              Nome
            </Texto>
          </label>
        </div>
        <input
          value={inputNome}
          onChange={(e) => setInputNome(e.target.value)}
          placeholder="Seu nome"
          type="text"
        />
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
        <input
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          placeholder="exemplo@email.com.br"
          type="text"
        />
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
        <input
          value={inputTelefone}
          onChange={(e) => setInputTelefone(e.target.value)}
          placeholder="(xx) 99999-9999"
          type="text"
        />
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
        <input
          value={inputMensagem}
          onChange={(e) => setInputMensagem(e.target.value)}
          placeholder="Escreva aqui sua mensagem"
          type="text"
        />
      </div>

      {formulario === true && (
        <div className="mensagem aviso-check">
          <h2 onClick={() => setFormulario(null)}>X</h2>
          <img src={IconeCheck} alt="icone check" />
          <div className="aviso-textos">
            <h2>Enviada</h2>
            <p>Enviamos sua mensagem</p>
          </div>
        </div>
      )}
      {formulario === false && (
        <div className="mensagem aviso-atencao">
          <h2 onClick={() => setFormulario(null)}>X</h2>
          <img src={IconeAtencao} alt="icone atencao" />
          <div className="aviso-textos">
            <h2> Esqueceu algo?</h2>
            <p>Um espaço não foi preenchido corretamente</p>
          </div>
        </div>
      )}
      {formulario === null && (
        <div className="btn-enviar-contato">
          <Botao class="btn-verde" color="branco semi-bold">
            Enviar
          </Botao>
        </div>
      )}
    </form>
  );
}

export default Form;
