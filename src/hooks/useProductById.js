import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useProductById() {
  const { productId } = useParams(); // Aquí obtenemos el productId de los parámetros de la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "products", productId);
    getDoc(productRef)
      .then((doc) => {
        if (doc.exists()) {
          setProduct({
            id: doc.id,
            ...doc.data(),
          });
        } else {
          alert("No such document!");
        }
      })
      .finally(() => setLoading(false));
  }, [productId]);

  return {
    product,
    loading,
  };
}