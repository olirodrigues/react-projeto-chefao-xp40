import "./ImagemFolha.css";

function ImagemFolha (props) {
  return (
  <div className='container'>
    <img className={props.class} src={'ImagemTeste/' + props.src + '-' + props.size + '.png'} alt=""></img>

  </div>
  
  )
};

export default ImagemFolha;




function Botao (props) {

  return <button className={props.type}></button>
}


