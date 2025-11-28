import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center">
      {/* Hero */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-stone-900 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Únete a la red</h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">Haz crecer tu negocio de transporte conectando con miles de viajeros que buscan llegar a los mejores eventos de México.</p>
      </div>

      <div className="max-w-6xl w-full px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Information */}
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">¿Por qué ser Partner?</h2>
            
            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-2xl border border-stone-700">🚀</div>
                <div>
                    <h3 className="text-xl font-bold text-white">Más Clientes</h3>
                    <p className="text-gray-400">Accede a una base de usuarios segmentada que ya busca viajar.</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-2xl border border-stone-700">🛡️</div>
                <div>
                    <h3 className="text-xl font-bold text-white">Confianza</h3>
                    <p className="text-gray-400">El sello de Partner Llevanos.com valida tu calidad y seguridad.</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-2xl border border-stone-700">📢</div>
                <div>
                    <h3 className="text-xl font-bold text-white">Marketing Automatizado</h3>
                    <p className="text-gray-400">Nuestra IA genera contenido que promociona tus rutas en nuestro blog.</p>
                </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-mexico-pink/20 to-transparent rounded-xl border border-mexico-pink/30 mt-8">
                <h4 className="text-white font-bold mb-2">Suscripción Mensual</h4>
                <p className="text-3xl font-bold text-mexico-pink mb-4">$499 MXN <span className="text-sm text-gray-400 font-normal">/ mes</span></p>
                <ul className="text-sm text-gray-300 space-y-2 mb-6">
                    <li>✓ Perfil verificado</li>
                    <li>✓ Aparición prioritaria en búsquedas</li>
                    <li>✓ Acceso a panel de métricas</li>
                    <li>✓ Sin comisiones por viaje</li>
                </ul>
            </div>
        </div>

        {/* Form */}
        <div className="bg-stone-900 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Regístrate como Proveedor</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Nombre de la Empresa</label>
                    <input type="text" className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Correo Electrónico</label>
                    <input type="email" className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Ciudad Base</label>
                    <input type="text" className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Tipos de Vehículos</label>
                    <select className="w-full bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:ring-blue-500 focus:border-blue-500">
                        <option>Autobús</option>
                        <option>Sprinter/Van</option>
                        <option>Automóvil Privado</option>
                        <option>Mixto</option>
                    </select>
                </div>
                <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                        Iniciar Registro
                    </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                    Al registrarte aceptas nuestros términos y condiciones para partners.
                </p>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Partners;