import { createContext, useEffect, useState} from "react";

export const PizzasContext = createContext();

const PIZZA_URL = "/pizzas.json";

const PizzasContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [carrito, setCarrito] = useState ([])
    
    const getPizzas = async () => {
        try {
            const response = await fetch(PIZZA_URL);
            const dataPizzas = await response.json();
            console.log(dataPizzas)
            setData(dataPizzas)
        } catch (error) {
            console.log(error);
        }
    };

    const agregaPizza = ({id, price, name, img}) => {
        const productoEIndex = carrito.findIndex((p) => p.id === id)
        const producto ={ id, price, name, img, count: 1}

        if (productoEIndex >= 0) {
            const newCarrito = [...carrito];
            newCarrito[productoEIndex].count++;
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, producto]);
        }
    };

    useEffect(() => {
        getPizzas()
    }, [])

    const incrementar = (i) => {
        const newCarrito = [...carrito];
        newCarrito[i].count++;
        setCarrito(newCarrito);
    };

    const decrementar = (i) => {
        const newCarrito = [...carrito];
        
        const { count } = newCarrito[i];
        if (count === 1) {
            newCarrito.splice(i, 1);
        } else {
            newCarrito[i].count--;
        }
        setCarrito(newCarrito);
    };

    return (
        <PizzasContext.Provider value={{data, setData, carrito, setCarrito, agregaPizza, incrementar, decrementar}}>
            {children}
        </PizzasContext.Provider>
    );
}

export default PizzasContextProvider