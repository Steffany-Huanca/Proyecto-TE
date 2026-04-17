import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  
  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0);

  return (
    <Link to="/carrito" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
      <span className="text-2xl mr-2">🛒</span>
      <span className="bg-aura-red text-white rounded-full px-2 py-0.5 font-bold font-lora text-sm shadow-sm">
        {totalItems}
      </span>
    </Link>
  );
}