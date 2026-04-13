import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.length;

  return (
    <div className="flex items-center cursor-pointer">
      <span className="text-2xl mr-2">🛒</span>
      <span className="bg-aura-red text-aura-light rounded-full px-2 py-0.5 font-bold font-body text-sm">
        {totalItems}
      </span>
    </div>
  );
}