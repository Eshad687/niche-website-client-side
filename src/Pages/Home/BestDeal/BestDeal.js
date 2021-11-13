import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import React from 'react';
import dealimg from '../../../images/sneakers-removebg-preview.png'
import bgimg from '../../../images/Sneaker-Feature-.jpg'
import CustomButton from '../../../StyledComponents/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/system';

const BestDeal = () => {
    const useStyle = makeStyles({
        root: {
            background: `url(${bgimg})`,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backgroundBlendMode: 'darken, luminosity',
            backgroundPosition: 'center',
            backgroundSize: 'cover',




        }
    })

    const { root } = useStyle();
    return (


        <Box className={root} sx={{ height: { md: '80vh' } }} >

            <Container sx={{ my: 10 }}>
                <Typography sx={{ textAlign: 'center', fontWeight: '600', color: 'rgb(219, 75, 50)', py: 2 }} variant="h3">DEAL OF THE DAY</Typography>

                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={7} >
                        <Typography variant="h4" fontWeight="500" color="white">Nike Pro A2ED</Typography>
                        <Typography variant="h2" color="rgb(219, 75, 50)" fontWeight="600">25% OFF!!!!</Typography>
                        <Typography sx={{ my: 2 }} variant="h6" color="white">Grab Yours Pair Now Before The Offer Expires. Hurry UP! Hurry Up!</Typography>
                        <CustomButton variant="contained">Order Now <ArrowForwardIcon /></CustomButton>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ mt: 5 }}>
                        <img width="100%" src={dealimg} alt="" />
                    </Grid>

                </Grid>

            </Container>

        </Box >

    );
};

export default BestDeal;