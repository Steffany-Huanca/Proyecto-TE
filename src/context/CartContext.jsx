import { createContext, useState } from 'react';

// 1. Creamos el contexto
export const CartContext = createContext();

// 2. Creamos el Provider (el componente que envolverá a nuestra app para proveerle los datos)
export const CartProvider = ({ children }) => {
  // Estado principal: un arreglo vacío que guardará los productos que el usuario elija
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};