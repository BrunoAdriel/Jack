import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const ItemCart = ({product}) => {

    const { removeProduct } = useCartContext();
    
    return (
        <table className="table-light">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nomrbe</th>
                    <th scope="col">Talle </th>

                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">subtotal</th>

                    <th scope="col">Elinimar Prod</th>
    
                </tr>
            </thead>
                <tr className="table-light">

                    <td className="table-light"><img src={product.img} alt={product.name}></img></td>
                    <td className="table-light">{product.nombre}</td>
                    <td className="table-light">{product.infoSize}</td>
                    <td className="table-light">{product.precio}</td>
                    <td className="table-light">{product.quantity}</td>
                    <td className="table-light">Subtotal: {product.quantity + product.precio}</td>
                    <td className="table-light"><button onClick={()=> removeProduct(product.id)}>❌</button></td>

                </tr>
            </table>
)
}

export default ItemCart