import axios from "axios";
import { useEffect, useState } from "react"
import useDelete from "./useDelete";

const useProducts = (page) => {
    const [products, setProducts] = useState([]);
    const { productDeleted, handleProductDelete } = useDelete()
    console.log(productDeleted);
    useEffect(() => {
        axios.get(`http://localhost:5000/products?page=${page}`)
            .then(res => setProducts(res.data))
    }, [productDeleted])

    return {
        products,
        handleProductDelete
    }
}
export default useProducts;