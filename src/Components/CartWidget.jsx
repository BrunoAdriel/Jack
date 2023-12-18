import React from 'react'
import { useCartContext } from '../Context/CartContext'

function CartWidget() {

    const {totalProducts, cart} = useCartContext();

    return (
        <div className='conatiner'>
            <button>
                <span>{totalProducts() || cart}</span>
            </button>
        </div>
)
}

export default CartWidget