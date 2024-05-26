import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carrito from "./views/Carrito";
import Home from "./views/Home";
import PizzasContextProvider from './context/PizzasContextProvider'
import DetallePizza from './views/DetallePizza';

const App = () => {
  return (
    <>
      <PizzasContextProvider>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/detallePizza/:id" element={<DetallePizza />}/>
      </Routes>
      </PizzasContextProvider>      
    </>
  );
};
export default App;
