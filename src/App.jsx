import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast'; 
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
        
        <Toaster 
          position="top-center" 
          toastOptions={{
            duration: 3500, 
            style: {
              background: '#457B9D', 
              color: '#FFFFFF',      
              fontFamily: '"Lora", serif', 
              fontSize: '16px',        
              fontWeight: '500',       
              borderRadius: '8px',    
              padding: '16px 24px',    
              border: '1px solid #A8DADC', 
              boxShadow: '0 10px 15px -3px rgba(69, 123, 157, 0.3)', 
              marginTop: '20px', 
            },
            success: {
              iconTheme: {
                primary: '#FFFFFF', 
                secondary: '#457B9D', 
              },
            },
          }}
        />
        
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