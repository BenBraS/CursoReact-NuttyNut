import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Pages/HomePage";
import ProductDetailPage from "./components/Pages/ProductDetailPage";
import CategoryPage from "./components/Pages/CategoryPage";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Usa el atributo "element" para la página de inicio */}
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
       
      </Layout>
    </BrowserRouter>
  );
}
export default App;