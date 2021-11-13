import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewHome from '../ReviewHome/ReviewHome';


const ReviewsHome = () => {
    const [reviews, setReviews] = useState([]);

    // GETTING REVIEWS FROM DATABASE
    useEffect(() => {
        axios.get('https://intense-tundra-40830.herokuapp.com/reviews')
            .then(res => setReviews(res.data))
    }, [])

    return (
        <Box sx={{ background: '#e0115f' }}>
            <Container sx={{ my: 10, pb: 10, pt: 2 }}>
                <Typography sx={{ textAlign: 'center', fontWeight: '500', color: '#fff' }} variant="h4">Customer Reviews</Typography>
                <Typography sx={{ textAlign: 'center', fontWeight: '500', color: 'black', mb: 3 }} variant="h3">What The Customers Say About Us</Typography>
                <Grid container spacing={2}>
                    {
                        reviews ?
                            reviews.map(rvw => <ReviewHome
                                key={rvw._id}
                                rvw={rvw}
                            ></ReviewHome>) : <Box sx={{ display: 'flex', m: '0 auto' }}>
                                <CircularProgress />

                            </Box>
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ReviewsHome;