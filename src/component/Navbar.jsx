import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-aura-dark text-aura-light shadow-md">
      <Link to="/" className="m-0 tracking-widest text-xl font-cinzel hover:text-aura-blue transition-colors">
        Aura Urban Style
      </Link>
      
      <CartWidget />
    </nav>
  );
}