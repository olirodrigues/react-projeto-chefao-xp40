import './linksContato.css'
import {FaInstagram, FaRegEnvelope, FaPinterestP} from 'react-icons/fa'

function LinksContato(){
    return(
    <div className='fundoLinkContato'>
        <div className='circulo'>
        <FaInstagram className='linkContato'/>
        </div>
        <div className='circulo'>
        <FaPinterestP className='linkContato'/>
        </div>
        <div className='circulo'>
        <FaRegEnvelope className='linkContato'/>
        </div>
    </div>
    )
}
export default LinksContato