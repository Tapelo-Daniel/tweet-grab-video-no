
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Place } from '@/data/mockPlaces';
import { divIcon } from 'leaflet';

interface MapMarkersProps {
  places: Place[];
  activeMarkerId: string | null;
  onMarkerClick: (id: string) => void;
}

const MapMarkers: React.FC<MapMarkersProps> = ({ 
  places, 
  activeMarkerId, 
  onMarkerClick 
}) => {
  return (
    <>
      {places.map((place) => (
        <Marker
          key={place.id}
          position={[place.position.lat, place.position.lng]}
          eventHandlers={{
            click: () => onMarkerClick(place.id),
          }}
          opacity={activeMarkerId === null || activeMarkerId === place.id ? 1 : 0.6}
        >
          <Popup>
            <div className="text-sm">
              <h3 className="font-semibold">{place.name}</h3>
              <p className="text-gray-600">{place.category}</p>
              {place.description && <p className="mt-1">{place.description}</p>}
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default MapMarkers;
