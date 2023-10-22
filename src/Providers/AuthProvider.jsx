import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext=createContext(null)
const Auth =getAuth(app);

const AuthProvider = ({children}) => {
    const [error,setError]=useState();
    const user =null;

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(Auth,email,password)
    // .then(result=>{
    //     const loggedUser=result.user;
    //     console.log(loggedUser);
    // })
    // .catch(error=>{
    //     setError(error.message)
    // })
}

    const AuthInfo={
        user,
        createUser,
    }  
    return (
       <AuthContext.Provider value={AuthInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;