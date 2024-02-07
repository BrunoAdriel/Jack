import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useRegisterContext } from '../../Context/RegisterContext';


function Register() {

  const [names, setNames] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  // const [secondEmail, serSecondEmail] = useState ('')
  const [password, setPassword] = useState('');

  const { addPerson } = useRegisterContext();

  // Llama a la función addPerson y pasa los valores
  const registerAdd = () => {
    addPerson(names, surname, email, password);
  };


return (
<div className='containerRegistro'>
{/* Nombre y apellido */}
<form id="registerForm">
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="Nobre" aria-label="First name" value={names} onChange={(e) => setNames(e.target.value)}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" value={surname} onChange={(e) => setSurname(e.target.value)}/>
    </div>
  </div>
{/* Direc email */}
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label"></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
{/* repetir email */}
  <div class="mb-3">
    <label for="exampleInputEmail2" className="form-label"></label>
    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Confirmar Email"/>
  </div>
{/* contraseña */}
  <div>
    <label for="inputPassword5" className="form-label"></label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Constraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
    <button type="button" className="btn btn-success" onClick={registerAdd}>Registrarse</button>
  </div>
</form>
</div>
)
}

export default Register