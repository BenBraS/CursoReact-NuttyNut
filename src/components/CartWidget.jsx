import CartICon from "./CartIcon";
import { useState } from "react";

function CartWidget() {
    const [cartItems, setCartItems] =
    useState(4);
    
    
    
    
    return (
        <div className="cart_container">
            < CartICon width={40} height={40} />
            <span>{cartItems}</span>
        </div>
    );
}

export default CartWidget;
