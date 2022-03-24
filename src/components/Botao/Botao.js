import "./Botao.css";

function Botao(props) {
    return(<button className={props.class} src={props.src}>{props.children}</button>);
}

export default Botao