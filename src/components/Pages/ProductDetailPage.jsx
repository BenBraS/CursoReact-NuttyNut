import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/asyncMock';
import ItemCount from '../Itemcount/ItemCount';
import "../ItemList/Item.css";
import "../Itemcount/ItemCount.css";
import CartContext from '../contexts/CartContext';
import useCount from '../../hooks/useCount';

const ProductDetailPage = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();  URL
  const productId = parseInt(id); 
  const [product, setProduct] = useState(null);
  const { count, increment, decrement, reset } = useCount(0);

  
  const handleAddToCart = () => {
    addToCart(product, count);
    reset();
  };

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
        <img className="item_img" src={product.image} alt={product.title} /> 
      </div>
      <h2 className="item_title">{product.title}</h2>
      <p className="item_description">{product.description}</p>
      <p className="item_price">${product.price}</p>

      <div className="item_counter_container">
        <ItemCount
          stock={product.stock} 
          count={count}
          increment={increment} 
          decrement={decrement}
        />
      </div>
      
      <div className="item_cart_container">
        <button
          className="item_cart_button"
          onClick={handleAddToCart}
          disabled={count === 0}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;