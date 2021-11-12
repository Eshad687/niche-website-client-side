import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useAuth from '../../Hooks/useAuth';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {

    // solving page reload getting back to login page
    const { user, isLoading } = useAuth();
    // console.log(isLoading)
    if (isLoading) {

        return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>

    }
    return (
        // setting up private route
        <Route

            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/loginsignup",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;