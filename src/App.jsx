import { BrowserRouter } from 'react-router-dom';
import { useContext } from 'react';
import { CartProvider, CartContext } from './context/CartContext';
import Navbar from './component/Navbar';
import Carrito from './pages/Carrito';
import './index.css';

// 1. Creamos un componente temporal solo para probar tu lógica
function BotonPrueba() {
  const { agregarAlCarrito } = useContext(CartContext);

  // Inventamos un producto falso
  const mochilaFalsa = {
    id: "test-1",
    nombre: "Mochila Urbana de Prueba",
    categoria: "Mochilas",
    precio: 150.00,
    imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80"
  };

  return (
    <div className="flex justify-center my-8">
      <button 
        onClick={() => agregarAlCarrito(mochilaFalsa)}
        className="bg-aura-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors"
      >
        ➕ Agregar Mochila de Prueba
      </button>
    </div>
  );
}

// 2. Renderizamos todo en la App
function App() {
  return (
    // BrowserRouter es necesario para que los <Link> no den error
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        
        {/* Este botón lo borraremos cuando Franz una su código */}
        <BotonPrueba />

        {/* Mostramos tu carrito directamente en la pantalla */}
        <Carrito />
        
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;