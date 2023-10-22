import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const user = null;

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const SignInUser=(email,password)=>{
        return signInWithEmailAndPassword(Auth,email,password);
    }

    const AuthInfo = {
        user,
        createUser,
        SignInUser,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;