import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import CartDetails from "../CartDetails/CartDetails";
import useBuyer from "../../hooks/useBuyer";
import "./CheckoutContainer.css";

export default function CheckoutContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  const { buyer, handleInputChange } = useBuyer();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      cart,
      cartTotal,
    };

    const db = getFirestore();
    // Verificar Stock
    for (const itemInCart of cart) {
      const productRef = doc(db, "products", itemInCart.product.id);
      const product = await getDoc(productRef);
      const productData = product.data();
      if (productData.stock < itemInCart.quantity) {
        alert(`No hay stock suficiente para el producto ${productData.title}`);
        // Si no hay Stock, no se realiza la compra
        return;
      }
    }

    // Si hay Stock, se realiza la orden
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(async ({ id }) => {
      alert(`Compra realizada con éxito, tu número de orden es: ${id}`);
      clearCart();

      // Si la compra se realiza, Actualizar el Stock
      for (const itemInCart of cart) {
        const productRef = doc(db, "products", itemInCart.product.id);
        const product = await getDoc(productRef);
        const productData = product.data();

        const newStock = productData.stock - itemInCart.quantity;

        await updateDoc(productRef, { stock: newStock });
      }
    });
  };

  return (
       <div>
      <form className="form_container">
        <div className="form_field">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre del comprador"
            className="input_field"
            name="name"
            value={buyer.name}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="form_field">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            className="input_field"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        </div>
        <div className="form_field">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            className="input_field"
            name="lastName"
            value={buyer.lastName}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        </div>
        <CartDetails cart={cart} cartTotal={cartTotal} />
        <button
          className="submit_button"
          type="button"
          onClick={handleSubmit}
        >
          Comprar
        </button>
      </form>
    </div>
  );
}