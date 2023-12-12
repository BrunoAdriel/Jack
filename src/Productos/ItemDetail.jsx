import React from 'react'
import SizeCheck from './SizeCheck'

function ItemDetail({item}) {

    
    return (
<>

<div className="card ItemDetailCard ">
        <img src={item.img} className="card-img-top" alt={item.nombre}/>
        <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text">$: {item.precio} </p>
            <p className='card-text'>Seleccione un talle:</p>
            <SizeCheck/>
            <p className="card-text"><small className="text-body-secondary">Cantidad disponible: {item.stock}</small></p>
            <button className="btn btn-primary rounded float-end">Comprar</button>
        </div>
    </div>

</>
)
}

export default ItemDetail