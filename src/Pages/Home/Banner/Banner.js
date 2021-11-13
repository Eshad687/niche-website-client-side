import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CustomButton from '../../../StyledComponents/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {

    // CAROUSEL DATA
    const items = [
        {
            name: 'Cool Sneakers for Cool People',
            description: 'We bring you the cooles sneakers there is from different world class brands. Make your lifestyle way more cooler with our coolest sneakers. ',
            img: 'https://i.ibb.co/3WPcxws/Capture.png',

        },
        {
            name: 'Choose From a Huge Collection',
            description: 'From Nike to Jordan, from Addidas to Puma, we have a huge collection from different brands. Choose yours now.',
            img: 'https://i.ibb.co/LrqJ0C2/Capture2.png',

        },
        {
            name: 'Trendy Luxurious Sneackers',
            description: 'From luxurios brands of the world we fulfill your wish and bring the most original and luxurious shoes.',
            img: 'https://i.ibb.co/4WyW3bG/Capture3.png',

        },
    ];
    return (
        <Carousel >
            {items.map((item, i) => {
                const bannerBg = {
                    background: `url(${item.img}),linear-gradient(rgba(0,0,0, 0.9),rgba(0, 0, 0, 0.9))`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'overlay',


                }

                return (

                    <Box key={i} style={bannerBg} sx={{ color: '#fff', mt: 7, minHeight: { xs: '200px', md: '550px' } }}>
                        <Container style={{ display: 'flex', alignItems: 'center' }} >
                            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                <Grid style={{ textAlign: 'left' }} item sm={12} md={6} >
                                    <Box>
                                        <Typography variant="h4">{item.name} </Typography>
                                        <Typography sx={{ my: 3 }} variant="body1">{item.description} </Typography>
                                        <CustomButton variant="contained">Know More <ArrowForwardIcon /></CustomButton>
                                    </Box>
                                </Grid>
                                <Grid sx={{ mt: 8 }} item sm={12} md={6} >
                                    <img style={{ borderRadius: '' }} width="100%" height="300px" src={item.img} alt="" />
                                </Grid>
                            </Grid>

                        </Container>

                    </Box>
                )
            })}
        </Carousel >
    );
};

export default Banner;