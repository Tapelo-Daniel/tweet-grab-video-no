
export interface Position {
  lat: number;
  lng: number;
}

export interface Place {
  id: string;
  name: string;
  category: string;
  description?: string;
  position: Position;
  image?: string;
  address?: string;
  contact?: string;
  website?: string;
  createdAt?: string;
  updatedAt?: string;
  ownerId?: string;
  verified?: boolean;
}

// Mock places data
const mockPlaces: Place[] = [
  {
    id: '1',
    name: 'Coffee Shop',
    category: 'Food & Drink',
    description: 'A cozy coffee shop with great pastries.',
    position: { lat: 37.7749, lng: -122.4194 }
  },
  {
    id: '2',
    name: 'Tech Hub',
    category: 'Business',
    description: 'Co-working space for tech startups.',
    position: { lat: 37.7848, lng: -122.4294 }
  }
];

export default mockPlaces;
