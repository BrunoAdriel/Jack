import React from 'react'


function Card ({nombre, descripcion, marca, stock, img}) {
    return (
        <>

                <div className="card dsitancia">
                    <img src={img} className="card-img-top" alt={nombre}/>
                    <div className="card-body">
                        <h5 className="card-title">{nombre} {marca}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text">Talles disponibles: </p>
                        <p className="card-text"><small className="text-body-secondary">Cantidad disponible:{stock}</small></p>
                        <a className="btn btn-primary rounded float-end">Go somewhere</a>
                    </div>
                </div>

        </>
    ) 
}

export default Card