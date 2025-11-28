import React from 'react';
import { Link } from 'react-router-dom';
import { EVENTS } from '../constants';
import EventCard from '../components/EventCard';
import { ElementType } from '../types';

const Home: React.FC = () => {
  const featuredEvents = EVENTS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background based on elements */}
        <div className="absolute inset-0 bg-stone-950">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-red-600 blur-[150px] opacity-20 animate-pulse rounded-full"></div>
          <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-blue-600 blur-[120px] opacity-20 rounded-full"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] bg-stone-700 blur-[100px] opacity-30 rounded-full"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Viaja a donde quieras,<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
              atravesando lo que sea.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
            Conectamos tus ganas de vivir eventos con el transporte perfecto para llegar ahí.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/events" 
              className="px-8 py-4 bg-mexico-pink hover:bg-pink-700 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-pink-500/30 transform hover:scale-105"
            >
              Buscar Destino
            </Link>
            <Link 
              to="/partners" 
              className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Ofrecer Transporte
            </Link>
          </div>
        </div>
      </section>

      {/* Elements Philosophy */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-transparent border border-red-900/30">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-white mb-2">Fuego</h3>
              <p className="text-gray-400">La pasión de los conciertos y festivales que encienden tu espíritu.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-900/30">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-white mb-2">Agua</h3>
              <p className="text-gray-400">Viajes fluidos y seguros. Deja que nosotros nos encarguemos de la ruta.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/20 to-transparent border border-gray-700/30">
              <div className="text-4xl mb-4">💨</div>
              <h3 className="text-xl font-bold text-white mb-2">Aire</h3>
              <p className="text-gray-400">Rapidez en tu reserva. Tecnología que te lleva volando a tu destino.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-800/20 to-transparent border border-stone-700/30">
              <div className="text-4xl mb-4">⛰️</div>
              <h3 className="text-xl font-bold text-white mb-2">Tierra</h3>
              <p className="text-gray-400">Conexión local. Transportistas reales que conocen cada camino de México.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-element-earth">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Próximos Eventos</h2>
              <p className="text-gray-400">No te pierdas nada. Reserva tu lugar hoy.</p>
            </div>
            <Link to="/events" className="text-mexico-pink font-semibold hover:text-white transition">Ver todos &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} onClick={() => window.location.hash = `#/events`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;