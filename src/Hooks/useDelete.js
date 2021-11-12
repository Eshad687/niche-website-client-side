import axios from "axios";
import { useState } from "react";

const useDelete = () => {
    const [isDeleted, setIsDeleted] = useState(false);
    const [productDeleted, setProductDeleted] = useState(false);


    // DELETING DATA FROM DATABASE
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            axios.delete(`http://localhost:5000/orders/${id}`)
                .then(res => {

                    if (res.data.deletedCount > 0) {

                        setIsDeleted(res.data.deletedCount);

                        alert('delete successfull')
                    }
                })
        }
    }

    // DELETING DATA FROM DATABASE
    const handleProductDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            axios.delete(`http://localhost:5000/products/${id}`)
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
