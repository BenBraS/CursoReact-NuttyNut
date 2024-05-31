
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import "./CartWidget.css"

function CartWidget() {
  const { cart } = useContext(CartContext);

  const calculateQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link to={"/cart"} className="link_cart_conntainer">
      <div className="cart-widget-conntainer">
        <CartIcon ancho={50} height={50} />
        <span className="cart-quantity">
          {calculateQuantity}
        </span>
      </div>
    </Link>
  );
}
export default CartWidget;