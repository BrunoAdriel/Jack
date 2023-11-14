import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col'>
                    <ul className="nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active a" aria-current="page" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ingresar</a>
                        </li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>
            </div>
        </>
    )
}

export default Navbar