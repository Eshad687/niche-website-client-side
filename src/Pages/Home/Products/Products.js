import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';
const Products = () => {
    const { products } = useProducts("home");
    return (
        <Container sx={{ my: 10 }} >
            <Typography sx={{ textAlign: 'center', fontWeight: '500', color: 'rgb(219, 75, 50)', mb: 3 }} variant="h5">OUR PRODUCTS</Typography>
            <Grid container spacing={2} sx={{ m: '0 auto' }}>
                {
                    products ?
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>) : <Box sx={{ display: 'flex', m: '0 auto' }}>
                            <CircularProgress />

                        </Box>
                }
            </Grid>

        </Container>
    );
};

export default Products;