export enum ElementType {
  FIRE = 'Fuego', // Pasión, Conciertos
  WATER = 'Agua', // Fluidez, Transporte
  AIR = 'Aire',   // Rapidez, Tecnología
  EARTH = 'Tierra' // Destino, Seguridad
}

export interface TransportProvider {
  id: string;
  name: string;
  rating: number;
  baseCity: string;
  vehicleTypes: string[];
  logoUrl: string;
  isPartner: boolean;
  description: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location: string; // Venue
  city: string;
  state: string;
  imageUrl: string;
  description: string;
  elementType: ElementType;
  availableProviders: string[]; // IDs of providers
}

export interface BlogPost {
  id: string;
  title: string;
  content: string; // Markdown or HTML string
  imageUrl: string;
  date: string;
  tags: string[];
  relatedEventId?: string;
}

export interface GenerateBlogParams {
  event: Event;
  focusKeywords: string[];
}