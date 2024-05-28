import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";
export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div className="cart-item">
    <div className="cart-item-details">
      <div className="cart-item-image-container">
        <img
          className="cart-item-image"
          src={item.product.image}
          alt={item.product.title}
        />
      </div>
      <div className="cart-item-info">
      <Link to={`/products/${item.product.id}`} className="cart-item-title">
            {item.product.title}
          </Link>
        <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
        <p className="cart-item-price">Precio: ${item.product.price}</p>
      </div>
      <div className="cart-item-buttons">
        <button
          className="cart-item-button"
          onClick={() => removeFromCart(item.product.id, 1)}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => addToCart(item.product, 1)}
        >
          +
        </button>
      </div>
    </div>
  </div>
);
}