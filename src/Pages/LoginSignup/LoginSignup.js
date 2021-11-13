

import { Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

import axios from 'axios';

const LoginSignup = () => {
    const { createUser, signInWithEmailPassword, setErrorMessage, updateName, setIsLoading, errorMessage } = useAuth();

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

                    saveUser(data.email, data.name);
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



    // SAVING USERS TO DATABASE
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        console.log(user)
        axios.post('https://intense-tundra-40830.herokuapp.com/users', user)
            .then(res => console.log(res.data))
    }

    const useStyle = makeStyles({
        root: {
            background: 'url("https://image.freepik.com/free-vector/team-workers-producing-sneakers_1262-20692.jpg"),linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            backgroundBlendMode: 'overlay',

            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '80vh'




        },
        btn: {
            background: 'linear-gradient(90deg,rgb(219, 75, 50),rgb(200, 25, 20))',
            color: '#fff',
            fontSize: 'large',
            fontWeight: 500,
            padding: '10px 0',
            border: 0,
            borderRadius: '5px',
            width: '30%',

            marginTop: '10px'




        }
    })
    const { root, btn } = useStyle();
    return (
        <Box>
            <Navigation></Navigation>
            <Box className={root} sx={{ textAlign: 'center' }}>



                {
                    login ? <Typography sx={{ pt: 15, color: "rgb(219, 75, 50)", fontWeight: "500", mb: 3 }} variant="h5">Please Log In</Typography> : <Typography sx={{ pt: 15, color: "rgb(219, 75, 50)", fontWeight: "500", mb: 3 }} variant="h5">Please Sign Up</Typography>
                }
                <form onSubmit={handleSubmit(onSubmit)}>

                    {
                        !login && <> <TextField
                            type="name"
                            sx={{ width: '30%' }}
                            label="Name"

                            id="outlined-size-small"

                            size="small"
                            {...register("name", { required: true })} /> <br />  {errors.name && <small >This field is required</small>} <br /></>
                    }

                    <TextField
                        type="email"
                        sx={{ width: '30%' }}
                        label="Email"

                        id="outlined-size-small"

                        size="small" {...register("email", { required: true })} />

                    <br />
                    {errors.email && <small >This field is required</small>}
                    <br />

                    <TextField
                        type="password"
                        sx={{ width: '30%' }}
                        label="Password"

                        id="outlined-size-small"

                        size="small" {...register("password", { required: true })} />


                    <br />
                    {errors.password && <small >This field is required</small>}
                    <small >{errorMessage}</small>
                    <br />
                    {
                        login ? <input className={btn} type="submit" value="Log In" /> : <input className={btn} type="submit" value="Sign Up" />
                    }



                </form>
                {
                    login ? <Button size="small" variant="text" sx={{ color: "rgb(219, 75, 50)" }} onClick={toggleLoginSignUp} >Don't have an account?</Button>
                        : <Button size="small" variant="text" sx={{ color: "rgb(219, 75, 50)" }} onClick={toggleLoginSignUp} >Already have an account?</Button>
                }

            </Box>
            <Footer></Footer>

        </Box>
    );
};

export default LoginSignup;