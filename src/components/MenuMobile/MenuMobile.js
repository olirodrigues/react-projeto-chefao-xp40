import { useState } from "react";
import "./MenuMobile.css";
import HamburgerSvg from "../../assets/svg/hamburger/hamburger.svg";
import SetaVoltar from "../../assets/svg/seta/seta.svg";
import Texto from "../Texto/Texto";
import { Link } from "react-router-dom";
import LogoMee from "../../assets/svg/logoMee/logoMee.svg";

const MenuMobile = (props) => {
  const [ativo, setAtivo] = useState(false);

  const alternaExibicaoModal = () => {
    setAtivo(!ativo);
  };

  return (
    <div className="container-menu-mobile">
      <img
        className="logoMee"
        src={LogoMee}
        alt="Logo da empresa com nome MEE"
      />
      <div>
        <div className={ativo ? "overlay" : ""} />
        <div
          className={
            ativo
              ? "icone-hamburger  "
              : "icone-hamburger icone-hamburger__ativo "
          }
          onClick={alternaExibicaoModal}
        >
          <img
            src={!ativo ? HamburgerSvg : SetaVoltar}
            alt="Menu hamburger mobile"
          />
          <div />
        </div>
        <div className={ativo ? "menu menu__aberto" : "menu menu__fechado"}>
          <div className="list">
            <ul className="listItems">
              <li>
                <Link onClick={alternaExibicaoModal} to="/plantas">
                  <Texto tipo="paragrafo" class="cinza mobile-menu">
                    Plantas
                  </Texto>
                </Link>
              </li>
              <li>
                <Link onClick={alternaExibicaoModal} to="/sobrenos">
                  <Texto tipo="paragrafo" class="cinza mobile-menu">
                    Sobre Nós
                  </Texto>
                </Link>
              </li>
              <li>
                <Link onClick={alternaExibicaoModal} to="/blog">
                  <Texto tipo="paragrafo" class="cinza mobile-menu">
                    Blog
                  </Texto>
                </Link>
              </li>
              <li>
                <Link onClick={alternaExibicaoModal} to="/contato">
                  <Texto tipo="paragrafo" class="cinza mobile-menu">
                    Contato
                  </Texto>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
