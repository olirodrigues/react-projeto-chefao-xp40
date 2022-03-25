import "./ImagemFolha.css";

function ImagemFolha (props) {
  const imagemUrl = 'ImagemTeste/' + props.src + '-' + props.size + '.png';

  return (
  <div className={'container-' + props.class}>
    <img className={props.class} src={imagemUrl} alt=""></img>

  </div>
  
  )
};

export default ImagemFolha;




function Botao (props) {

  return <button className={props.type}></button>
}


