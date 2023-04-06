import React from 'react'
import Nike from "../../images/Nike.jpg"
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <header>
            <Link to='/'>
                <div className='logo'>
                    <img src={Nike} alt ="logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/productos'>Productos</Link>
                </li>
            </ul>
            <CartWidget/>
        </header>
    )
}
