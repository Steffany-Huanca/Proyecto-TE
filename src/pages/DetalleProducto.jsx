// src/pages/DetalleProducto.jsx
export default function DetalleProducto() {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      
      <div className="mb-6">
        <button className="text-aura-cerulean hover:text-aura-dark font-medium flex items-center gap-2 transition-colors">
          <span>&larr;</span> Volver al catálogo
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        
        <div className="w-full md:w-1/2">
          <div className="bg-aura-light aspect-square rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] duration-300">
            <span className="font-quattrocento text-xl text-aura-cerulean">Imagen Principal</span>
          </div>
          
          <div className="flex gap-4 mt-6">
             <div className="bg-aura-light w-24 h-24 rounded-xl cursor-pointer border-2 border-aura-blue shadow-sm flex items-center justify-center">
                <span className="text-xs text-aura-cerulean">Img 1</span>
             </div>
             <div className="bg-gray-50 w-24 h-24 rounded-xl cursor-pointer border border-gray-200 hover:border-aura-blue transition-colors flex items-center justify-center">
                 <span className="text-xs text-gray-400">Img 2</span>
             </div>
             <div className="bg-gray-50 w-24 h-24 rounded-xl cursor-pointer border border-gray-200 hover:border-aura-blue transition-colors flex items-center justify-center">
                 <span className="text-xs text-gray-400">Img 3</span>
             </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <p className="font-quattrocento text-aura-cerulean text-sm font-bold tracking-widest uppercase mb-3">
            Mochilas Urbanas
          </p>
          
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-aura-dark mb-4 leading-tight">
            Mochila City Commuter
          </h1>
          
          <p className="font-quattrocento text-3xl font-semibold text-aura-red mb-6">
            S/ 120.00
          </p>
          
          <div className="text-gray-600 mb-8 leading-relaxed space-y-4">
            <p>
              Diseñada para el profesional moderno de Arequipa. Esta mochila cuenta con compartimentos acolchados para tu laptop y material resistente.
            </p>
            <p>
              Un diseño ergonómico que se adapta a tu estilo de vida en la ciudad, sin importar tu género, manteniendo un perfil elegante y funcional.
            </p>
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
            <ul className="text-sm text-gray-600 space-y-2 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-aura-blue">✓</span> Envío gratis a partir de S/ 150
              </li>
              <li className="flex items-center gap-2">
                <span className="text-aura-blue">✓</span> Garantía de 6 meses
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}