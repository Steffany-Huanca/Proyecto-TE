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
      <CartProvider>
        
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </main>
        
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;