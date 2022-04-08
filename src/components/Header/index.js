import "./estiloheader.css";
import LogoMee from "../../assets/svg/logoMee/logoMee.svg";
import Texto from "../Texto/Texto";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "link_ativo--logo" : "link_inativo--logo"
          }
        >
          <img
            className="imgLogo"
            src={LogoMee}
            alt="Logo da empresa com nome MEE"
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link_ativo-desktop headerLink"
              : " link_inativo headerLink "
          }
          to="/plantas"
        >
          <Texto tipo="paragrafo" class="desktop-menu">
            Plantas
          </Texto>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link_ativo-desktop headerLink"
              : " link_inativo headerLink"
          }
          to="/sobrenos"
        >
          <Texto tipo="paragrafo" class="desktop-menu">
            Sobre Nós
          </Texto>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link_ativo-desktop headerLink"
              : " link_inativo headerLink"
          }
          to="/blog"
        >
          <Texto tipo="paragrafo" class="desktop-menu">
            Blog
          </Texto>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "link_ativo-desktop headerLink"
              : " link_inativo headerLink"
          }
          to="/contato"
        >
          <Texto tipo="paragrafo" class="desktop-menu">
            Contato
          </Texto>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
