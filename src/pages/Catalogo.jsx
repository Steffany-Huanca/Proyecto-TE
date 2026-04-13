import { Link } from 'react-router-dom';
import productos from '../data/products.json'; 

export default function Catalogo() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-white">
      <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-10 text-aura-dark text-center md:text-left">
        Nuestro Catálogo
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar de Filtros */}
        <aside className="w-full md:w-1/4">
          <div className="bg-aura-blue/20 p-6 rounded-xl border border-aura-blue/30 shadow-sm sticky top-6">
            <h3 className="font-cinzel font-bold text-xl mb-6 text-aura-dark border-b border-aura-cerulean/30 pb-2">Filtros</h3>
            
            {/* Categorías */}
            <div className="mb-6">
              <h4 className="font-quattrocento font-semibold text-aura-dark mb-3 uppercase tracking-wider text-sm">Categorías</h4>
              <ul className="space-y-2 text-aura-dark font-lora">
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-aura-cerulean"><input type="checkbox" className="accent-aura-cerulean" /> Mochilas</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-aura-cerulean"><input type="checkbox" className="accent-aura-cerulean" /> Bolsos</label></li>
                <li><label className="flex items-center gap-2 cursor-pointer hover:text-aura-cerulean"><input type="checkbox" className="accent-aura-cerulean" /> Accesorios</label></li>
              </ul>
            </div>

            {/* Disponibilidad */}
            <div>
              <h4 className="font-quattrocento font-semibold text-aura-dark mb-3 uppercase tracking-wider text-sm">Disponibilidad</h4>
              <label className="flex items-center gap-2 cursor-pointer text-aura-dark font-lora hover:text-aura-cerulean">
                <input type="checkbox" className="accent-aura-cerulean" /> En Stock
              </label>
            </div>
            
            {/* Botón visual para aplicar filtros */}
            <button className="w-full mt-8 bg-aura-red text-white font-quattrocento py-2 rounded-lg hover:bg-[#c92e3a] transition-colors shadow-sm">
              Aplicar Filtros
            </button>
          </div>
        </aside>

        {/* Grid Principal de Productos */}
        <main className="w-full md:w-3/4">
          
          {/* Contador de resultados */}
          <div className="mb-6 text-gray-500 font-lora text-sm">
            Mostrando {productos.length} productos
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* El bucle .map que dibuja todo tu inventario */}
            {productos.map((producto) => (
              <div key={producto.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                
                {/* Contenedor de Imagen */}
                <Link to={`/producto/${producto.id}`} className="block h-56 overflow-hidden bg-gray-50 relative">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Etiqueta de Poco Stock si hay menos de 10 */}
                  {producto.stock < 10 && (
                    <span className="absolute top-2 right-2 bg-aura-red text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                      ¡Últimos {producto.stock}!
                    </span>
                  )}
                </Link>

                {/* Información de la Tarjeta */}
                <div className="p-5 flex flex-col flex-grow text-center">
                  <p className="font-quattrocento text-xs text-gray-400 tracking-widest uppercase mb-1">
                    {producto.categoria}
                  </p>
                  <h3 className="font-cinzel text-lg font-bold text-aura-dark mb-1 flex-grow">
                    {producto.nombre}
                  </h3>
                  <p className="font-quattrocento font-bold text-aura-cerulean text-lg mb-4">
                    S/ {producto.precio.toFixed(2)}
                  </p>
                  
                  {/* Colores disponibles */}
                  <div className="flex justify-center gap-1 mb-4">
                     {producto.colores.map(color => (
                        <span key={color} title={color} className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: color === 'Negro' ? '#111' : color === 'Café' ? '#654321' : color === 'Café Oscuro' ? '#3b2511' : color === 'Beige' ? '#F5F5DC' : color === 'Blanco' ? '#FFF' : color === 'Gris' ? '#808080' : color === 'Gris Jaspeado' ? '#A9A9A9' : color === 'Azul Marino' ? '#000080' : color === 'Verde Olivo' ? '#556B2F' : 'gray' }}></span>
                     ))}
                  </div>

                  <Link 
                    to={`/producto/${producto.id}`} 
                    className="mt-auto border border-aura-dark text-aura-dark font-quattrocento font-bold py-2 px-4 rounded hover:bg-aura-dark hover:text-white transition-colors w-full"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </main>
      </div>
    </div>
  );
}