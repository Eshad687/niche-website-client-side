import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from '../../Home/Product/Product';

const ManageProducts = () => {
    const { products, handleProductDelete } = useProducts("dashboard");
    return (
        <Box  >
            <Typography sx={{ textAlign: 'center', fontWeight: '500', color: 'rgb(219, 75, 50)', mb: 3 }} variant="h5">Manage Products</Typography>
            <Grid container spacing={2}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleProductDelete={handleProductDelete}
                    >{"manage"}</Product>)
                }
            </Grid>

        </Box>
    );
};

export default ManageProducts;