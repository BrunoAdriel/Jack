import React, { useContext, useState, useEffect } from 'react'

const RegisterContext = React.createContext('');
export const useRegisterContext = () => useContext(RegisterContext);


const RegisterProvider = ({children}) =>{
    
const [person, setPerson] = useState([]);

// codigo para que se me cree el array desde antes y me lo rellene y no me cree el array vasio 
useEffect(() => {
    console.log("person:", person);
}, [person]);


const addPerson = (name, surname, email, secondEmail, password, secondPass) => {
    if (isRegister(email) || !samePass(password, secondPass)) {
        alert("Por favor verifique los datos del formulario!")
    } else {
        setPerson([...person, { name, surname, email, password, secondPass, secondEmail }]) || alert("registrado!");
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


return(
    <RegisterContext.Provider
        value={{
            addPerson,
            isRegister,
            samePass,
            person,
        }}>
        {children} 
        </RegisterContext.Provider>
)
}

export default RegisterProvider