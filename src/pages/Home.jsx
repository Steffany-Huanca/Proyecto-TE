export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Aura Urban Style
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Accesorios funcionales, modernos y versátiles sin distinción de género.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Explorar Colección
          </button>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Destacados de la Semana
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
           <p className="text-center col-span-full text-gray-500">Cargando productos top...</p>
        </div>
      </section>
    </div>
  );
}