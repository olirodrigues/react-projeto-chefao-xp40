
import { Link } from "react-router-dom";
import "./estiloheader.css";
import LogoMee from "../../assets/logoMee.svg";

function Header() {
  return (
    <header>
      <nav>
        <img className='imgLogo' src={LogoMee} alt='Logo da empresa com nome MEE' />
        <Link className='headerLink' to='/plantas'>
          Plantas
        </Link>
        <Link className='headerLink' to='/sobrenos'>
          Sobre nós
        </Link>
        <Link className='headerLink' to='/blog'>
          Blog
        </Link>
        <Link className='headerLink' to='/contato'>
          Contato
        </Link>
      </nav>
    </header>
  );
}

export default Header;
