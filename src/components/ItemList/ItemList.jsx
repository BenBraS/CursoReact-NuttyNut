import Item from "./Item";
import "./Item.css";

export default function ItemList({ products }) {
 
  if (!Array.isArray(products)) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div className="item_list_container">
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
}