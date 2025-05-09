
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

interface MapViewUpdaterProps {
  center: LatLngTuple;
  zoom: number;
}

const MapViewUpdater: React.FC<MapViewUpdaterProps> = ({ center, zoom }) => {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [map, center, zoom]);
  
  return null;
};

export default MapViewUpdater;
