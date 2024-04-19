import "./CategoryList.css"

function CategoryList() {
    return (
        <nav>
         <ul className="categorylist_contenedor">
            <li>
                <a href="/#">Nueces</a>
            </li>
            <li>
                <a href="/#">Almendras</a>
            </li>
            <li>
                <a href="/#">Maní</a>
            </li>
            <li>
                <a href="/#">Castañas</a>
            </li>
            <li>
                <a href="/#">Otracategoría</a>
            </li>

         </ul>
        </nav>
    );
}

export default CategoryList;