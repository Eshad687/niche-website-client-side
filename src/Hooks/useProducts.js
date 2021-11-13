import axios from "axios";
import { useEffect, useState } from "react"
import useDelete from "./useDelete";

const useProducts = (page) => {
    const [products, setProducts] = useState([]);
    const { productDeleted, handleProductDelete } = useDelete()

    //GETTING PRODUTS DATA BASED ON PAGE
    useEffect(() => {
        axios.get(`https://intense-tundra-40830.herokuapp.com/products?page=${page}`)
            .then(res => setProducts(res.data))
    }, [productDeleted])

    return {
        products,
        handleProductDelete
    }
}
export default useProducts;