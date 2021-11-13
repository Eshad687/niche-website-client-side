import React from 'react';
import { Rating, TextField, Typography } from '@mui/material';

import { Box } from '@mui/system';

import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import CustomButton from '../../../StyledComponents/CustomButton';
import axios from 'axios';

const Review = () => {
    const [value, setValue] = React.useState(2);
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        data.rating = value;

        // POSTING REVIEWS ON DATABASE
        axios.post('https://intense-tundra-40830.herokuapp.com/reviews', data)
            .then(res => {
                console.log(res.data.insertedId)
                if (res.data.insertedId) {
                    reset();
                    alert('Review posted Successfully')

                }
            })
    }


    return (
        <Box>
            <form style={{ textAlign: 'center', boxShadow: "1px 1px 2px", padding: "20px 0", borderRadius: '15px' }} className="py-3" onSubmit={handleSubmit(onSubmit)}>


                <Typography variant="h4" sx={{ color: "rgb(219, 75, 50)", fontWeight: "500", mb: 3 }}>Give Us A Review</Typography>

                <TextField

                    sx={{ width: '60%' }}
                    label="Name"
                    margin="dense"
                    id="outlined-size-small"
                    value={user?.displayName}

                    {...register("name")} />


                <TextField

                    sx={{ width: '60%' }}
                    label="Email"
                    margin="dense"
                    id="outlined-size-small"
                    value={user?.email}

                    {...register("email")} />

                <br />
                <textarea rows="10" placeholder="Your Comment" style={{ marginTop: 5, width: '60%', paddingLeft: 10, paddingTop: 10, borderRadius: 5, outline: 'none', borderColor: 'lightgray' }} {...register("review", { required: true })} />
                <br />
                {errors.review && <small >This field is required</small>}
                <br />

                <Typography variant="h6" sx={{ color: "rgb(219, 75, 50)", fontWeight: "500" }}>Rate Us</Typography>


                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />


                <br />


                <CustomButton sx={{ width: '60%' }} type="submit" variant="contained">Submit</CustomButton>


            </form>
        </Box>
    );
};

export default Review;