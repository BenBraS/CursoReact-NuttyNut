import "./CategoryList.css"
import { Link } from "react-router-dom";
function CategoryList() {
    return (
        <nav>
         <ul className="categorylist_contenedor">
            <li>
            <Link to ={"/nueces"}>Nueces</Link>
            </li>
            <li>
            <Link to ={"/almendras"}>Almendras</Link>
            </li>
            <li>
            <Link to ={"/mani"}>Mani</Link>
            </li>
            <li>
            <Link to ={"/castanhas"}>Castañas</Link>
            </li>
            <li>
            <Link to ={"/avellanas"}>Avellanas</Link>
            </li>
            <li>
                <a href="/#">Todos</a>
            </li>

         </ul>
        </nav>
    );
}

export default CategoryList;