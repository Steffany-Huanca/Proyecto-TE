import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Carrito() {
  const { cart, eliminarDelCarrito, calcularTotal } = useContext(CartContext);

  // 1. Reglas de Negocio para el Envío
  const subtotal = calcularTotal();
  const UMBRAL_ENVIO_GRATIS = 150;
  const COSTO_ENVIO_FIJO = 15;
  
  // 2. Cálculos Condicionales
  const costoEnvio = subtotal >= UMBRAL_ENVIO_GRATIS ? 0 : COSTO_ENVIO_FIJO;
  const totalAPagar = subtotal + costoEnvio;
  const porcentajeProgreso = Math.min((subtotal / UMBRAL_ENVIO_GRATIS) * 100, 100);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20 px-4">
        <h2 className="font-cinzel text-3xl font-bold text-aura-dark mb-4">Tu carrito está vacío</h2>
        <p className="font-quattrocento text-lg text-gray-600 mb-8">¡Es un buen momento para explorar nuestra colección!</p>
        <Link to="/catalogo" className="bg-aura-red text-white px-8 py-3 rounded-full font-bold hover:bg-[#c92e3a] transition-colors shadow-lg">
          Ver Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-cinzel text-4xl font-bold text-aura-dark mb-8">Tu Carrito de Compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-fit">
            <ul className="divide-y divide-gray-200">
              {cart.map((producto) => (
                <li key={producto.id} className="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-gray-50 transition-colors">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="w-24 h-24 object-cover rounded-md border border-gray-200"
                  />
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-cinzel text-lg font-bold text-aura-dark">{producto.nombre}</h3>
                    <p className="font-quattrocento text-sm text-gray-500 uppercase tracking-wider mb-2">{producto.categoria}</p>
                    <p className="font-quattrocento text-aura-cerulean font-bold">Precio unitario: S/ {producto.precio.toFixed(2)}</p>
                  </div>

                  <div className="text-center sm:text-right">
                    <p className="font-quattrocento text-sm text-gray-600 mb-1">Cantidad: <span className="font-bold">{producto.cantidad}</span></p>
                    <p className="font-cinzel font-bold text-xl text-aura-dark mb-3">
                      Subtotal: S/ {(producto.precio * producto.cantidad).toFixed(2)}
                    </p>
                    <button 
                      onClick={() => eliminarDelCarrito(producto.id)}
                      className="text-sm text-aura-red hover:underline font-bold"
                    >
                      Eliminar producto
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
            <h2 className="font-cinzel text-2xl font-bold text-aura-dark mb-6 border-b pb-4">Resumen de la orden</h2>
            
            <div className="flex justify-between items-center mb-4 font-quattrocento text-lg text-gray-600">
              <span>Subtotal:</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center mb-2 font-quattrocento text-lg text-gray-600">
              <span>Envío:</span>
              {costoEnvio === 0 ? (
                <span className="text-green-600 font-bold">¡Gratis!</span>
              ) : (
                <span>S/ {costoEnvio.toFixed(2)}</span>
              )}
            </div>

            {/* Mensaje de Envío Gratis Dinámico */}
            <div className="mb-6 bg-gray-50 p-3 rounded-lg border border-gray-200 text-sm text-center">
                {subtotal >= UMBRAL_ENVIO_GRATIS ? (
                    <p className="text-green-600 font-bold font-lora">¡Felicidades! Tienes envío gratis.</p>
                ) : (
                    <>
                        <p className="text-gray-600 font-lora mb-2">
                            Te faltan <span className="font-bold text-aura-dark">S/ {(UMBRAL_ENVIO_GRATIS - subtotal).toFixed(2)}</span> para envío gratis.
                        </p>
                        {/* Barra de progreso */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-aura-blue h-2 rounded-full transition-all duration-500" style={{ width: `${porcentajeProgreso}%` }}></div>
                        </div>
                    </>
                )}
            </div>
            
            <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-8">
              <span className="font-cinzel text-xl font-bold text-aura-dark">Total a pagar:</span>
              <span className="font-cinzel text-2xl font-bold text-aura-red">S/ {totalAPagar.toFixed(2)}</span>
            </div>

            <button className="w-full bg-aura-dark text-white py-3 rounded-lg font-bold hover:bg-aura-cerulean transition-colors tracking-widest uppercase">
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}