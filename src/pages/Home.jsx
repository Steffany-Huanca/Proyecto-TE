import { Link } from 'react-router-dom';
import productos from '../data/products.json';

export default function Home() {
  // Filtramos los destacados y tomamos solo los primeros 3 para no saturar el Home
  const productosDestacados = productos.filter(producto => producto.destacado).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="bg-aura-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-4">
            Aura Urban Style
          </h1>
          <p className="font-quattrocento text-xl mb-8 text-aura-light">
            Accesorios funcionales, modernos y versátiles sin distinción de género.
          </p>
          <Link to="/catalogo" className="inline-block bg-aura-red text-white px-8 py-3 rounded-full font-bold hover:bg-[#c92e3a] transition-colors shadow-lg">
            Explorar Colección
          </Link>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="font-cinzel text-3xl font-bold text-center mb-12 text-aura-dark">
          Destacados de la Semana
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {productosDestacados.map((producto) => (
            <div key={producto.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              
              <div className="h-64 overflow-hidden">
                <img 
                  src={producto.variantes[0].imagenes[0]} 
                  alt={producto.nombre} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>S

              <div className="p-6 text-center">
                <p className="font-quattrocento text-xs text-aura-cerulean tracking-widest uppercase mb-2">
                  {producto.categoria}
                </p>
                <h3 className="font-cinzel text-xl font-bold text-aura-dark mb-2">
                  {producto.nombre}
                </h3>
                <p className="font-quattrocento font-bold text-aura-red text-lg mb-4">
                  S/ {producto.precio.toFixed(2)}
                </p>
                
                <Link 
                  to={`/producto/${producto.id}`} 
                  className="inline-block border-2 border-aura-dark text-aura-dark font-bold py-2 px-6 rounded-lg hover:bg-aura-dark hover:text-white transition-colors w-full"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}