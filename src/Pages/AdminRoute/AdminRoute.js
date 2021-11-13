import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useAuth from '../../Hooks/useAuth';
import { Redirect, Route } from 'react-router';

const AdminRoute = ({ children, ...rest }) => {

    // solving page reload getting back to login page
    const { user, isLoading, admin } = useAuth();

    if (!admin || isLoading) {

        return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>

    }
    return (
        // setting up admin route
        <Route

            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;