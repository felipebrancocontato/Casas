export interface UnitTypology {
  id: string;
  name: string;
  badgeTag?: string;
  area: number; // in m²
  bedrooms: number;
  suites: number;
  parkingSpots: number;
  description: string;
  features: string[];
  startingPrice: string;
  floorPlanImage: string;
  hotspots: {
    title: string;
    description: string;
    x: number; // percentage
    y: number; // percentage
  }[];
}

export interface Amenity {
  id: string;
  title: string;
  category: 'wellness' | 'social' | 'work' | 'family';
  description: string;
  highlight: string;
}

export interface NearbyPoint {
  category: 'nature' | 'education' | 'dining' | 'shopping' | 'health';
  name: string;
  distance: string;
  highlight: string;
}

export interface Testimonial {
  name: string;
  role: string;
  unit: string;
  quote: string;
  outcome: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
