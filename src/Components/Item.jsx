import React from 'react'
import { Link } from 'react-router-dom';

function Item({item}) {
return (
    <>
    <Link to={'/item/' + item.id} className='text-decoration-none'>
    <div className="card">
        <img src={item.img} className="card-img-top" alt={item.nombre}/>
        <div className="card-body">
            <h5 className="card-title">{item.nombre} </h5>
            <p className="card-text">{item.descripcion}</p>
        </div>
    </div>
</Link>
</>  
)
}

export default Item