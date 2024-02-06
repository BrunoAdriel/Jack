import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
return (
<>
<form>
    <div className='containerLogin'>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Direccion Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div>
            <label for="inputPassword5" className="form-label">Contraseña</label>
            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
        </div>
        <section className='d-flex flex-column align-items-center'>
            <span className=''>Si todavia no tenes cuenta, <Link to="/Registro">Registrate acá!</Link></span>
            <button className=''>Ingresar</button>
        </section>
    </div>
</form>
</>
)
}

export default Login


