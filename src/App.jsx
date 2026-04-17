import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import DetalleProducto from './pages/DetalleProducto';
import Carrito from './pages/Carrito';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      {/* Tu CartProvider envuelve todo para dar acceso al carrito */}
      <CartProvider>
        
        {/* El Navbar se queda aquí afuera de las rutas para que siempre esté visible */}
        <Navbar />
        
        <main>
          <Routes>
            {/* Las rutas que hizo Franz */}
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            
            {/* Tu ruta oficial para el carrito */}
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </main>
        
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;