import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import DraftsIcon from '@mui/icons-material/Drafts';
import BusinessIcon from '@mui/icons-material/Business';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CustomButton from '../../../StyledComponents/CustomButton';

const Footer = () => {
    const useStyle = makeStyles({
        root: {
            background: 'url("https://images.theconversation.com/files/303723/original/file-20191126-180279-gvmxgl.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C6989%2C4892&q=45&auto=format&w=926&fit=clip"),linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))',
            backgroundBlendMode: 'overlay',

            backgroundPosition: 'center',
            backgroundSize: 'cover',




        }
    })

    const { root } = useStyle();
    return (
        <div className={root} style={{ marginTop: "150px" }}>
            <Container >
                <Typography variant="h3" sx={{ color: "rgb(219, 75, 50)", fontWeight: '500', mb: 5 }}>
                    SNEAKERZ <br />
                    FREAKZ
                </Typography>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={3}>

                        <Typography variant="h5">
                            Contact us
                        </Typography>
                        <Box sx={{ width: '100%' }}>

                            <List>

                                <ListItem disablePadding >
                                    <ListItemButton >
                                        <ListItemIcon>
                                            <DraftsIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Email us at: Sneakerzfreakz@sneaker.com" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PhoneIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Call Us at:           
                                        +880984242587 +880984242588 +880984242589" />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <BusinessIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Office Address: 213/3A_Gulshan, Dhaka, Bangladesh " />
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                            </List>





                        </Box>

                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h5">
                            Blogs and Quick Links
                        </Typography>
                        <Box sx={{ width: '100%' }}>

                            <List>

                                <ListItem disablePadding >
                                    <ListItemButton>

                                        <ListItemText primary="New Stories" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Top stories" />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Writers" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Staffs" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Showrooms" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h5">
                            Brands
                        </Typography>
                        <Box sx={{ width: '100%' }}>

                            <List>

                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Nike" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Addidas" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Jordan" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Puma" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>

                                        <ListItemText primary="Gucci" />
                                    </ListItemButton>
                                </ListItem>

                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5">
                            Follow us on
                        </Typography>
                        <CustomButton sx={{ m: 1 }} variant="contained"> <FacebookIcon /></CustomButton>
                        <CustomButton sx={{ m: 1 }} variant="contained"> <TwitterIcon /></CustomButton>
                        <CustomButton sx={{ m: 1 }} variant="contained"> <InstagramIcon /></CustomButton>




                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default Footer;