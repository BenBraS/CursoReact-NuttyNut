import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../mock/asyncMock"; 
import ProductList from "../ItemList/ItemList"; 

function CategoryPage() {
  const { category } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByCategory(category).then((result) => {
      setProducts(result);
    });
  }, [category]);

  return (
    <div>
      <h2>Productos en la categoría: {category}</h2>
      <ProductList products={products} /> 
    </div>
  );
}

export default CategoryPage;