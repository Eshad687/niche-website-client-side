import axios from "axios";
import { useState } from "react";

const useDelete = () => {
    const [isDeleted, setIsDeleted] = useState(false);
    const [productDeleted, setProductDeleted] = useState(false);


    // DELETING ORDERS DATA FROM DATABASE
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            axios.delete(`https://intense-tundra-40830.herokuapp.com/orders/${id}`)
                .then(res => {

                    if (res.data.deletedCount > 0) {

                        setIsDeleted(res.data.deletedCount);

                        alert('delete successfull')
                    }
                })
        }
    }

    // DELETING PRODUCTS DATA FROM DATABASE
    const handleProductDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            axios.delete(`https://intense-tundra-40830.herokuapp.com/products/${id}`)
                .then(res => {

                    if (res.data.deletedCount > 0) {

                        setProductDeleted(res.data.deletedCount);

                        alert('delete successfull')
                    }
                })
        }
    }
    return {
        isDeleted,
        productDeleted,
        handleDelete,
        handleProductDelete
    }

}
export default useDelete;
