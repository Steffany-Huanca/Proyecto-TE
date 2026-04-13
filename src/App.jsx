import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo'; 

// import Navbar from './component/Navbar';
// import DetalleProducto from './pages/DetalleProducto';
// import Carrito from './pages/Carrito';

function App() {
  return (
    <BrowserRouter>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;