import React from 'react';
import { Event, ElementType } from '../types';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const getElementColor = (type: ElementType) => {
    switch (type) {
      case ElementType.FIRE: return 'border-red-500 shadow-red-900/20';
      case ElementType.WATER: return 'border-blue-500 shadow-blue-900/20';
      case ElementType.AIR: return 'border-gray-200 shadow-gray-100/20';
      case ElementType.EARTH: return 'border-stone-600 shadow-stone-800/20';
      default: return 'border-gray-500';
    }
  };

  const getElementIcon = (type: ElementType) => {
    switch(type) {
      case ElementType.FIRE: return '🔥';
      case ElementType.WATER: return '💧';
      case ElementType.AIR: return '💨';
      case ElementType.EARTH: return '⛰️';
    }
  }

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl bg-stone-900 border ${getElementColor(event.elementType)} shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer`}
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden relative">
         <img 
          src={event.imageUrl} 
          alt={event.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
        />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur px-2 py-1 rounded-full text-xs font-bold text-white border border-white/20">
          {getElementIcon(event.elementType)} {event.elementType}
        </div>
      </div>
      <div className="p-5">
        <div className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">{event.city}, {event.state}</div>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-mexico-pink transition-colors">{event.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>
        <div className="flex justify-between items-center border-t border-white/10 pt-4">
            <span className="text-sm text-gray-300 font-mono">{event.date}</span>
            <span className="text-mexico-pink text-sm font-semibold hover:underline">Ver Transporte &rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;