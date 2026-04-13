import CartWidget from './CartWidget';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 2rem', 
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd'
    }}>
      <h2 style={{ margin: 0, color: '#0f172a' }}>Aura Urban Style</h2>
      
      {/* Aquí luego irán los enlaces de navegación de Franz */}
      
      <CartWidget />
    </nav>
  );
}