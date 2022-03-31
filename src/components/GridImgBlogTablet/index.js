import './gridTablet.css'

function GridImgBlogTablet(props){
    return(
    <div className='container-grid'>
        <div className='item-grid'>
            <img src={props.src1} className='img-grid h-1' alt='imagem do blog de plantas'/>
        </div>
        <div className='item-grid'>
            <img src={props.src2} className='img-grid h-2' alt='imagem do blog de plantas'/>
        </div>
        <div className='item-grid'>
            <img src={props.src3} className='img-grid h-3' alt='imagem do blog de plantas'/>
        </div>        
    </div>
    )
}
export default GridImgBlogTablet