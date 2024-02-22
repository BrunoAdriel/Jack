import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const RegisterContext = React.createContext('');
export const useRegisterContext = () => useContext(RegisterContext);


const RegisterProvider = ({children}) =>{
    
const [person, setPerson] = useState([]);

// codigo para que se me cree el array desde antes y me lo rellene y no me cree el array vacio 
useEffect(() => {
    console.log("person:", person);
}, [person]);


const addPerson = (name, surname, email, secondEmail, password, secondPass) => {
    const errors = [];

    if (isRegister(email)) {
        errors.push("El email ya está registrado.");
    }

    if(!isFormValid){
        error.push("no pueden haber campos vacios!")
    }
    
    if (!samePass(password, secondPass)) {
        errors.push("Las contraseñas no coinciden.");
    }

    if (!sameEmail(email, secondEmail)) {
        errors.push("Los emails no coinciden.");
    }

    if (errors.length > 0) {
        return { success: false, errors };
    } else {
        setPerson([...person, { name, surname, email, password, secondPass, secondEmail }]);
        return { success: true };
    }
};

const isRegister = (email) => {
    return person.find((p) => p.email === email) ? true : false;
};

const samePass = (password, secondPass) =>{
    if (password !== secondPass){
        alert("Las contraseñas no coinciden");
        return false;
    } return true;
}

const sameEmail = (email, secondEmail) =>{
    if(email !== secondEmail){
        alert("Los Emails no coinciden");
        return false;
    }return true;
}

const isFormValid = () => {
    return names !== '' && surname !== '' && email !== '' && password !== ''
};

const handleAddPerson = (name, surname, email, secondEmail, password, secondPass) => {
    const result = addPerson(name, surname, email, secondEmail, password, secondPass);
    
    if (result.success) {
        alert("Registrado!");
    } else {
        alert("Por favor verifique los datos del formulario:\n" + result.errors.join("\n"));
    }
    <Link to={"/login"}></Link>
};


return(
    <RegisterContext.Provider
        value={{
            addPerson,
            handleAddPerson,
            person,
        }}>
        {children} 
        </RegisterContext.Provider>
)
}

export default RegisterProvider