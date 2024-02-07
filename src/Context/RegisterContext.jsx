import React, { useContext, useState } from 'react'

const RegisterContext = React.createContext('');
export const useRegisterContext = () => useContext(RegisterContext);


const RegisterProvider = ({children}) =>{
    
const [person, setPerson] = useState([]);
    
    // const registerForm  = document.querySelector('#registerForm');
    // registerForm.addEventListener('submit', (e)=>e.preventDefault());

// original
// const addPerson = (name, surname, email, secondEmail, password, secondPass) => {
//     if (IsRegister(email)) {
//         setPerson(
//             person.map((prson) =>
//                 prson.email === email ? { ...prson, name, surname, password, email } : prson
//             )
//         );
//     } else {
//         setPerson([...person, { name, surname, email, password }]);
//     }
//     console.log(person)
// };

// const IsRegister = (email) => {
//     return person.find((p) => p.email === email) ? true : false;
// };


// copia
const addPerson = (name, surname, email, secondEmail, password, secondPass) => {
    if (handleSubmit(email) || samePass()) {
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



const handleSubmit = (email) => {
    if (IsRegister(email)) {
        alert("El email ya fue registrado.");
    } else {
        console.log("El email no está registrado.");
    }
};


const IsRegister = (email) => {
    return person.find((p) => p.email === email) ? true : false;
};


const samePass = (secondPass) =>{
    if(person.password =! secondPass)
    alert("Las contraseñas no coinciden")
    else{person.password === secondPass  
    }
}



return(
    <RegisterContext.Provider
        value={{
            addPerson,
            IsRegister,
            samePass,
            person,
        }}>
        {children} 
        </RegisterContext.Provider>
)
}

export default RegisterProvider