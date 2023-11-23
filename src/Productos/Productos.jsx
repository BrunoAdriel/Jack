import React from 'react'
import Card from './Card'
import NorthFaceBlanca from "../imgs/NortFaceBlanca.jpg";
import CamperaNikeNegra from "../imgs/CamperaNikeNegra.jpg"
import CamperaNikePuffer from "../imgs/CamperaNikePuffer.jpg"
import CamperaAdidas from "../imgs/CamperaAdidas.jpg"
import CamperonAdidas from "../imgs/CamperonAdidas.jpg"
import CamperonNorthFace from "../imgs/CamperonNorthFace.jpg"
import CamperaNorthFaceBySuprime from "../imgs/CamperaNorthFaceBySupreme.jpg"
import CamperaNikeRunning from "../imgs/CamperaNikeRunning.jpg"
import CamperaAdidasRunning from "../imgs/CamperaAdidasRunning.jpg"



function Productos() {

    const prods =[
        {id: 1, nombre:"Camepera Nike", descripcion: "Lorem8", marca: "Nike", stock:15, img: CamperaNikeNegra },
        {id: 2, nombre:"Campera Adidas", descripcion: "Lorem8", marca: "Adidas", stock:16, img: CamperaAdidas }, 
        {id: 3, nombre:"Campera Nike Puffer", descripcion:"Campera Nike Puffer Lorem8", marca: "Nike", stock: 14, img: CamperaNikePuffer },
        {id: 4, nombre:"Campera North Face", descripcion: "Lorem8", marca: "North Face", stock: 10, img: NorthFaceBlanca },
        {id: 5, nombre:"Campera Adidas", descripcion:"Campera Adidas Lorem8", marca:"Adidas", stock: 15, img: CamperonAdidas },
        {id: 6, nombre:"Camperon North Face", descripcion:"Camperon North Face Lorem8", marca:"North Face", stock: 7, img: CamperonNorthFace },
        {id: 7, nombre:"Campera North Face By Suprime", descripcion:"Campera North Face by suprime Lorem8", marca:"North Face", stock: 9, img: CamperaNorthFaceBySuprime },
        {id: 8, nombre:"Campera Nike Running", descripcion:"Campera Nike running Lorem8", marca: "Nike", stock: 17, img: CamperaNikeRunning },
        {id: 9, nombre:"Campera Adidas Running", descripcion:"Camperon Adidas Running Lorem8", marca:"Adidas", stock: 20, img: CamperaAdidasRunning}
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