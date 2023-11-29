import React from 'react'
import Card from './Card'

function ItemDetail({prods}) {

    const getProds = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve( <div class="spinner-border" role="status">
                        <span class="visually-hidden">Cargando Productos</span>
                    </div>) 
        }, 3000)
    })    

    
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

export default ItemDetail