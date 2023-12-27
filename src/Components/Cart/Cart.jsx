import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from './ItemCart';
import TableHeader from './TableHeader'

const Cart = () => {

// Llamamos las funciones que queremos usar  

const { cart, totalPrice} = useCartContext();
    
if(cart.length === 0){
    return(<>

                <div className="d-flex justify-content-center"> 
                    <p>No hay elementos cargados en el carrito.</p>
                    <Link to="/">
                        <button>Volver al Inicio</button>
                    </Link>
                </div>

    </>)
}
    
    return (
        <>
            <div className='container'>

            <TableHeader/>
            
            {cart.map((product)=>(
                <ItemCart key={product.id} product={product}/>
            ))}

            <p>Total a pagar: $ {totalPrice()} </p>

            </div>
            <Link to="/checkout">
                {' '}
                <button className='btn-total'>Finalizar Compra</button>
            </Link>

        </>
)

}
export default Cart