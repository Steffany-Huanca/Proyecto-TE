import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCart((carritoActual) => {
      const productoExistente = carritoActual.find(item => item.id === producto.id);
      
      if (productoExistente) {
        return carritoActual.map(item => 
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 } 
            : item
        );
      } else {
        return [...carritoActual, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCart((carritoActual) => carritoActual.filter(item => item.id !== id));
  };

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito, eliminarDelCarrito, calcularTotal }}>
      {children}
    </CartContext.Provider>
  );
};