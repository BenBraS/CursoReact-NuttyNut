import { useContext } from "react";
import useCount from "../../hooks/useCount";
import ItemCount from "../Itemcount/ItemCount";
import "./ItemDetail.css";


export default function ItemDetail({ item }) {
  const { count, increment, decrement, reset } = useCount(0);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item, count);
    reset();
  };
  // cantidad de prodcuts en el carrito

  return (
    <div className="item_container">
      <div className="item_img_container">
        <img className="item_img" src={item.image} alt={item.title} />
      </div>
      <h2 className="item_title">{item.title}</h2>
      <p className="item_description">{item.description}</p>
      <p className="item_price">${item.price}</p>
      <div className="item_counter_container">
        <ItemCount
          stock={item.stock}
          count={count}
          increment={increment}
          decrement={decrement}
        />
      </div>

      <div className="item_cart_container">
        <button
          className="item_cart_button"
          onClick={handleAddToCart}
          disabled={count === 0}
        >
          Add to cart
        </button>
      </div>
      <p>
        Quedan <strong>{item.stock - count}</strong> unidades disponibles
      </p>
    </div>
  );
}