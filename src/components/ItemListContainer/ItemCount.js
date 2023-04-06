import React, {useState} from 'react';



function ItemCount({stock,inicial,onAdd}) {
const [count, setCount] = useState(inicial);



const sumar = () => {
    count < stock ? setCount(count + 1) : alert('No hay suficiente stock')
}
const restar = () => {
    count > inicial ? setCount(count-1) : alert('no hay stock')
}
const reset = () => {
    setCount(inicial);
}
    return(
        <div className='box'>
            <h1>{count}</h1>
                <div className="botones">
                <button onClick={sumar} type="button" class="btn btn-success">+</button>
                <button onClick={restar} type="button" class="btn btn-danger">-</button>
                <button onClick={reset} type="button" class="btn btn-danger">Reestablecer</button>
                <button onClick={()=>{onAdd(count);reset()}} type="button" class="btn btn-secondary">Agregar</button>
            </div>
        </div>
    );
}
export default ItemCount;

