import "./CategoryList.css"
import { Link } from "react-router-dom";
function CategoryList() {
  return (
    <nav>
      <ul className="categorylist_contenedor">
        <li>
          <Link to="/category/nueces">Nueces</Link> 
        </li>
        <li>
          <Link to="/category/almendras">Almendras</Link> 
        </li>
        <li>
          <Link to="/category/mani">Maní</Link> 
        </li>
        <li>
          <Link to="/category/castanhas">Castañas</Link> 
        </li>
        <li>
          <Link to="/category/avellanas">Avellanas</Link> 
        </li>
        <li>
          <Link to= "/">Todos</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default CategoryList;