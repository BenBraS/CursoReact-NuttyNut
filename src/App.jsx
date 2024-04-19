import "./App.css";
import NuttyNuts from "./components/NuttyNuts";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App(){
  return(

    <div>
      <div className="Header_1">
      <NuttyNuts />
      <NavBar />
      </div>
     <ItemListContainer greeting="¡Bienvenidos/as a la mejor tienda de Frutos secos!" />
    </div>
  );
}

export default App;