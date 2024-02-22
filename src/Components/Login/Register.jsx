import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useRegisterContext } from '../../Context/RegisterContext';


function Register() {

  const [names, setNames] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [secondEmail, setSecondEmail] = useState ('');
  const [password, setPassword] = useState('');
  const [secondPass, setsecondPass] = useState('');
  const {handleAddPerson} = useRegisterContext();



return (
<div className='containerRegistro'>
{/* Nombre y apellido */}
<form id="registerForm">
  <div className="row ss">
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
    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Confirmar Email" value={secondEmail} onChange={(e) => setSecondEmail(e.target.value)}/>
  </div>
{/* contraseña */}
  <div>
    <label for="inputPassword5" className="form-label"></label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Constraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
  </div>
{/* repetir contra */}
  <div>
    <label for="inputPassword5" className="form-label"></label>
    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" placeholder="Confirmar Contraseña" value={secondPass} onChange={(e) => setsecondPass(e.target.value)}/>
  </div>
{/* Buttons final */}
  <div className='btnRegister'>
    <spam>Deseas volver a <Link to="/Login">Ingrersar</Link></spam>
    <button type="button" className="btn btn-success" onClick={() => handleAddPerson(names, surname, email, secondEmail, password, secondPass)} >Registrarse</button>
  </div>
</form>
</div>
)
}

export default Register