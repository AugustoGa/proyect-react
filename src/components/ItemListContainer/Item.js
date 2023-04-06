import React from 'react'
import { Link } from 'react-router-dom';

function Item({
    id,
    title,
    price,
    image,
    category
}) {
    return (
            <div className='producto'>
                <Link to ='#'>
                    <div className='producto_img'>
                        <img src={image.default} alt={title}/>
                    </div>
                </Link>
                <div className='producto_footer'>
                    <h1>{title}</h1>
                    <p>{category}</p>
                    <p className='price'>${price}</p>
                </div>
                <div className='buttom'>
                    <button className='btn'> Añadir al carrito</button>
                    <div>
                        <Link to ='#' className='btn'> Vista </Link>
                    </div>
                </div>
            </div>
    )
}
//
export default Item