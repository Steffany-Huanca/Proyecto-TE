import { CartProvider } from './context/CartContext';
import Navbar from './component/Navbar';

function App() {
  return (
    // Todo lo que esté dentro de CartProvider tendrá acceso al carrito
    <CartProvider>
      <Navbar />
      
      {/* Más adelante, Franz conectará las vistas (Home, Catalogo) aquí abajo */}
      <div style={{ padding: '20px' }}>
        <h1>Aura Urban Style - En construcción</h1>
      </div>
    </CartProvider>
  )
}

export default App;