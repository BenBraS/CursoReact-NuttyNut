import {useEffect, useState} from "react";
import { getProducts, getProductByCategory } from "../components/mock/asyncMock";



export default function useProducts (category){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setIsLoading(true);
    if(category){
        getProductByCategory(category)
        .then((data) => setProducts(data))
        .finally (() => setIsLoading(false));
    } 
    else{
        getProducts()
        .then((data) => setProducts(data))
            .finally (() => setIsLoading(false));
}
}, [category]);

return {products, isLoading}; 
}

