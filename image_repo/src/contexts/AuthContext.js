import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    function login(email, password){
        return auth.signInWithEmailAndPassword(email,password)//If want to use another database other than firebase, just need to change this line (sign up as well, etc.)
    }
    function logout(){
        return auth.signOut()
    }
    function resetPasswordEmail(email){
        return auth.sendPasswordResetEmail(email)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    const value={
        signup,
        login,
        currentUser,
        logout,
        resetPasswordEmail
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
