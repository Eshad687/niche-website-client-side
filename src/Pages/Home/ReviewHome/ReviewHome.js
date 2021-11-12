import { Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const ReviewHome = ({ rvw }) => {
    const { name, review, rating } = rvw;
    return (
        <Grid item xs={12} md={4}>
            <Paper variant="elevation" sx={{ background: 'lightgray', textAlign: 'center', p: 2, minHeight: '180px' }}>
                <Typography sx={{ fontWeight: '500', color: 'black' }} variant="h4">{name}</Typography>
                <Typography sx={{ fontWeight: '500', color: 'rgb(219, 75, 50)' }} variant="body1">{review}</Typography>
                <Rating name="read-only" value={rating} readOnly />
            </Paper>
        </Grid>
    );
};

export default ReviewHome;