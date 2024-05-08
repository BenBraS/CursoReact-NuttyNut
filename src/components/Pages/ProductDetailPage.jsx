import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/asyncMock';
import ItemCount from '../Itemcount/ItemCount';
import "../ItemList/Item.css";
import "../Itemcount/ItemCount.css";

const ProductDetailPage = () => {
  const { id } = useParams();  URL
  const productId = parseInt(id); 
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getProductById(productId).then((data) => {
      setProduct(data); 
    });
  }, [productId]);

  
  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item_container">
      <div className="item_img_container">
        <img className="item_img" src={product.image} alt={product.title} /> {/* Usar `product`, no `item` */}
      </div>
      <h2 className="item_title">{product.title}</h2>
      <p className="item_description">{product.description}</p>
      <p className="item_price">${product.price}</p>

      <div className="item_counter_container">
        <ItemCount
          stock={product.stock} 
          count={count}
          increment={() => setCount(count + 1)} 
          decrement={() => count > 1 && setCount(count - 1)}
        />
      </div>
      
      <div className="item_cart_container">
        <button
          className="item_cart_button"
          onClick={() => console.log(`Producto añadido al carrito: ${product.title}, Cantidad: ${count}`)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;