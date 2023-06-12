import { useState } from "react";
import { createContext } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { FcPlus } from "react-icons/fc";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    };


    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user;
                const saveUser ={ email: googleUser.email, name: googleUser.displayName, photoURL: googleUser.photoURL}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast("YAH!!! Your social sign in successfully",
                                {
                                    position: "top-right",
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    theme: "dark",
                                    icon: <FcPlus></FcPlus>
                                });
                        }
                    })
                setLoading(true);
                console.log(googleUser);
            })
            .catch(error => console.log(error.message))
    }

    const facebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const fbUser = result.user;
                setLoading(true);
                console.log(fbUser);
            })
            .catch(error => console.log(error.message))
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                .then(data => {
                    console.log(data)
                    localStorage.setItem('access-token', data.data.jwtToken)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleLogin,
        facebookLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;