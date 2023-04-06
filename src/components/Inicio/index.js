import React from 'react'
import { Link } from 'react-router-dom'
import Portada from "../../images/inicio.jpg"
import ItemCount from '../ItemListContainer/ItemCount'


export default function Inicio() {
    const onAdd = (cantidad) =>{
        console.log(cantidad)
        }
    return (
    <div className='inicio'>
        <Link to="/">
            <h1 className='title'>Inicio</h1>
        </Link>
        <Link to="/productos">
            <h1 className='title'>Productos</h1>
        </Link>
        <img src= {Portada} alt = "inicio"/>
        <ItemCount stock={6} inicial={1} onAdd={onAdd}/>
    </div>
    )
}
