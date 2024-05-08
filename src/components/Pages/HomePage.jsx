import React from "react";
import ItemList from "../ItemList/ItemList"; 
import useProducts from "../../hooks/useProducts"; 
import "../ItemList/Item.css"

function HomePage() {
  const { isLoading, products } = useProducts(); 

  if (isLoading) return <h1>Cargando...</h1>; 
  return (
    <div>
      <h1>¡Bienvenidos/as a la mejor tienda de Frutos secos!</h1> 
      <ItemList products={products} /> 
    </div>
  );
}

export default HomePage;