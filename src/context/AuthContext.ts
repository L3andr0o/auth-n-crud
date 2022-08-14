import { createContext, useContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup,
    sendPasswordResetEmail } from 'firebase/auth';
    import { auth } from '../firebase';

    export const authContext = createContext(null);
    export const useAuth = () =>{
    const context = useContext(authContext);
    return context
}

