import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from './ItemCart';
import TableHeader from './TableHeader'

const Cart = () => {

// Llamamos las funciones que queremos usar  

const { cart, totalPrice, clearCart} = useCartContext();
    
if(cart.length === 0){
    return(<>

                <div className="NoElemetCarrito"> 
                    <p className='fw-bolder'>No hay productos cargados en el carrito.</p>
                    <Link to="/">
                        <button className="btn btn-dark">Volver al Inicio</button>
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

            <p className="text-end fw-bolder fs-5">Total a pagar: $ {totalPrice()} </p>

            </div>
            <div className="btnsCarro">
                <button onClick={clearCart} className="btn btn-outline-danger">Limpiar Carro</button>

                <Link to="/checkout">
                    {' '}
                    <button className='btn btn-outline-success'>Finalizar Compra</button>
                </Link>
            </div>

        </>
)

}
export default Cart