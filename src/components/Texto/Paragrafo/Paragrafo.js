import './Paragrafo.css'

function Paragrafo (props) {
  return (
    <p className={props.class}>{props.children}</p>
  );
};

export default Paragrafo;