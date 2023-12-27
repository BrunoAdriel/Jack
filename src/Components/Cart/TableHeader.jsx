import React from 'react'

function TableHeader() {

    return (
        <table className="table-light">
        <thead>
            <tr>
                <th scope="col">Img</th>
                <th scope="col">Nombre</th>
                <th scope="col">Talle </th>

                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">subtotal</th>

                <th scope="col">Elinimar Prod</th>

            </tr>
        </thead>
        </table>
)
}

export default TableHeader