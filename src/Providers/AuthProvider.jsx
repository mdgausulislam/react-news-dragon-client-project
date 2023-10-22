import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../Firebase/firebase.config';


const Auth=getAuth(app);

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const user ={displayName:'Hemonto'};
    const AuthInfo={
        user,
    }  
    return (
       <AuthContext.Provider value={AuthInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;