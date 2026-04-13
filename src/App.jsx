import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import DetalleProducto from './pages/DetalleProducto'; 

// import Navbar from './component/Navbar';
// import Carrito from './pages/Carrito';

function App() {
  return (
    <BrowserRouter>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          
          <Route path="/producto/:id" element={<DetalleProducto />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;