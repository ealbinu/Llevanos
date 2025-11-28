import React, { useState, useEffect } from 'react';
import { EVENTS, PROVIDERS } from '../constants';
import EventCard from '../components/EventCard';
import { Event, TransportProvider } from '../types';

const EventsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<string>('Todos');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Derive unique states from events
  const states = ['Todos', ...Array.from(new Set(EVENTS.map(e => e.state)))];

  const filteredEvents = EVENTS.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === 'Todos' || event.state === selectedState;
    return matchesSearch && matchesState;
  });

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="min-h-screen bg-stone-950 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header & Filters */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-white mb-6">Encuentra tu próximo destino</h1>
          
          <div className="flex flex-col md:flex-row gap-4 bg-stone-900/50 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-400 mb-2">Buscar evento o ciudad</label>
              <input
                type="text"
                placeholder="Ej. Corona Capital, Oaxaca..."
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-mexico-pink focus:outline-none placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-64">
              <label className="block text-sm font-medium text-gray-400 mb-2">Filtrar por Estado</label>
              <select
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-mexico-pink focus:outline-none"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <EventCard key={event.id} event={event} onClick={() => handleEventClick(event)} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-xl">No se encontraron eventos con esos criterios.</p>
            </div>
          )}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-stone-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-white/20 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="h-64 md:h-80 relative">
              <img src={selectedEvent.imageUrl} alt={selectedEvent.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:left-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedEvent.name}</h2>
                <p className="text-mexico-pink font-semibold text-lg">{selectedEvent.city}, {selectedEvent.state} • {selectedEvent.date}</p>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-4">Acerca del evento</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">{selectedEvent.description}</p>
                  
                  <h3 className="text-xl font-bold text-white mb-4">Opciones de Transporte Disponibles</h3>
                  <div className="space-y-4">
                    {selectedEvent.availableProviders.map(providerId => {
                      const provider = PROVIDERS.find(p => p.id === providerId);
                      if (!provider) return null;
                      return (
                        <div key={provider.id} className="bg-stone-800 p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-mexico-pink/50 transition">
                          <img src={provider.logoUrl} alt={provider.name} className="w-16 h-16 rounded-full object-cover bg-stone-700" />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="text-white font-bold">{provider.name}</h4>
                              {provider.isPartner && <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded border border-blue-500/30">Partner</span>}
                            </div>
                            <p className="text-sm text-gray-400">{provider.baseCity} • ⭐ {provider.rating}</p>
                            <div className="flex gap-2 mt-2">
                                {provider.vehicleTypes.map(v => (
                                    <span key={v} className="text-xs bg-stone-700 text-gray-300 px-2 py-0.5 rounded">{v}</span>
                                ))}
                            </div>
                          </div>
                          <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition">
                            Contactar
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="md:col-span-1">
                  <div className="bg-stone-800 p-6 rounded-xl sticky top-4">
                    <h3 className="text-lg font-bold text-white mb-4">Ubicación</h3>
                    <div className="aspect-square bg-stone-700 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative group">
                        {/* Placeholder for Map */}
                        <div className="absolute inset-0 bg-[url('https://picsum.photos/400/400?grayscale')] opacity-50 bg-cover"></div>
                        <span className="relative z-10 text-white font-semibold">Mapa Visual</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{selectedEvent.location}</p>
                    <button className="w-full bg-mexico-pink hover:bg-pink-700 text-white py-3 rounded-lg font-bold transition">
                        Ver en Mapas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsView;