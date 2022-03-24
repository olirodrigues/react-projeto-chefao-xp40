import './Texto.css';

function Texto (props) {
  if (props.tipo === 'titulo1') {
    return (
      <h1 className={props.class}>{props.children}</h1>
    )
  } else if (props.tipo === 'titulo2') {
    return (
      <h2 className={props.class}>{props.children}</h2>
    )
  } else if (props.tipo === 'paragrafo') {
    return (
      <p className={props.class}>{props.children}</p>
    )
  }
};

export default Texto;