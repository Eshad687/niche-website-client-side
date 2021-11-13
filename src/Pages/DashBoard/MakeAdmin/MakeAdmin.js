import { Alert, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import CustomButton from '../../../StyledComponents/CustomButton';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleBlur = e => {
        setAdminEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        e.preventDefault();

        const user = { adminEmail }

        // UPDATING ROLE OF AN USER TO ADMIN ON DATABASE
        axios.put(`https://intense-tundra-40830.herokuapp.com/users/admin`, user)
            .then(res => {
                if (res.data.modifiedCount) {
                    setSuccess(true);

                }
            })

    }
    return (
        <Box textAlign='center'>
            <Typography variant="h4" sx={{ color: 'rgb(219, 75, 50)' }}>Make An Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    type="email"
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    sx={{ width: '50%' }}
                    onBlur={handleBlur}
                />
                <br />
                <br />
                <CustomButton type="submit" sx={{}} variant="contained">
                    Make Admin
                </CustomButton>
            </form>
            {success && <Alert severity="success">This is a success alert — check it out!</Alert>}
        </Box>
    );
};

export default MakeAdmin;