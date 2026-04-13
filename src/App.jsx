import { CartProvider } from './context/CartContext';
import Navbar from './component/Navbar';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl text-aura-blue mt-8">
          Aura Urban Style - En construcción
        </h1>
      </div>
    </CartProvider>
  )
}

export default App;