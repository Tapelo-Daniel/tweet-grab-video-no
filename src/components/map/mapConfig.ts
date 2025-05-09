
export const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco
export const defaultZoom = 13;
export const minZoom = 3;
export const maxZoom = 18;

// Google Maps API Key (using the one from the configuration)
export const GOOGLE_MAPS_API_KEY = 'AIzaSyAp6za1pf11Tvq80kIRBpqqunXg4AcYa8s';

export const OSM_TILE_LAYER = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
};

// Default marker colors for different business types
export const MARKER_COLORS = {
  DEFAULT: 'blue',
  RESTAURANT: 'red',
  RETAIL: 'green',
  SERVICES: 'orange',
  TECH: 'purple',
  HEALTH: 'pink',
  ENTERTAINMENT: 'yellow',
  EDUCATION: 'teal',
  USER_BUSINESS: 'gold'
};
