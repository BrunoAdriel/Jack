import React from 'react'
import Wallpaper from "../imgs/Wallpaper.jpg"
import "./ComponentsCss.css"


const Entrada = () => {
  return (
    <>
        <img className="entrada" src={Wallpaper} alt='imgan de entrada del local'/>
        <p>Bienvenidos a Jack,Lorem ipsum dolor sit amet.</p>
    </>
  )
}

export default Entrada