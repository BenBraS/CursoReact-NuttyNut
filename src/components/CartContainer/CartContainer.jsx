import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import "./CartContainer.css";

export default function CartContainer() {
    const { cart, clearCart, cartTotal } = useContext(CartContext);
  
    return (
      <div className="cart-container">
        <h2>Mi Carrito</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <h1>No hay productos en el carrito</h1>
          ) : (
            cart.map((item) => {
              return <CartItem key={item.product.id} item={item} />;
            })
          )}
        </div>
        <h3 className="cart-total">Total: ${cartTotal}</h3>
        <button className="clear-cart-button" onClick={clearCart}>
          Limpiar carrito
        </button>
      </div>
    );
  }