import {
  FaRegEnvelope,
  FaRegUser,
  FaMobileAlt,
  FaRegCommentAlt,
} from "react-icons/fa";
import "./estiloForm.css";
import { useState } from "react";
import Botao from "../Botao/Botao";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  console.log(nome, email, telefone, mensagem);

  return (
    <div className="form-container">
   <div className="icone-form">
      <FaRegUser size={15} />
      <label>
        Nome
      </label>
      </div>
      <input
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
        type="text"
      />
     <div className="icone-form">
      <FaRegEnvelope size={15} />
      <label>
        E-Mail
      </label>
      </div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Exemplo@email.com.br"
        type="text"
      />
      <div className="icone-form">
      <FaMobileAlt color="#555555" size={15} />
      <label>
        Telefone
      </label>
      </div>
      <input
        onChange={(e) => setTelefone(e.target.value)}
        placeholder="(xx)99999-9999"
        type="text"
      />
     <div className="icone-form">
      <FaRegCommentAlt size={15} />
      <label>
        Mensagem
      </label>
      </div>
      <input
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Escreva aqui sua mensagem"
        type="text"
      />
      <div className="btn-enviar">
        <Botao class="btn-verde" color="branco semi-bold">
          Enviar
        </Botao>
      </div>
    </div>
  );
}

export default Form;
