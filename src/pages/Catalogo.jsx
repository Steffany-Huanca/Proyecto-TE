import { Link } from 'react-router-dom';
import { useState } from 'react';
import productosData from '../data/products.json'; 

export default function Catalogo() {
  // Estados para los filtros
  const [filtroCategorias, setFiltroCategorias] = useState([]);
  const [filtroEnStock, setFiltroEnStock] = useState(false);

  // Lógica para manejar los checkboxes de categorías
  const handleCategoriaChange = (categoria) => {
    setFiltroCategorias(prev => 
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria) // Si ya estaba, la quitamos
        : [...prev, categoria] // Si no estaba, la agregamos
    );
  };

  // Lógica para filtrar los productos según los estados actuales
  const productosFiltrados = productosData.filter(producto => {
    // 1. Verificamos categoría (si no hay ninguna seleccionada, mostramos todas)
    const pasaCategoria = filtroCategorias.length === 0 || filtroCategorias.includes(producto.categoria);
    // 2. Verificamos stock
    const pasaStock = filtroEnStock ? producto.stock > 0 : true;
    
    return pasaCategoria && pasaStock;
  });

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-white">
      <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-10 text-aura-dark text-center md:text-left">
        Nuestro Catálogo
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* BARRA LATERAL DE FILTROS */}
        <aside className="w-full md:w-1/4">
          <div className="bg-aura-blue/20 p-6 rounded-xl border border-aura-blue/30 shadow-sm sticky top-6">
            <h3 className="font-cinzel font-bold text-xl mb-6 text-aura-dark border-b border-aura-cerulean/30 pb-2">Filtros</h3>
            
            {/* Categorías */}
            <div className="mb-6">
              <h4 className="font-quattrocento font-semibold text-aura-dark mb-3 uppercase tracking-wider text-sm">Categorías</h4>
              <ul className="space-y-3 text-aura-dark font-lora">
                {['Mochilas', 'Bolsos', 'Accesorios'].map(cat => (
                  <li key={cat}>
                    <label className="flex items-center gap-3 cursor-pointer hover:text-aura-cerulean transition-colors">
                      <input 
                        type="checkbox" 
                        className="accent-aura-cerulean w-4 h-4" 
                        checked={filtroCategorias.includes(cat)}
                        onChange={() => handleCategoriaChange(cat)}
                      /> 
                      {cat}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disponibilidad */}
            <div className="mb-6">
              <h4 className="font-quattrocento font-semibold text-aura-dark mb-3 uppercase tracking-wider text-sm">Disponibilidad</h4>
              <label className="flex items-center gap-3 cursor-pointer text-aura-dark font-lora hover:text-aura-cerulean transition-colors">
                <input 
                  type="checkbox" 
                  className="accent-aura-cerulean w-4 h-4" 
                  checked={filtroEnStock}
                  onChange={() => setFiltroEnStock(!filtroEnStock)}
                /> 
                En Stock
              </label>
            </div>
            
            {/* Botón de limpiar filtros */}
            <button 
              onClick={() => { setFiltroCategorias([]); setFiltroEnStock(false); }}
              className="w-full mt-4 bg-transparent border border-aura-red text-aura-red font-quattrocento py-2 rounded-lg hover:bg-aura-red hover:text-white transition-colors"
            >
              Limpiar Filtros
            </button>
          </div>
        </aside>

        {/* GRILLA DE PRODUCTOS */}
        <main className="w-full md:w-3/4">
          <div className="mb-6 text-gray-500 font-lora text-sm">
            Mostrando {productosFiltrados.length} productos
          </div>

          {productosFiltrados.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-gray-100">
              <h3 className="font-cinzel text-2xl text-gray-400 mb-2">No se encontraron productos</h3>
              <p className="font-lora text-gray-500">Intenta cambiar los filtros seleccionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                  
                  <Link to={`/producto/${producto.id}`} className="block h-56 overflow-hidden bg-gray-50 relative">
                    <img 
                      src={producto.variantes[0].imagenes[0]} 
                      alt={producto.nombre} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {producto.stock < 10 && producto.stock > 0 && (
                      <span className="absolute top-2 right-2 bg-aura-red text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                        ¡Últimos {producto.stock}!
                      </span>
                    )}
                  </Link>

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
                    
                    <div className="flex justify-center gap-1 mb-4">
                       {producto.variantes.map(variante => (
                          <span 
                            key={variante.color_nombre} 
                            title={variante.color_nombre} 
                            className="w-4 h-4 rounded-full border border-gray-300 shadow-sm" 
                            style={{ backgroundColor: variante.color_hex }}
                          ></span>
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
          )}
        </main>
      </div>
    </div>
  );
}