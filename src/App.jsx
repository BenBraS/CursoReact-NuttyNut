import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage";
import ProductDetailPage from "./components/Pages/ProductDetailPage";
import CategoryPage from "./components/Pages/CategoryPage";
import CartProvider from "./components/contexts/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";
import CheckoutContainer from "./components/CheckoutContainer.jsx/CheckoutContainer";


function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path= "/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Routes>
       
      </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;