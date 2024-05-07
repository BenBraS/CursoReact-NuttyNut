
import ItemList from "../ItemList/ItemList"
import useProducts from "../../hooks/useProducts";

function ItemListContainer({Greetings}){
    const { isLoading, products} = useProducts();

if (isLoading) return <h1>Cargando...</h1>;

 return (
    <div>
<h1>{Greetings}</h1>
<ItemList products={products} />

    </div>
);
}



export default ItemListContainer;