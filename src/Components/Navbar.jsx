import React from 'react'
import CartWidget from './CartWidget'
import Logo from "../imgs/chaleco.png"


const Navbar = () => {
    return (
        <>
                <div className='row'>
                    <ul className="nav d-flex ">
                        <img src={Logo} alt='logo de la pagina, chaleco' />
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
                        <CartWidget/>
                    </ul>
            </div>
        </>
    )
}

export default Navbar