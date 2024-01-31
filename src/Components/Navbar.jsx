import React from 'react'
import carritoCompras from '../imgs/carrito.png'
import LoginLogo from '../imgs/LoginLogo.png'
import Logo from "../imgs/chaleco.png"
import { Link } from 'react-router-dom' 


const Navbar = () => {
    return (
        <>
                <div className='row'>
                    <ul className="nav d-flex ">
                        <Link to={"/"}><img src={Logo} alt='logo de la pagina, chaleco' className='LogoNavar'/></Link>
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
                        <div>
                            <section>
                        <Link to={"/login"}><img src={LoginLogo} alt='imagen para iniciar sesion 'className='imgLogin' ></img></Link>
                        <Link to={"/cart"}> <img src={carritoCompras} alt='carrito de compras' className='imgCarrito ms-auto'></img></Link> </section></div>
                    </ul>
            </div>
        </>
    )
}

export default Navbar