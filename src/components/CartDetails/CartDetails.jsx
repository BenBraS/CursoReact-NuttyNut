import CartItem from "../CartItem/CartItem";
import "./CartDetails.css";
export default function CartDetails({ cart, cartTotal }) {
  return (
    <>
      <div className="cart_details_container">
        {cart.length === 0 ? (
          <h1>No hay productos en el carrito</h1>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        )}
      </div>
      <h3 className="cart_total">Total: ${cartTotal}</h3>
    </>
  );
}