import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import CustomButton from '../../../StyledComponents/CustomButton';
import ManageOrders from '../ManageOrders/ManageOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import ClientRoute from '../../ClientRoute/ClientRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth()
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar >

                <Link style={{ textDecoration: 'none' }} to="/home">
                    <Typography variant="h5" sx={{ color: 'rgb(219, 75, 50)', fontWeight: 600 }}>
                        SNEAKERZ <br />
                        FREAKZ
                    </Typography>
                </Link>

            </Toolbar>
            <Divider />
            <List>
                {
                    !admin && <Box>

                        <Button  > <Link style={{ textDecoration: "none", color: "#000" }} to={`${url}/myOrders`}>
                            <ListItem >
                                <ListItemIcon>
                                    <LocalMallIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Orders" />
                            </ListItem>
                        </Link> </Button>
                        <Button  > <Link style={{ textDecoration: "none", color: "#000" }} to={`${url}/payment`}>
                            <ListItem >
                                <ListItemIcon>
                                    <PaymentIcon />
                                </ListItemIcon>
                                <ListItemText primary="Payment" />
                            </ListItem>
                        </Link> </Button>
                        <Button  > <Link style={{ textDecoration: "none", color: "#000" }} to={`${url}/review`}>
                            <ListItem >
                                <ListItemIcon>
                                    <RateReviewIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Review" />
                            </ListItem>
                        </Link> </Button>
                    </Box>
                }
                {
                    admin && <Box>
                        <Button  > <Link style={{ textDecoration: "none", color: "#000" }} to={`${url}/manageOrders`}>
                            <ListItem >
                                <ListItemIcon>
                                    <ShoppingBasketIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage All Orders" />
                            </ListItem>
                        </Link> </Button>
                        <Button  > <Link style={{ textDecoration: "none", color: "#000" }} to={`${url}/makeAdmin`}>
                            <ListItem >
                                <ListItemIcon>
                                    <PersonAddAlt1Icon />
                                </ListItemIcon>
                                <ListItemText primary="Make An Admin" />
                            </ListItem>
                        </Link> </Button>
                        <Button  > <Link style={{ textDecoration: "none", color: "#000" }} to={`${url}/addProduct`}>
                            <ListItem >
                                <ListItemIcon>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Product" />
                            </ListItem>
                        </Link> </Button>
                        <Button  > <Link style={{ textDecoration: "none", color: "#000" }} to={`${url}/manageProducts`}>
                            <ListItem >
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary="Manage Products" />
                            </ListItem>
                        </Link> </Button>
                    </Box>
                }
                <Divider />
                <ListItem>
                    <CustomButton onClick={logOut} variant="contained">Log out</CustomButton>
                </ListItem>
            </List>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: 'rgb(219, 75, 50)'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        {
                            admin ? <Typography variant="h4" sx={{ color: 'rgb(219, 75, 50)', textAlign: 'center' }}>YOU ARE AN ADMIN.</Typography> : <Typography variant="h4" sx={{ color: 'rgb(219, 75, 50)', textAlign: 'center' }}>YOU ARE AN USER.</Typography>
                        }
                    </Route>
                    <ClientRoute path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </ClientRoute>
                    <ClientRoute path={`${path}/payment`}>
                        <Payment></Payment>
                    </ClientRoute>
                    <ClientRoute path={`${path}/review`}>
                        <Review></Review>
                    </ClientRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
