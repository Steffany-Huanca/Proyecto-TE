import { useParams, Link } from 'react-router-dom';
import productos from '../data/products.json';

export default function DetalleProducto() {
    
  const { id } = useParams();

  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return (
      <div className="container mx-auto px-4 py-20 text-center min-h-screen">
        <h2 className="font-cinzel text-3xl text-aura-dark mb-4">Producto no encontrado</h2>
        <Link to="/catalogo" className="text-aura-cerulean underline hover:text-aura-blue transition-colors">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      
      <div className="mb-6">
        <Link to="/catalogo" className="text-aura-cerulean hover:text-aura-dark font-medium flex items-center gap-2 transition-colors w-fit">
          <span>&larr;</span> Volver al catálogo
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 aspect-square rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden">
             <img 
                src={producto.imagen} 
                alt={producto.nombre} 
                className="w-full h-full object-cover"
              />
          </div>
          
          <div className="flex gap-4 mt-6">
             <div className="bg-gray-50 w-24 h-24 rounded-xl cursor-pointer border-2 border-aura-cerulean shadow-sm overflow-hidden">
                <img src={producto.imagen} alt="miniatura 1" className="w-full h-full object-cover" />
             </div>

             <div className="bg-gray-100 w-24 h-24 rounded-xl cursor-not-allowed border border-gray-200 flex items-center justify-center opacity-50">
                 <span className="text-xs text-gray-400">Vista 2</span>
             </div>
             <div className="bg-gray-100 w-24 h-24 rounded-xl cursor-not-allowed border border-gray-200 flex items-center justify-center opacity-50">
                 <span className="text-xs text-gray-400">Vista 3</span>
             </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <p className="font-quattrocento text-aura-cerulean text-sm font-bold tracking-widest uppercase mb-3">
            {producto.categoria}
          </p>
          
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-aura-dark mb-4 leading-tight">
            {producto.nombre}
          </h1>
          
          <p className="font-quattrocento text-3xl font-semibold text-aura-red mb-6">
            S/ {producto.precio.toFixed(2)}
          </p>
          
          <div className="text-gray-600 mb-8 leading-relaxed font-lora">
            <p>{producto.descripcion}</p>
          </div>

           <div className="mb-8">
            <p className="font-quattrocento font-semibold text-aura-dark mb-3">Colores Disponibles:</p>
            <div className="flex gap-3">
                {producto.colores.map(color => (
                    <div key={color} className="flex flex-col items-center gap-1 cursor-pointer group">
                        <span 
                            className="w-8 h-8 rounded-full border border-gray-300 shadow-sm group-hover:scale-110 transition-transform" 
                            style={{ backgroundColor: color === 'Negro' ? '#111' : color === 'Café' ? '#654321' : color === 'Café Oscuro' ? '#3b2511' : color === 'Beige' ? '#F5F5DC' : color === 'Blanco' ? '#FFF' : color === 'Gris' ? '#808080' : color === 'Gris Jaspeado' ? '#A9A9A9' : color === 'Azul Marino' ? '#000080' : color === 'Verde Olivo' ? '#556B2F' : 'gray' }}
                        ></span>
                        <span className="text-[10px] text-gray-500 font-lora">{color}</span>
                    </div>
                ))}
            </div>
          </div>

          <hr className="border-gray-200 mb-8" />

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
           
            <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 sm:w-1/3 bg-white shadow-sm">
              <button className="text-gray-400 hover:text-aura-dark font-bold text-xl transition-colors">−</button>
              <span className="font-quattrocento font-bold text-lg text-aura-dark">1</span>
              <button className="text-gray-400 hover:text-aura-dark font-bold text-xl transition-colors">+</button>
            </div>

            <button className="sm:w-2/3 bg-aura-red hover:bg-[#c92e3a] text-white font-quattrocento font-bold text-lg py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Agregar al Carrito
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <ul className="text-sm text-gray-600 space-y-2 font-medium font-lora">
              <li className="flex items-center gap-2">
                 <span className={producto.stock > 10 ? "text-green-600" : "text-aura-red font-bold"}>
                    {producto.stock > 10 ? "✓" : "!"}
                 </span> 
                 {producto.stock > 10 ? "Stock Disponible" : `¡Solo quedan ${producto.stock} unidades!`}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-aura-blue">✓</span> Envío gratis a partir de S/ 150
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}