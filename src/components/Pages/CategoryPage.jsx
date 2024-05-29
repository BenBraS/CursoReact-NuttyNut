import React, { useState, useEffect } from "react";
import useProductsbyCategoryFireBase from "../../hooks/useProductsbyCategoryFireBase"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList"; 

function CategoryPage() {
  const {categoryId} = useParams();

   const {products, isLoading}= useProductsbyCategoryFireBase(categoryId)

  return (
    <div>
      <h2>Productos en la categoría: {categoryId}</h2>
      <ItemList products={products} /> 
      
    </div>
  );
}


export default CategoryPage;