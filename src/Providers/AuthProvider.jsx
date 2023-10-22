import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const Auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const logOut=()=>{
        return signOut(Auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, loggedUser => {
            setUser(loggedUser)
        })
        return () => {
            return unsubscribe
        }
    }, [])

    const AuthInfo = {
        user,
        createUser,
        SignInUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;