import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom"
import ProductosJson from "../Components/ProductosJson/Productos.json"; 
import ItemList from "../Components/ItemList"


function ItemListContainer() {
    const [item, setItem] = useState([])
    const {id} = useParams();


    useEffect(()=>{
        const fetchData = async()=>{
            try{ 
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve( id ? ProductosJson.filter(item => item.marca === id) : ProductosJson)
                    }, 2000 );
                });
            setItem(data);
        }catch(error){
            console.log("error", error);
        }
    }
    fetchData()
    },[id])

    return (
        <>
            <h2>Nuestros Productos</h2>
                <div className='container'>
                    <ItemList item={item}/>
                </div>

        </> 
)
}

export default ItemListContainer

