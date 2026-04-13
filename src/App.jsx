import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// ⚠️ Comentamos esto temporalmente para que no crashee la app
// import Navbar from './component/Navbar';
// import Catalogo from './pages/Catalogo';
// import DetalleProducto from './pages/DetalleProducto';
// import Carrito from './pages/Carrito';

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/catalogo" element={<Catalogo />} /> */}
          {/* <Route path="/producto/:id" element={<DetalleProducto />} /> */}
          {/* <Route path="/carrito" element={<Carrito />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;