import { TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        // SAVING PRODUCTS DATA ON DATABASE
        axios.post('https://intense-tundra-40830.herokuapp.com/products', data)
            .then(res => {
                console.log(res.data.insertedId)
                if (res.data.insertedId) {
                    reset();
                    alert('Product added successfully')

                }
            })
    }


    const useStyle = makeStyles({
        root: {
            background: 'linear-gradient(90deg,rgb(219, 75, 50),rgb(200, 25, 20))',
            color: '#fff',
            fontSize: 'large',
            fontWeight: 500,
            padding: '10px 0',
            border: 0,
            borderRadius: '5px',
            width: '60%',

            marginTop: '10px'




        }
    })
    const { root } = useStyle();

    return (
        <Box>
            {/* PRODUCT ADDING FORM */}
            <form style={{ textAlign: 'center', boxShadow: "1px 1px 2px", padding: "20px 0", borderRadius: '15px' }} className="py-3" onSubmit={handleSubmit(onSubmit)}>


                <Typography variant="h4" sx={{ color: "rgb(219, 75, 50)", fontWeight: "500", mb: 3 }}>Add a Product</Typography>

                <TextField

                    sx={{ width: '60%' }}
                    label="Product Name"

                    id="outlined-size-small"


                    {...register("name", { required: true })} />

                <br />
                {errors.name && <small >This field is required</small>}
                <br />
                <TextField

                    sx={{ width: '60%' }}
                    label="Image"

                    id="outlined-size-small"


                    {...register("img", { required: true })} />
                <br />
                {errors.img && <small >This field is required</small>}
                <br />
                <textarea rows="10" placeholder="Description" style={{ marginTop: 5, width: '60%', paddingLeft: 10, paddingTop: 10, borderRadius: 5, outline: 'none', borderColor: 'lightgray' }} {...register("desc", { required: true })} />
                <br />
                {errors.desc && <small >This field is required</small>}
                <br />
                <TextField

                    sx={{ width: '60%' }}
                    label="Price"

                    id="outlined-size-small"
                    type="number"


                    {...register("price", { required: true })} />

                <br />
                {errors.price && <small >This field is required</small>}
                <br />






                <input className={root} type="submit" />


            </form>
        </Box>
    );
};

export default AddProduct;