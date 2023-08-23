import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from 'axios';
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null);
    const [userInfo, setUserInfo] = useState({})

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateProfileArea = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        });
    };
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser);
            //console.log('current user', currentUser)
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    useEffect(() => {
        axios.post('https://thread-zone-server.vercel.app/findUserImformation', { email: user?.email })
            .then((res) => {
                //   console.log("user Id =>  ",res.data);
                setUserInfo(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [user])

    const authInfo = {
        user,
        userInfo,
        loading,
        createUser,
        signInUser,
        logOut,
        updateProfileArea,
        googleSignIn,
        facebookSignIn

    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;