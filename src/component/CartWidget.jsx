import { useContext } from 'react';
import { Link } from 'react-router-dom'; // 1. Importamos Link para poder viajar
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  
  // 2. Mejoramos la lógica: ahora sumamos la cantidad real de productos
  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

  return (
    // 3. Cambiamos el <div> por un <Link> que apunte a tu ruta oficial
    <Link to="/carrito" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
      <span className="text-2xl mr-2">🛒</span>
      <span className="bg-aura-red text-white rounded-full px-2 py-0.5 font-bold font-lora text-sm shadow-sm">
        {totalItems}
      </span>
    </Link>
  );
}