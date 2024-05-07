import { useState } from "react";
import CartICon from "../CartIcon/CartIcon";


function CartWidget() {
    const [cartItems, setCartItems] = useState(3);
    
    
    
    
    return (
        <div className="cart_container">
            < CartICon ancho={40} alto={50} />
            <span>{cartItems}</span>
        </div>
    );
}

export default CartWidget;
