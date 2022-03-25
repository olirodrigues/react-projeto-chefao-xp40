import {Link} from 'react-router-dom'
import './estiloheader.css'
import LogoMee from '../../assets/logoMee.svg'
import Texto from '../Texto/Texto'



function Header(){
    return(
        <nav>
            <img className='imgLogo' src={LogoMee} alt="Logo da empresa com nome MEE"/>
            <Link className='headerLink' to="/plantas">
            <Texto tipo='paragrafo' children='Plantas'/>
            </Link>
            <Link className='headerLink' to="/sobrenos">
            <Texto tipo='paragrafo' children='Sobre nós' />
            </Link>
            <Link className='headerLink' to="/blog">
            <Texto tipo='paragrafo' children='Blog'/>
            </Link>
            <Link className='headerLink' to="/contato">
            <Texto tipo='paragrafo' children='Contato'/>
            </Link>
        </nav>
    )
}

export default Header;