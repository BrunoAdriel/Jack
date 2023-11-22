import React from 'react'
import Card from './Card'
import NorthFaceBlanca from "../imgs/NortFaceBlanca.jpg";
import CamperaNikeNegra from "../imgs/CamperaNikeNegra.jpg"
import CamperaNikePuffer from "../imgs/CamperaNikePuffer.jpg"
import CamperaAdidas from "../imgs/CamperaAdidas.jpg"


function Productos() {

    const prods =[
        {id: 1, nombre:"Camepera Nike", descripcion: "Lorem8", marca: "Nike", stock:15, img: CamperaNikeNegra },
        {id: 2, nombre:"Campera Adidas", descripcion: "Lorem8", marca: "Adidas", stock:16, img: CamperaAdidas }, 
        {id: 3, nombre:"Campera Nike Puffer", descripcion:" Lorem8", marca: "Nike", stock: 14, img: CamperaNikePuffer },
        {id: 4, nombre:"Campera North Face", descripcion: "Lorem8", marca: "North Face", stock: 10, img: NorthFaceBlanca } 
    ]

    return (
        <>
            <h2>Nuestros Productos</h2>
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4 sizeCard">
                {prods.map((el) => <Card nombre={el.nombre} descripcion={el.descripcion} marca={el.marca} stock={el.stock} img={el.img} key={el.id}/>)}
            </div>
        </div>
        </> 
    )
}

export default Productos