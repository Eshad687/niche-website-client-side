import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import axios from "axios";

initializeAuthentication();

const useFirebase = () => {
    // states
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [admin, setAdmin] = useState(false)


    const auth = getAuth();

    // handling user change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.email) {

                setUser(user);

                console.log(user)


            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])

    useEffect(() => {
        axios.get(`https://intense-tundra-40830.herokuapp.com/users/${user.email}`)
            .then(res => setAdmin(res.data.admin))
    }, [user.email])



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
        admin,
        setIsLoading,
        updateName,
        setErrorMessage,
        createUser,
        signInWithEmailPassword,

        logOut
    }

}

export default useFirebase;