import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useProducts from '../../Hooks/useProducts';

import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
    const { products } = useProducts("explore");
    return (
        <>
            <Navigation></Navigation>
            <Container sx={{ my: 10 }} >
                <Typography sx={{ textAlign: 'center', fontWeight: '500', color: 'rgb(219, 75, 50)', mb: 3 }} variant="h5">OUR PRODUCTS</Typography>
                <Grid container spacing={2}>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default Explore;