import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import CustomButton from '../../../StyledComponents/CustomButton';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const Navigation = () => {
    // getting data from authentication context api
    const { user, logOut, setErrorMessage } = useAuth();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };



    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            {/* FOR SMALL DEVICES */}
            <MenuItem>
                <Button  > <NavLink style={{ textDecoration: "none", color: "grey" }} to="/home">Home</NavLink> </Button>


            </MenuItem>
            <MenuItem>
                <Button  > <NavLink style={{ textDecoration: "none", color: "grey" }} to="/explore">Explore</NavLink> </Button>

            </MenuItem>

            {user?.email && <MenuItem>
                <Button  > <NavLink style={{ textDecoration: "none", color: "grey" }} to="/dashboard">Dashboard</NavLink> </Button>

            </MenuItem>}
            {user?.email && <MenuItem> <Typography variant="h6"> {user.displayName}</Typography></MenuItem>}
            {
                user.email ? <MenuItem >
                    <CustomButton onClick={logOut} variant="contained" > Logout <LogoutIcon sx={{ ml: 1 }} /></CustomButton>
                </MenuItem> : <MenuItem >
                    <Button onClick={() => setErrorMessage('')} > <NavLink style={{ textDecoration: "none", color: "grey" }} to="/loginsignup">Login <LoginIcon sx={{ verticalAlign: 'middle' }} /></NavLink> </Button>
                </MenuItem>
            }
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ position: 'fixed' }} sx={{ background: 'rgb(219, 75, 50)' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        SNEAKERZ
                        FREAKZ
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button  > <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/home">Home</NavLink> </Button>
                        <Button  > <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/explore">Explore</NavLink> </Button>

                        {user?.email && <Button  > <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/dashboard">Dashboard</NavLink> </Button>}
                        {user?.email && <Typography variant="h6" sx={{ mx: 1 }}> {user.displayName}</Typography>}
                        {
                            user.email ?
                                <CustomButton onClick={logOut} variant="contained" > Logout <LogoutIcon sx={{ ml: 1 }} /></CustomButton>
                                :
                                <Button onClick={() => setErrorMessage('')}> <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/loginsignup">Login <LoginIcon sx={{ verticalAlign: 'middle' }} /></NavLink> </Button>

                        }


                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}

        </Box>
    );
};

export default Navigation;