import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";


function App(){
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          
    
     
        </Routes>
      <ItemListContainer Greetings="¡Bienvenidos/as a la mejor tienda de Frutos secos!" />
     </Layout>
  </BrowserRouter>
  );
}

export default App;