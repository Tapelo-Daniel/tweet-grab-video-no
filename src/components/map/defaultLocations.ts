
import { Place } from '@/data/mockPlaces';

// Default locations to show when no places are provided
export const defaultLocations: Place[] = [
  {
    id: 'default-1',
    name: 'Default Location 1',
    category: 'Default',
    description: 'This is a default location shown when no places are available.',
    position: {
      lat: 37.7749,
      lng: -122.4194
    }
  },
  {
    id: 'default-2',
    name: 'Default Location 2',
    category: 'Default',
    description: 'Another default location for demonstration purposes.',
    position: {
      lat: 37.7848,
      lng: -122.4294
    }
  }
];
