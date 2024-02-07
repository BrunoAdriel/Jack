import React, { useContext, useState } from 'react'

const RegisterContext = React.createContext('');
export const useRegisterContext = () => useContext(RegisterContext);

const RegisterProvider = ({children}) =>{

    const [person, setPerson] = useState([]);

    const registerForm  = document.querySelector('#registerForm');



    registerForm.addEventListener('submit', (e)=>e.preventDefault());

// copia
// const addPerson = (name, surname, email, password) => {
//     if(IsRegister(item.email){
//         setPerson(
//             person.map((prson)=>{
//                 return prson.email ===item.email ?{
//                     ...prson, name, surname, password, email
//                 } : prson;
//             })
//         );
//     } else {
//         setPerson([...person, {...name, surname, email, password}]);
//     }
// }


    // original
    const addPerson = (name, surname, email, password) => {
            if(IsRegister(item.email)){
                setPerson(
                    person.map((prson)=>{
                        return prson.email ===item.email ?{
                            ...prson, name, surname, password, email
                        } : prson;
                    })
                );
            } else {
                setPerson([...person, {...name, surname, email, password}]);
            }
    }


// Saber si la persona esta resgistraada o no

const IsRegister = (email) =>{
    person.find((p)=>p.email === email ) ? true : false;
}



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