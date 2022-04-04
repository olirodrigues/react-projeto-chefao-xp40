import './linksContato.css'
import {FaInstagram, FaRegEnvelope, FaPinterestP} from 'react-icons/fa'

function LinksContato(){
    return(
    <div className='fundoLinkContato'>
        <FaInstagram className='linkContato'/>
        <FaPinterestP className='linkContato'/>
        <FaRegEnvelope className='linkContato'/>
    </div>
    )
}
export default LinksContato