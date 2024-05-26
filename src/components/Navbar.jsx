import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContextProvider";

const Navbar = () => {
    
    const {carrito} = useContext(PizzasContext)
    const total = carrito.reduce((a,{ count, price }) => a + price * count, 0);

    return (
        <nav className="navbar">
            <Link className="link" to="/"> 🍕Pizzas Mamma Mia! </Link>
            <Link className="link" to="/Carrito">{total != 0 ? "" : ""} 🛒$ { total.toLocaleString("es-ES")} </Link>
        </nav>
    );
};
export default Navbar;