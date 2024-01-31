import React from 'react'

function Register() {
return (
    <div className='containerRegistro'>
{/* Nombre y apellido */}
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Nobre" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name"/>
  </div>
</div>
{/* Direc email */}
<div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Direccion Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
{/* a chekeaar */}
    <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Direccion Email 2</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
{/* primera */}
<label for="inputPassword5" class="form-label">Contraseña</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
    La contraseña debe incluir de 8 a 20 caracteres, teniendo numeros y letras y no debe tener espacios, caracteres especiales o emoji.
</div>
{/* a checkear */}
<label for="inputPassword5" class="form-label">Confirmar Constraseña</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>

    </div>
)
}

export default Register