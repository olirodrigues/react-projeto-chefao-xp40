import "./Footer.css";
import Texto from "../Texto/Texto";

function Footer(props) {
  return (
    <footer>
      <div className="footer">
        <Texto tipo="paragrafo" class="cinza-claro">
          São Paulo, SP - 89251-000 | Mee Company, all rights reserved.
        </Texto>
        <div className="redes">
          <img src="img/instagram.svg" alt="" />
          <img src="img/Vector.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
