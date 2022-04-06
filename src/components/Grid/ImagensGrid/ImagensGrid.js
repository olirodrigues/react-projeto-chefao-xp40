import './ImagensGrid.css'


function ImagensGrid(props){
    return(
    <div className='container-grid_posts'>
        <div className='item-grid h-1'>
            <img src={props.src1} className='img-grid i-1' alt='imagem do blog de plantas'/>
        </div>
        <div className='item-grid h-2'>
            <img src={props.src2} className='img-grid' alt='imagem do blog de plantas'/>
        </div>
        <div className='item-grid h-3'>
            <img src={props.src3} className='img-grid' alt='imagem do blog de plantas'/>
        </div>
        <div className='item-grid h-4'>
            <img src={props.src4} className='img-grid' alt='imagem do blog de plantas'/>
        </div> 
        
    </div>
    )
}
export default ImagensGrid