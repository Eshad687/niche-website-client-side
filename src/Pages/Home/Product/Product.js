import { Button, Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import CustomButton from '../../../StyledComponents/CustomButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useHistory } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';

const Product = ({ product, handleProductDelete, children }) => {
    const { name, img, desc, price, _id } = product;
    const history = useHistory();
    const handlePurchaseNow = (id) => {
        history.push(`product/${id}`);
    }


    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {desc.slice(0, 50) + "..."}
                        </Typography>
                        <Typography variant="h6" color="rgb(219, 75, 50)">
                            Price: ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        children === "manage" ? <Button onClick={() => handleProductDelete(_id)} sx={{ background: 'red' }} variant="contained" size="small" >
                            Delete <DeleteIcon />
                        </Button> : <CustomButton onClick={() => handlePurchaseNow(_id)} variant="contained" size="small" >
                            Purchase <ArrowForwardIcon />
                        </CustomButton>
                    }

                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;