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

  // Función 2: Eliminar un producto por completo
  const eliminarDelCarrito = (id) => {
    setCart((carritoActual) => carritoActual.filter(item => item.id !== id));
  };

  // Función 3: Calcular el total a pagar
  const calcularTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.cantidad), 0);
  };

  return (
    // Pasamos el estado (cart) y las funciones a toda la aplicación
    <CartContext.Provider value={{ cart, agregarAlCarrito, eliminarDelCarrito, calcularTotal }}>
      {children}
    </CartContext.Provider>
  );
};