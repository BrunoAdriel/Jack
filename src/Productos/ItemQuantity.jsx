import React, {useEffect, useState} from 'react'

function ItemQuantity({initial, stock, onAdd}) {
    
    const[count, setCount] = useState(parseInt(initial));
    
    const decrease = () => { setCount(count - 1)};
    
    const increse = () => { setCount(count + 1)};
    
    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial]);

    return (
        <div className='conatiner grid row-gap-3'>
            <div className='d-flex justify-content-evenly p-2 g-col-6'>
                <button disabled={count <= 1} onClick={decrease} className='btn btn-success'> - </button>
                <span>{count}</span>
                <button disabled={count >= stock} onClick={increse} className='btn btn-success'> + </button>
            </div>
            <div>
                <button disabled={stock <= 0} onClick={()=> onAdd(count)} className='btn btn-dark d-flex justify-content-center'>
                    Agregar a Carrito
                </button>
            </div>
        
        </div>
)
}

export default ItemQuantity