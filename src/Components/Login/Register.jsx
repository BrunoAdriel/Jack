import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useRegisterContext } from '../../Context/RegisterContext';


function Register() {

const [successReg, setSuccessReg] = useState(false);
const {addPerson} = useRegisterContext();
const registerAdd = () =>{
  setSuccessReg(true);
  addPerson( names, surname, email, password );
  console.log('pancho')
}



return (
<div className='containerRegistro'>
{/* Nombre y apellido */}
<form id="registerForm">
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Nobre" aria-label="First name" id='nombre'/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" id='surname'/>
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
    <button type="button" className="btn btn-success" onClick={()=>registerAdd()} >Registrarse</button>
  </div>
</form>
</div>
)
}

export default Register