import React, { useState } from 'react'
import '../App.css'


function SizeCheck({sizeSelect}) {

    const [selectedSize, setSelectedSize] = useState(null);

// Funcion manejo del boton y llamado a la funcion

    const sizeClick = (size) =>{
        setSelectedSize(size);
        sizeSelect(size);
    }

//  Uso de ternario para que iguale el tamaño elegido al de los  botones, de sea un btn solido 
    
    return (
    <>
    <div className="container text-center">
        <div className="row row-cols-auto d-flex justify-content-center">
            <button className={`btn ${selectedSize === 'S' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => sizeClick('S')}>S</button>
            <button className={`btn ${selectedSize === 'M' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => sizeClick('M')}>M</button>
            <button className={`btn ${selectedSize === 'L' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => sizeClick('L')}>L</button>
            <button className={`btn ${selectedSize === 'XL' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => sizeClick('XL')}>XL</button>
            <button className={`btn ${selectedSize === 'XXL' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => sizeClick('XXL')}>XXL</button>
            <button className={`btn ${selectedSize === 'XXXL' ? 'btn-secondary' : 'btn-outline-secondary'}`} onClick={() => sizeClick('XXXL')}>XXXL</button>
        </div>
    </div>
    </>
)
}

export default SizeCheck