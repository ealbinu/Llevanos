import { Event, TransportProvider, ElementType, BlogPost } from './types';

export const PROVIDERS: TransportProvider[] = [
  {
    id: 'p1',
    name: 'Ruta Maya Express',
    rating: 4.8,
    baseCity: 'CDMX',
    vehicleTypes: ['Sprinter', 'Autobús'],
    logoUrl: 'https://picsum.photos/100/100?random=1',
    isPartner: true,
    description: 'Especialistas en viajes largos al sur de México.',
  },
  {
    id: 'p2',
    name: 'Norteños Travel',
    rating: 4.5,
    baseCity: 'Monterrey',
    vehicleTypes: ['Van', 'Sprinter'],
    logoUrl: 'https://picsum.photos/100/100?random=2',
    isPartner: true,
    description: 'Seguridad y confort para los festivales del norte.',
  },
  {
    id: 'p3',
    name: 'Bajio Tours',
    rating: 4.9,
    baseCity: 'Guadalajara',
    vehicleTypes: ['Autobús de Lujo'],
    logoUrl: 'https://picsum.photos/100/100?random=3',
    isPartner: true,
    description: 'La mejor opción para conectar con el centro del país.',
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    name: 'Corona Capital 2024',
    date: '2024-11-15',
    location: 'Autódromo Hermanos Rodríguez',
    city: 'CDMX',
    state: 'CDMX',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    description: 'El festival internacional más importante de México. Vive la música con intensidad.',
    elementType: ElementType.FIRE,
    availableProviders: ['p1', 'p3'],
  },
  {
    id: 'e2',
    name: 'Vive Latino',
    date: '2025-03-16',
    location: 'Foro Sol',
    city: 'CDMX',
    state: 'CDMX',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    description: 'Cultura, rock y unión latinoamericana en un solo lugar.',
    elementType: ElementType.EARTH,
    availableProviders: ['p1', 'p2', 'p3'],
  },
  {
    id: 'e3',
    name: 'Guelaguetza',
    date: '2025-07-20',
    location: 'Auditorio Guelaguetza',
    city: 'Oaxaca',
    state: 'Oaxaca',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    description: 'La máxima fiesta de los oaxaqueños. Tradición y color.',
    elementType: ElementType.AIR,
    availableProviders: ['p1'],
  },
  {
    id: 'e4',
    name: 'Festival Internacional del Globo',
    date: '2024-11-17',
    location: 'Parque Metropolitano',
    city: 'León',
    state: 'Guanajuato',
    imageUrl: 'https://picsum.photos/800/600?random=13',
    description: 'Un espectáculo visual en el cielo que no te puedes perder.',
    elementType: ElementType.AIR,
    availableProviders: ['p3', 'p2'],
  },
  {
    id: 'e5',
    name: 'Carnaval de Veracruz',
    date: '2025-06-25',
    location: 'Malecón',
    city: 'Veracruz',
    state: 'Veracruz',
    imageUrl: 'https://picsum.photos/800/600?random=14',
    description: 'El carnaval más alegre del mundo a orillas del mar.',
    elementType: ElementType.WATER,
    availableProviders: ['p1'],
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Consejos para sobrevivir a tu primer Corona Capital',
    content: 'Ir a un festival es una experiencia increíble, pero requiere preparación. Desde el calzado cómodo hasta planear tu regreso seguro con nuestros partners de transporte...',
    imageUrl: 'https://picsum.photos/800/400?random=20',
    date: '2024-10-01',
    tags: ['Consejos', 'Festivales', 'CDMX'],
    relatedEventId: 'e1'
  }
];