import CartWidget from './CartWidget';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-aura-dark text-aura-light shadow-md">
      <h2 className="m-0 tracking-widest text-xl">
        Aura Urban Style
      </h2>
      
      {/* Aquí luego irán los enlaces de navegación de Franz */}
      
      <CartWidget />
    </nav>
  );
}