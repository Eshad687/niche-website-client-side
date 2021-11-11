import axios from "axios";
import { useEffect, useState } from "react"

const useProducts = (page) => {
    const [products, setProducts] = useState([]);
    console.log(page)
    useEffect(() => {
        axios.get(`http://localhost:5000/products?page=${page}`)
            .then(res => setProducts(res.data))
    }, [])

    return {
        products
    }
}
export default useProducts;