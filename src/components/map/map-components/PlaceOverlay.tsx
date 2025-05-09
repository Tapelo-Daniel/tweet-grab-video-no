
import React from 'react';
import { Place } from '@/data/mockPlaces';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface PlaceOverlayProps {
  selectedPlace: Place | null | undefined;
  showPopover: boolean;
  onOverlayClick: () => void;
  detailCardRef?: React.RefObject<HTMLDivElement>;
}

const PlaceOverlay: React.FC<PlaceOverlayProps> = ({ 
  selectedPlace, 
  showPopover, 
  onOverlayClick,
  detailCardRef
}) => {
  if (!selectedPlace || !showPopover) return null;
  
  return (
    <div className="absolute top-4 right-4 z-10 max-w-sm animate-in slide-in-from-right" ref={detailCardRef}>
      <Card className="shadow-lg border-2 border-primary/20">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-bold">{selectedPlace.name}</CardTitle>
            <Button variant="ghost" size="icon" onClick={onOverlayClick}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <span className="text-xs text-muted-foreground">{selectedPlace.category}</span>
        </CardHeader>
        <CardContent>
          {selectedPlace.description && (
            <p className="text-sm">{selectedPlace.description}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceOverlay;
