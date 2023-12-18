import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const ItemCart = ({product}) => {

    const { removeProduct } = useCartContext();
    
    return (
        <div className='conatiner'>
            <table className="table-light">
                <tr className="table-light">

                    <td className="table-light"><img src={product.img} alt={product.name}></img></td>
                    <td className="table-light">{product.nombre}</td>
                    <td className="table-light">{product.precio}</td>
                    <td className="table-light">{product.quantity}</td>
                    <td className="table-light">Subtotal: {product.quantity + product.precio}</td>
                    <td className="table-light">{product.size}</td>
                    <td className="table-light"><button onClick={()=> removeProduct(product.id)}>❌</button></td>

                </tr>
            </table>
        </div>
)
}

export default ItemCart