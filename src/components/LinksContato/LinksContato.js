import "./LinksContato.css";
import Icones from "../Icones/Icones";

function LinksContato() {
  return (
    <div className="container-links-contato">
      <a href="/#">
        <div className="container-icones-social-contato">
          <Icones icone="instagram" className="icone-contato-social" />
        </div>
      </a>
      <a href="/#">
        <div className="container-icones-social-contato">
          <Icones icone="pinterest" className="icone-contato-social" />
        </div>
      </a>
      <a href="/#">
        <div className="container-icones-social-contato">
          <Icones icone="email" className="icone-contato-social" />
        </div>
      </a>
    </div>
  );
}
export default LinksContato;
