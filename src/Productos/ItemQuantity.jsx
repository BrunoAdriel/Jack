import React, {useEffect, useState} from 'react'

function ItemQuantity({initial, stock, onAdd}) {
    
    const[count, setCount] = useState(parseInt(initial));
    
    const decrease = () => { setCount(count - 1)};
    
    const increse = () => { setCount(count + 1)};
    
    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial]);

    return (
        <div className='conatiner'>
            <button disabled={count <= 1} onClick={decrease} className=''> - </button>
            <span>{count}</span>
            <button disable={count >= stock} onClick={increse} className=''> + </button>
            <div>
                <button disabled={stock <= 0} onClick={()=> onAdd(count)} className=''>
                    Agregar a Carrito
                </button>
            </div>
        
        </div>
)
}

export default ItemQuantity