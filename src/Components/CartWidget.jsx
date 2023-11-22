import React from 'react'
import carritoCompras from '../imgs/carrito.png'


function CartWidget({}) {
    return (
        <div>
            <img src={carritoCompras} alt='carrito de compras' className='imgcarrito ms-auto'></img>
        </div>
)
}

export default CartWidget