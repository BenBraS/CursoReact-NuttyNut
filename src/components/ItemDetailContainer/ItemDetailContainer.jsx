import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import useProductById from "../../hooks/useProductById.js";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const params = useParams();
  const { productId } = params;
  const { loading, product } = useProductById(productId);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div className="item_detail_container">
      <ItemDetail item={product} />
    </div>
  );
}