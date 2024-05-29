import React, { useState, useEffect } from "react";
import useProductsbyCategoryFireBase from "../../hooks/useProductsbyCategoryFireBase"

import ItemList from "../ItemList/ItemList"; 

function HomePage({categoryId}) {
const {products, isLoading}= useProductsbyCategoryFireBase(categoryId)

  return (
    <div>
      <h1>¡Bienvenidos/as a la mejor tienda de Frutos secos!</h1> 
      <ItemList products={products} /> 
    </div>
  );
}

export default HomePage;