import {FaRegEnvelope, FaRegUser, FaMobileAlt, FaRegCommentAlt} from 'react-icons/fa'
import './estiloForm.css'
import {useState} from 'react'

function Form(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [mensagem, setMensagem] = useState('') 

    return(
        <form>
            <label>
                <FaRegUser size={15}/>
                Nome
            </label>
            <input onChange={(e)=>setNome(e.target.value)} placeholder='Seu nome' type="text"/>
            <label>
                <FaRegEnvelope size={15}/>
                Email
            </label>
            <input onChange={(e)=>setEmail(e.target.value)} placeholder='Exemplo@email.com.br' type="text"/>
            <label>
                <FaMobileAlt size={15}/>
                Telefone
            </label>
            <input onChange={(e)=>setTelefone(e.target.value)} placeholder='(xx)99999-9999' type="text"/>
            <label>
                <FaRegCommentAlt size={15}/>
                Mensagem
            </label>
            <input onChange={(e)=>setMensagem(e.target.value)} placeholder='Escreva aqui sua mensagem' type="text"/>
            <br></br>
            <br></br>
            <button>Precisa criar o componente</button>
        </form>

    )
}

export default Form