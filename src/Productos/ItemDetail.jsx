import React, { useState } from 'react'
import SizeCheck from './SizeCheck'
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemQuantity from './ItemQuantity';

function ItemDetail({item}) {

    const[goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(item, quantity);
    }
    

    return (
<>

<div className="card ItemDetailCard ">
        <img src={item.img} className="card-img-top" alt={item.nombre}/>
        <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text">$: {item.precio} </p>
            <section>
                <p className='card-text'>Seleccione un talle:<SizeCheck/></p>
            </section>
            <p className="card-text"><small className="text-body-secondary">Cantidad disponible: {item.stock}</small></p>
            <div>
                {goToCart ? <Link to='/cart'>Ver Carrito</Link>: <ItemQuantity stock={item.stock} initial={0} onAdd={onAdd}/>}
            </div>
        </div>
    </div>

</>
)
}

export default ItemDetail