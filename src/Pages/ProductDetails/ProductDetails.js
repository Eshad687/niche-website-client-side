import { Container, Grid, TextField, Typography } from '@mui/material';


import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useProducts from '../../Hooks/useProducts';

import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ProductDetails = () => {
    const { products } = useProducts("productDetails")
    const { id } = useParams();

    const sneaker = products?.find(product => product._id === id);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => console.log(data)


    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ mt: 15 }}>
                <Grid container spacing={4} >
                    <Grid item xs={12} md={5}>
                        <img style={{ borderRadius: 10, width: '100%' }} src={sneaker?.img} alt="" />
                        <Typography variant="h4" sx={{ fontWeight: '500' }}>{sneaker?.name}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', my: 2 }}>{sneaker?.desc}</Typography>
                        <Typography variant="h5" sx={{ fontWeight: '500', color: 'rgb(219, 75, 50)' }}>Price: ${sneaker?.price}</Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <form style={{ textAlign: 'center', boxShadow: "1px 1px 2px", padding: "20px 0", borderRadius: '15px' }} className="py-3" onSubmit={handleSubmit(onSubmit)}>


                            <Typography variant="h4" sx={{ color: "rgb(219, 75, 50)", fontWeight: "500", mb: 3 }}>Fill Up the Form to Order</Typography>

                            <TextField
                                sx={{ width: '70%' }}
                                label="Name"
                                margin="dense"
                                id="outlined-size-small"

                                size="small"
                                {...register("name")} />

                            {errors.name && <small>This field is required</small>}
                            <TextField
                                sx={{ width: '70%' }}
                                label="Email"
                                margin="dense"
                                id="outlined-size-small"

                                size="small"
                                {...register("email")} />

                            {errors.email && <small>This field is required</small>}
                            <TextField
                                sx={{ width: '70%' }}
                                label="Phone"
                                margin="dense"
                                id="outlined-size-small"

                                size="small"
                                {...register("phone")} />

                            {errors.phone && <small>This field is required</small>}
                            <TextField
                                sx={{ width: '70%' }}
                                label="Product Name"
                                margin="dense"
                                id="outlined-size-small"

                                size="small"
                                {...register("productName")} />

                            {errors.productName && <small>This field is required</small>}


                            <TextField
                                sx={{ width: '70%' }}
                                label="Size"
                                margin="dense"
                                id="outlined-size-small"

                                size="small"
                                {...register("size")} />

                            {errors.size && <small>This field is required</small>}
                            <br />


                            <input style={{
                                background: 'linear-gradient(90deg,rgb(219, 75, 50),rgb(200, 25, 20))',
                                color: '#fff',
                                fontSize: 'large',
                                fontWeight: 500,
                                padding: '10px 0',
                                border: 0,
                                borderRadius: '5px',
                                width: '70%',

                                marginTop: '10px'
                            }} type="submit" />


                        </form>

                    </Grid>
                </Grid>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;