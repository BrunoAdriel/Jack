import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
return (
<div className='containerRegistro'>
{/* Nombre y apellido */}
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Nobre" aria-label="First name"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" />
    </div>
  </div>
{/* Direc email */}
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label"></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion Email"/>
  </div>
{/* repetir email */}
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label"></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirmar Email"/>
  </div>
{/* contraseña */}
  <div>
    <label for="inputPassword5" className="form-label"></label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Constraseña"/>
      <div id="passwordHelpBlock" className="form-text">
        La contraseña debe incluir de 8 a 20 caracteres, teniendo numeros y letras y no debe tener espacios, caracteres especiales o emoji. 
      </div>
  </div>
{/* repetir contra */}
  <div>
    <label for="inputPassword5" className="form-label"></label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Confirmar Contraseña"/>
  </div>
{/* Buttons final */}
  <div className='btnRegister'>
    <spam>Deseas volver a <Link to="/Login">Ingrersar</Link></spam>
    <button type="button" className="btn btn-success">Registrarse</button>
  </div>
</div>
)
}

export default Register