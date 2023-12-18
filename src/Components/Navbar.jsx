import React from 'react'
import carritoCompras from '../imgs/carrito.png'
import Logo from "../imgs/chaleco.png"
import { Link } from 'react-router-dom' 


const Navbar = () => {
    return (
        <>
                <div className='row'>
                    <ul className="nav d-flex ">
                        <Link to={"/"}><img src={Logo} alt='logo de la pagina, chaleco' /></Link>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link active a" aria-current="page">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Nike"} className="nav-link">Nike</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Adidas"} className="nav-link">Adidas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/NorthFace"} className="nav-link">North Face</Link>
                        </li>
                        <Link to={"/cart"}> <img src={carritoCompras} alt='carrito de compras' className='imgcarrito ms-auto'></img></Link> 
                    </ul>
            </div>
        </>
    )
}

export default Navbar