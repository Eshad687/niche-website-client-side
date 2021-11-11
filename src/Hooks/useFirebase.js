import { useEffect, useState } from "react";

import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    // states
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    // handling user change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.email) {

                setUser(user);




            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])

    // handling google sign in
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    // creating user
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login user
    const signInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    // logout user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setErrorMessage('');
        }).catch((error) => {
            setErrorMessage(error.message)
        })
            .finally(() => setIsLoading(false));

    }
    // updating name
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }

    return {
        user,
        errorMessage,
        isLoading,
        setIsLoading,
        updateName,
        setErrorMessage,
        createUser,
        signInWithEmailPassword,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;