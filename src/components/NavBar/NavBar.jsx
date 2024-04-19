
import CartWidget from "../CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css";

function NavBar(){
    return (
        <div className="navbar_container">
            <CategoryList />
            <CartWidget />
        </div>
    )
}

export default NavBar; 