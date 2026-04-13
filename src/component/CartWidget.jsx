import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
  // Aquí consumimos el estado global usando useContext
  const { cart } = useContext(CartContext);
  
  // Por ahora, el número será la cantidad de elementos en el arreglo 'cart'
  const totalItems = cart.length;

  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <span style={{ fontSize: '1.5rem', marginRight: '5px' }}>🛒</span>
      <span style={{ 
        background: '#0f172a', // Un azul muy oscuro
        color: 'white', 
        borderRadius: '50%', 
        padding: '2px 8px',
        fontWeight: 'bold'
      }}>
        {totalItems}
      </span>
    </div>
  );
}