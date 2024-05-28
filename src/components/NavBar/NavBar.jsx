
import { useContext, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css";
import CartContext from "../contexts/CartContext";
import { useMediaQuery } from "react-responsive";

function NavBar(){
    const { cart } = useContext(CartContext);
    const calculateQuantity = cart.reduce((acc, item)=> acc + item.quantity, 0);

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar si el menú está abierto

    const isMobile = useMediaQuery({ maxWidth: 767 }); // Define el tamaño máximo para considerar como "móvil"

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Cambiar el estado del menú
    };

    return (
        <div className="navbar_container">
            <div className="nav_left">
                {isMobile ? (
                    <div className="mobile_menu_container">
                        <button className="hamburger_menu_button" onClick={handleMenuToggle}>
                            &#9776;
                        </button>
                        {isMenuOpen && <CategoryList />}
                    </div>
                ) : (
                    <CategoryList />
                )}
            </div>
            <div className={`${cart.length === 0 ? "hidden" : ""}`}>
                <CartWidget cartCount={calculateQuantity} />
            </div>
        </div>
    )
}
export default NavBar;