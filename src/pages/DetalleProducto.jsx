import { useParams, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import productos from '../data/products.json';

export default function DetalleProducto() {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);
  const [cantidadLocal, setCantidadLocal] = useState(1);
  const producto = productos.find(p => p.id === parseInt(id));

  const [varianteSeleccionada, setVarianteSeleccionada] = useState(null);
  const [imagenActiva, setImagenActiva] = useState("");

  useEffect(() => {
    if (producto && producto.variantes && producto.variantes.length > 0) {
      setVarianteSeleccionada(producto.variantes[0]);
      setImagenActiva(producto.variantes[0].imagenes[0]);
    }
  }, [id, producto]);

  if (!producto || !varianteSeleccionada) {
    return (
      <div className="container mx-auto px-4 py-20 text-center min-h-screen">
        <h2 className="font-cinzel text-3xl text-aura-dark mb-4">Cargando producto...</h2>
        <Link to="/catalogo" className="text-aura-cerulean underline hover:text-aura-blue">Volver al catálogo</Link>
      </div>
    );
  }

  const handleCambioColor = (variante) => {
    setVarianteSeleccionada(variante);
    setImagenActiva(variante.imagenes[0]); 
  };

  const handleAgregarClick = () => {
    const productoParaCarrito = {
      ...producto,
      imagen: imagenActiva 
    };
    for (let i = 0; i < cantidadLocal; i++) {
      agregarAlCarrito(productoParaCarrito);
    }
    alert(`¡Se agregaron ${cantidadLocal}x ${producto.nombre} (${varianteSeleccionada.color_nombre})!`);
    setCantidadLocal(1);
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-white">
      <div className="mb-6">
        <Link to="/catalogo" className="text-aura-cerulean hover:text-aura-dark font-medium flex items-center gap-2 w-fit">
          <span>&larr;</span> Volver al catálogo
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        
        {/* --- SECCIÓN IZQUIERDA: GALERÍA --- */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 aspect-square rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden mb-4 p-4">
             <img src={imagenActiva} alt={producto.nombre} className="w-full h-full object-contain transition-opacity duration-300" />
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center md:justify-start">
             {varianteSeleccionada.imagenes.map((imgUrl, index) => (
               <div 
                  key={index}
                  onClick={() => setImagenActiva(imgUrl)}
                  className={`bg-gray-50 w-20 h-20 sm:w-24 sm:h-24 rounded-xl cursor-pointer border-2 shadow-sm overflow-hidden flex-shrink-0 transition-all p-1 ${imagenActiva === imgUrl ? 'border-aura-cerulean scale-105' : 'border-transparent hover:border-gray-300'}`}
               >
                  <img src={imgUrl} alt={`Vista ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
               </div>
             ))}
          </div>
        </div>

        {/* --- SECCIÓN DERECHA: INFO --- */}
        <div className="w-full md:w-1/2 flex flex-col">
          <p className="font-quattrocento text-aura-cerulean text-sm font-bold tracking-widest uppercase mb-2">{producto.categoria}</p>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-aura-dark mb-4">{producto.nombre}</h1>
          <p className="font-quattrocento text-3xl font-semibold text-aura-red mb-6">S/ {producto.precio.toFixed(2)}</p>
          
          <div className="text-gray-600 mb-6 font-lora leading-relaxed text-lg">
            <p>{producto.descripcion}</p>
          </div>

          {/* ESPECIFICACIONES (A PRUEBA DE BALAS) */}
          {(producto.material || producto.dimensiones || producto.caracteristicas_clave) && (
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 mb-8">
              <h4 className="font-cinzel font-bold text-lg text-aura-dark mb-3 border-b border-gray-200 pb-2">Especificaciones</h4>
              
              <ul className="font-lora text-gray-600 space-y-2 mb-4 text-sm">
                {producto.material && <li><strong className="text-gray-800">Material:</strong> {producto.material}</li>}
                {producto.dimensiones && <li><strong className="text-gray-800">Dimensiones:</strong> {producto.dimensiones}</li>}
              </ul>
              
              {/* Solo intenta hacer el .map si caracteristicas_clave existe */}
              {producto.caracteristicas_clave && producto.caracteristicas_clave.length > 0 && (
                <>
                  <h4 className="font-quattrocento font-bold text-sm text-aura-dark uppercase tracking-wider mb-2">Características Clave</h4>
                  <ul className="font-lora text-gray-600 space-y-1 text-sm list-disc pl-5">
                    {producto.caracteristicas_clave.map((caracteristica, i) => (
                      <li key={i}>{caracteristica}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

           {/* SELECTOR DE COLORES */}
           <div className="mb-8">
            <p className="font-quattrocento font-semibold text-aura-dark mb-3">
              Color seleccionado: <span className="font-normal text-gray-600">{varianteSeleccionada.color_nombre}</span>
            </p>
            <div className="flex gap-4">
                {producto.variantes && producto.variantes.map(variante => (
                    <div 
                      key={variante.color_nombre} 
                      onClick={() => handleCambioColor(variante)} 
                      className="flex flex-col items-center gap-2 cursor-pointer group"
                    >
                        <span 
                            className={`w-10 h-10 rounded-full border-2 shadow-md transition-all ${varianteSeleccionada.color_nombre === variante.color_nombre ? 'border-aura-cerulean scale-110' : 'border-gray-300 group-hover:scale-105'}`} 
                            style={{ backgroundColor: variante.color_hex }}
                        ></span>
                    </div>
                ))}
            </div>
          </div>

          <hr className="border-gray-200 mb-8" />

          {/* CONTROLES Y AGREGAR */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-auto">
            <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 sm:w-1/3 shadow-sm bg-white">
              <button onClick={() => setCantidadLocal(Math.max(1, cantidadLocal - 1))} className="text-gray-400 hover:text-aura-dark font-bold text-xl">-</button>
              <span className="font-quattrocento font-bold text-lg text-aura-dark">{cantidadLocal}</span>
              <button onClick={() => setCantidadLocal(cantidadLocal + 1)} className="text-gray-400 hover:text-aura-dark font-bold text-xl">+</button>
            </div>
            <button onClick={handleAgregarClick} className="sm:w-2/3 bg-aura-red hover:bg-[#c92e3a] text-white font-quattrocento font-bold text-lg py-3 px-8 rounded-lg shadow-md transition-transform hover:-translate-y-0.5">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}