import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom"
import ItemDetail from './ItemDetail';
import ProductosJson from "../Components/ProductosJson/Productos.json"; 


function ItemDetailContainer() {

    const [item, setItem] = useState([])
    const {id} = useParams();


    useEffect(()=>{
        const promesa = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve(ProductosJson.find(item => item.id === parseInt(id)))
            }, 1000)
        })
        promesa.then((data)=>{
            setItem(data)
        })
    },[id])

    return (
        <>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <ItemDetail item={item}/>
            </div>
        </div>
        </> 
    )
}

export default ItemDetailContainer