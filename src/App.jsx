import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage";
import ProductDetailPage from "./components/Pages/ProductDetailPage";
import CategoryPage from "./components/Pages/CategoryPage";
import CartProvider from "./components/contexts/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path= "/cart" element={<CartContainer />} />
        </Routes>
       
      </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;