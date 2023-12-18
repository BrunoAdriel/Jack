import React, { useState } from 'react'


function SizeCheck({sizeSelect}) {

    const [selectedSize, setSelectedSize] = useState(null);

// Funcion manejo del boton y llamado a la funcion

    const sizeClick = (size) =>{
        setSelectedSize(size);
        sizeSelect(size);
    }


    return (
    <>
    <div className="container text-center">
        <div className="row row-cols-auto">
            <button className="col" onClick={() => sizeClick('S')}>S</button>
            <button className="col" onClick={() => sizeClick('M')}>M</button>
            <button className="col" onClick={() => sizeClick('L')}>L</button>
            <button className="col" onClick={() => sizeClick('XL')}>XL</button>
            <button className="col" onClick={() => sizeClick('XXL')}>XXL</button>
            <button className="col" onClick={() => sizeClick('XXXL')}>XXXL</button>
        </div>
    </div>
    </>
)
}

export default SizeCheck