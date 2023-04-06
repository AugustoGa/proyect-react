import React from 'react'
import ImgCart from "../../images/icon-cart.gif"

function CartWidget() {
    return (
    <div className='cart'>
        <img src={ImgCart} alt ="ImgCart" width="50"/>
        <span className='cart'>3</span>
        </div>
    )
}

export default CartWidget