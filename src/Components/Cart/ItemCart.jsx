import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const ItemCart = ({product}) => {

    const { removeProduct } = useCartContext();
    
    return (
        <table className="table-light">
            <tbody>
                <tr className="table-light">

                    <td ><img src={product.img} alt={product.name} className='tableCart' ></img></td>
                    <td >{product.nombre}</td>
                    <td >{product.infoSize}</td>
                    <td >{product.precio}</td>
                    <td >{product.quantity}</td>
                    <td >{product.quantity * product.precio}</td>
                    <td ><button onClick={()=> removeProduct(product.id)}>❌</button></td>

                </tr>
            </tbody>
            </table>
)
}

export default ItemCart