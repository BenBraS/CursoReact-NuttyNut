import useCount from "../../hooks/useCount";
import "./Item.css"
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { count, increment, decrement } = useCount(0);

  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
  };

  return (
    <div className="item_container">
      <div className="item_img_container">
        <img className="item_img" src={item.image} alt={item.title} />
      </div>
      <h2 className="item_title">{item.title}</h2>
      <p className="item_description">{item.description}</p>
      <p className="item_price">${item.price}</p>
      <div className="item_counter_container">
      <Link to={`/products/${item.id}`} className="item_cart_button">Ver detalles</Link> 
      
      </div>
    </div>
  );
}

