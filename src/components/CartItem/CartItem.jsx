import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div className="cart_item">
      <div className="cart_item_details">
        <div className="cart_item_image_container">
          <img
            className="cart_item_image"
            src={item.product.imageUrl}
            alt={item.product.title}
          />
        </div>
        <div className="cart_item_info">
          <Link to={`/products/${item.product.id}`} className="cart_item_title">
            {item.product.title}
          </Link>
          <p className="cart_item_quantity">Cantidad: {item.quantity}</p>
          <p className="cart_item_price">Precio: ${item.product.price}</p>
        </div>
        <div className="cart_item_buttons">
          <button
            className="cart_item_button"
            onClick={() => removeFromCart(item.product.id, 1)}
            type="button"
          >
            -
          </button>
          <button
            className="cart_item_button"
            onClick={() => addToCart(item.product, 1)}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}