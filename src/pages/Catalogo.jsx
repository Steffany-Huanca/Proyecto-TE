
export default function Catalogo() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen text-gray-900 bg-white">
      <h1 className="text-3xl font-bold mb-8">Nuestro Catálogo</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg mb-4">Filtros</h3>
            <p className="text-sm text-gray-500">Próximamente: Categorías, Precios...</p>
          </div>
        </aside>

        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             <p className="text-center col-span-full text-gray-500 mt-10">Cargando inventario...</p>
          </div>
        </main>
      </div>
    </div>
  );
}