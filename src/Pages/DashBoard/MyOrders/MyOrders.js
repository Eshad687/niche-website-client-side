import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import useDelete from '../../../Hooks/useDelete';
import DeleteIcon from '@mui/icons-material/Delete';
const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    // GETTING DATA FROM CUSTOM HOOK
    const { isDeleted, handleDelete } = useDelete();

    // GETTING USERS BOOKING DATA FROM DATABASE
    useEffect(() => {
        axios.get(`https://intense-tundra-40830.herokuapp.com/orders/${user?.email}`)
            .then(res => setMyOrders(res.data))
    }, [isDeleted])


    return (
        <div>


            <Box>
                <Typography variant="h4" sx={{ color: "rgb(219, 75, 50)", fontWeight: "500", mb: 3, textAlign: 'center' }}>MY ORDERS</Typography>

                {/* USERS ORDERS DATA */}
                <Grid container spacing={2}>
                    {myOrders ?
                        myOrders.map(order => <Grid key={order._id} item xs={12} md={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={order.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {order.productName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Size: {order.size}
                                        </Typography>
                                        <Typography variant="h6" color="rgb(219, 75, 50)">
                                            Status: {order.status.toUpperCase()}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button onClick={() => handleDelete(order._id)} variant="contained" size="small" sx={{ background: 'red' }} >
                                        Delete <DeleteIcon />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>) : <Box sx={{ display: 'flex', m: '0 auto' }}>
                            <CircularProgress />

                        </Box>
                    }
                </Grid>

            </Box>

        </div>
    );
};


export default MyOrders;