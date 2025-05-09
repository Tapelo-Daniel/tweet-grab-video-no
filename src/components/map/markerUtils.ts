
import L from 'leaflet';
import { MARKER_COLORS } from './mapConfig';

// Helper function to create custom marker icons based on business type
export const createMarkerIcon = (category: string, isUserBusiness: boolean = false, isActive: boolean = false) => {
  // Determine color based on business category or if it's user's business
  let color = MARKER_COLORS.DEFAULT;
  
  if (isUserBusiness) {
    color = MARKER_COLORS.USER_BUSINESS;
  } else if (category) {
    const normalizedCategory = category.toLowerCase().trim();
    
    if (normalizedCategory.includes('food') || normalizedCategory.includes('restaurant') || normalizedCategory.includes('cafe')) {
      color = MARKER_COLORS.RESTAURANT;
    } else if (normalizedCategory.includes('retail') || normalizedCategory.includes('shop')) {
      color = MARKER_COLORS.RETAIL;
    } else if (normalizedCategory.includes('tech') || normalizedCategory.includes('technology')) {
      color = MARKER_COLORS.TECH;
    } else if (normalizedCategory.includes('health') || normalizedCategory.includes('medical')) {
      color = MARKER_COLORS.HEALTH;
    }
  }
  
  // Create and return the icon
  return L.divIcon({
    className: `custom-marker-icon ${isActive ? 'active' : ''}`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
};
