import { CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

import axios from 'axios';


import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useProducts from '../../Hooks/useProducts';
import CustomButton from '../../StyledComponents/CustomButton';

import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ProductDetails = () => {
    const { products } = useProducts("productDetails")
    const { user } = useAuth()
    const { id } = useParams();

    const sneaker = products?.find(product => product._id === id);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        data.status = "pending";
        data.img = sneaker?.img;
        axios.post('https://intense-tundra-40830.herokuapp.com/orders', data)
            .then(res => {
                console.log(res.data.insertedId)
                if (res.data.insertedId) {
                    reset();
                    alert('Booking is pending')

                }
            })
    }




    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ mt: 15 }}>
                <Grid container spacing={4} >
                    {sneaker ?
                        <Grid item xs={12} md={5}>
                            <img style={{ borderRadius: 10, width: '100%' }} src={sneaker?.img} alt="" />
                            <Typography variant="h4" sx={{ fontWeight: '500' }}>{sneaker?.name}</Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', my: 2 }}>{sneaker?.desc}</Typography>
                            <Typography variant="h5" sx={{ fontWeight: '500', color: 'rgb(219, 75, 50)' }}>Price: ${sneaker?.price}</Typography>
                        </Grid> : <Box sx={{ display: 'flex', m: '0 auto' }}>
                            <CircularProgress />

                        </Box>
                    }
                    <Grid item xs={12} md={7}>
                        <form style={{ textAlign: 'center', boxShadow: "1px 1px 2px", padding: "20px 0", borderRadius: '15px' }} className="py-3" onSubmit={handleSubmit(onSubmit)}>


                            <Typography variant="h4" sx={{ color: "rgb(219, 75, 50)", fontWeight: "500", mb: 3 }}>Fill Up the Form to Order</Typography>

                            <TextField

                                sx={{ width: '70%' }}
                                label="Name"
                                margin="dense"
                                id="outlined-size-small"
                                value={user?.displayName}
                                size="small"
                                {...register("name")} />


                            <TextField

                                sx={{ width: '70%' }}
                                label="Email"
                                margin="dense"
                                id="outlined-size-small"
                                value={user?.email}
                                size="small"
                                {...register("email")} />


                            <TextField
                                sx={{ width: '70%' }}
                                label="Phone"
                                margin="dense"
                                id="outlined-size-small"

                                size="small"
                                {...register("phone")} />
                            <TextField
                                sx={{ width: '70%' }}
                                label="Address"
                                margin="dense"
                                id="outlined-size-small"

                                size="small"
                                {...register("address")} />

                            {
                                sneaker?.name && <TextField

                                    sx={{ width: '70%' }}
                                    label="Product Name"
                                    margin="dense"
                                    id="outlined-size-small"
                                    value={sneaker.name}
                                    size="small"
                                    {...register("productName")} />

                            }


                            <TextField
                                sx={{ width: '70%' }}
                                label="Size"
                                margin="dense"
                                id="outlined-size-small"

                                size="small"
                                {...register("size", { required: true })} />

                            <br />
                            {errors.size && <small >This field is required</small>}


                            <br />


                            <CustomButton sx={{ width: '70%' }} type="submit" variant="contained">Submit</CustomButton>


                        </form>

                    </Grid>
                </Grid>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;