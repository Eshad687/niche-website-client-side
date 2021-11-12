import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useDelete from '../../../Hooks/useDelete';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';



const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    const [isApproved, setIsApproved] = useState(false);

    // GETTING DATA FROM CUSTOM HOOK
    const { isDeleted, handleDelete } = useDelete();

    // GETTING BOOKING DATA FROM THE DATABASE
    useEffect(() => {
        axios.get('http://localhost:5000/orders')
            .then(res => setOrders(res.data))
    }, [isApproved, isDeleted])

    // UPDATING STATUS OF THE DATA IN THE DATABASE
    const handleApprove = (id) => {
        axios.put(`http://localhost:5000/orders/${id}`, { status: "approved" })
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    setIsApproved(true)
                    alert('booking is approved');

                }
            })

    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow >
                            <TableCell>Product</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell  >Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map(order => <TableRow key={order._id}>
                                <TableCell>{order.productName}</TableCell>
                                <TableCell >{order.name}</TableCell>
                                <TableCell >{order.email}</TableCell>
                                <TableCell >{order.status}</TableCell>
                                <TableCell ><Button onClick={() => handleApprove(order._id)} variant="text" size="small" sx={{ color: 'green' }} >
                                    Approve
                                </Button>
                                    <Button onClick={() => handleDelete(order._id)} variant="text" size="small" sx={{ color: 'red' }} >
                                        Delete
                                    </Button>

                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
};

export default ManageOrders;