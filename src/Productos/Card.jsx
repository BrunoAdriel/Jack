import React from 'react';
import { Link } from 'react-router-dom';


function Card ({item}) {

    return (
        <>
        <Link to={'/item/' + item.id} className='text-decoration-none'>
                <div className="card dsitancia">
                    <img src={item.img} className="card-img-top" alt={item.nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre} {item.marca}</h5>
                        <p className="card-text">{item.descripcion}</p>
                        <p className="card-text">Talles disponibles: </p>
                        <p className="card-text"><small className="text-body-secondary">Cantidad disponible: {item.stock}</small></p>
                        <a className="btn btn-primary rounded float-start">Mas Info</a>
                        <button className="btn btn-primary rounded float-end">Comprar</button>
                    </div>
                </div>
        </Link>
        </>

    ) 
}


export default Card