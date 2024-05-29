import ItemList from "../ItemList/ItemList";
import useProductsbyCategoryFireBase from "../../hooks/useProductsbyCategoryFireBase";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const { categoryId } = useParams();
  const { products, isLoading } = useProductsbyCategoryFireBase(categoryId);

  if (isLoading) return <h1>Cargando...</h1>;

  if (products.length === 0)
    return <h1>Ups.. No tenemos productos para mostrarte.</h1>;

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;