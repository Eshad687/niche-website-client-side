

import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const LoginSignup = () => {
    const { createUser, signInWithGoogle, signInWithEmailPassword, setErrorMessage, updateName, setIsLoading, errorMessage } = useAuth();

    const [login, setLogin] = useState(true)

    const toggleLoginSignUp = () => {
        setLogin(!login);
        setErrorMessage('');
    }

    //get back to previous page upon login
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/'

    // using form data to authentication and create user
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setIsLoading(true);
        login ? signInWithEmailPassword(data.email, data.password)
            .then((result) => {
                history.push(redirect_uri)
                setErrorMessage('')
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
            .finally(() => setIsLoading(false))
            : createUser(data.email, data.password)
                .then((result) => {


                    updateName(data.name)
                    history.push(redirect_uri)
                    setErrorMessage('')
                    window.location.reload()

                })
                .catch((error) => {
                    setErrorMessage(error.message);
                })
                .finally(() => setIsLoading(false));


    };

    // handle google login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {

                history.push(redirect_uri)
                setErrorMessage('');
            }).catch(error => setErrorMessage(error.message))
            .finally(() => setIsLoading(false));
    }



    const useStyle = makeStyles({
        root: {
            background: 'url("https://image.freepik.com/free-vector/team-workers-producing-sneakers_1262-20692.jpg"),linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            backgroundBlendMode: 'overlay',

            backgroundPosition: 'center',
            backgroundSize: 'cover',




        }
    })
    const { root } = useStyle();
    return (
        <Box>
            <Navigation></Navigation>
            <Box className={root}>



                {
                    login ? <h5>Please Log In</h5> : <h5>Please Sign Up</h5>
                }
                <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>

                    {
                        !login && <> <input type="name" className="p-2 rounded-3 border-0" placeholder="Enter your name" {...register("name", { required: true })} /> <br />  {errors.email && <small className="text-danger m-0 p-0">This field is required</small>}<br /> </>
                    }

                    <input type="email" className=" p-2  rounded-3 border-0" placeholder="Enter your email" {...register("email", { required: true })} />

                    <br />
                    {errors.email && <small className="text-danger m-0 p-0">This field is required</small>}

                    <br />
                    <input type="password" className="bg-gray-200 p-2 w-80 rounded-3 border-0" placeholder="Enter Your password" {...register("password", { required: true })} />


                    <br />
                    {errors.password && <small className="text-danger">This field is required</small>}
                    <small className="text-danger">{errorMessage}</small>
                    <br />
                    {
                        login ? <input className="bg-info text-white px-5 py-2 w-80 rounded-3 border-0 btn" type="submit" value="Log In" /> : <input className="bg-info text-white px-5 py-2 rounded-3 border-0 btn" type="submit" value="Sign Up" />
                    }



                </form>
                {
                    login ? <small onClick={toggleLoginSignUp} className="text-primary link-button">Don't have an account?</small>
                        : <small onClick={toggleLoginSignUp} className=" text-primary link-button">Already have an account?</small>
                }
                <br />
                <small>or</small>
                <br />
                <Button onClick={handleGoogleLogin} variant="contained" className=" px-5 py-2 rounded-3 border-0 btn"><i class="fab fa-google"></i> Sign in with Google</Button>
            </Box>
            <Footer></Footer>

        </Box>
    );
};

export default LoginSignup;