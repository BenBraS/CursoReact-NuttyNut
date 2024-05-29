import "./CategoryList.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";



const MIS_RUTAS = [
  {
    path:"/category/nuecesysemillas", 
    label: "Nueces y Semillas",
    categoryId: "nuecesysemillas",
  }, 
  {
    path:"/category/frutossecos",
    label: "Frutos Secos",
    categoryId:"frutossecos",
  }, 
  {
    path:"/category/legumbressecas",
    label: "Legumbres Secas",
    categoryId:"legumbressecas",
  }, 
  {
    path:"/category/frutossecostostados",
    label: "Frutos Secos Tostados",
    categoryId:"frutossecostostados",
  }, 
  {
    path:"/category/mixfrutossecos",
    label: "Mix de Frutos Secos",
    categoryId:"mixfrutossecos",
  },
];

function CategoryList() {
  return (
    <nav>
      <ul className="category_list">
        {MIS_RUTAS.map((ruta) => (
          <li key={ruta.path}>
            <NavLink
              className={({isActive})=> (isActive ? "active_link" : "")}
              to={ruta.path}
            >
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}


export default CategoryList;