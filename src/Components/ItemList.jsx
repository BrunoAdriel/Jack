import React from 'react'
import Item from './Item'

function ItemList({item}) {
return (
        <div className='container row'>
            {item.map( item =>
                <div className="row col-md-4" key={item.id}>
            <Item item={item}/>
        </div>
        )}
    </div>
)
}

export default ItemList