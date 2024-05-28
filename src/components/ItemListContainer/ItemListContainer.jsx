import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ Greetings }) {
  const { category } = useParams();

  const { isLoading, products } = useProducts(category);

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div>
      <h1>{Greetings}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;