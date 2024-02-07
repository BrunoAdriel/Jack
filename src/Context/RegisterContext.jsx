import React, { useContext, useState } from 'react'

const RegisterContext = React.createContext('');
export const useRegisterContext = () => useContext(RegisterContext);


const RegisterProvider = ({children}) =>{
    
const [person, setPerson] = useState([]);
    
    // const registerForm  = document.querySelector('#registerForm');
    // registerForm.addEventListener('submit', (e)=>e.preventDefault());


const addPerson = (name, surname, email, password, secondPass) => {
    if (IsRegister(email)) {
        setPerson(
            person.map((prson) =>
                prson.email === email ? { ...prson, name, surname, password, email } : prson
            )
        );
    } else {
        setPerson([...person, { name, surname, email, password }]);
    }
    console.log(person)
};

const IsRegister = (email) => {
    return person.find((p) => p.email === email) ? true : false;
};



return(
    <RegisterContext.Provider
        value={{
            addPerson,
            IsRegister,
            person,
        }}>
        {children} 
        </RegisterContext.Provider>
)
}

export default RegisterProvider