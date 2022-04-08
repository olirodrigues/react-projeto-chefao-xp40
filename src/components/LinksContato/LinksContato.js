import "./LinksContato.css";
import Icones from "../Icones/Icones";

function LinksContato() {
  return (
    <div className="container-links-contato">
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/meeplantas/">
        <div className="container-icones-social-contato">
          <Icones
            icone="instagram"
            className="icone-contato-social hover-verde-claro"
          />
        </div>
      </a>
      <a target="_blank" rel="noreferrer"  href="https://br.pinterest.com/meeplantas/">
        <div className="container-icones-social-contato">
          <Icones
            icone="pinterest"
            className="icone-contato-social hover-verde-claro"
          />
        </div>
      </a>
      <a href="mailto:meeplantas@gmail.com" >
        <div className="container-icones-social-contato">
          <Icones
            icone="email"
            className="icone-contato-social hover-verde-claro"
          />
        </div>
      </a>
    </div>
  );
}
export default LinksContato;
