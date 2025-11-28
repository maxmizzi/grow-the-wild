import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpeciesCard } from "../types/species";
import { getStatusColor } from "../data/mockSpecies";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface SpeciesCardsProps {
  discovered: SpeciesCard[];
  locked: SpeciesCard[];
  totalSpecies: number;
  isMobile?: boolean;
}

export const SpeciesCards = ({ discovered }: SpeciesCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<SpeciesCard | null>(null);
  
  // All species are available
  const allSpecies = discovered.length > 0 ? discovered : [];
  const currentSpecies = allSpecies[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? allSpecies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === allSpecies.length - 1 ? 0 : prev + 1));
  };

  if (!currentSpecies) {
    return <div className="text-muted-foreground">No species available</div>;
  }

  return (
    <>
      <Card className="p-6 max-h-[800px] overflow-hidden flex flex-col">
        {/* Main Card Display with Side Navigation - Takes available space */}
        <div className="relative flex items-center justify-center gap-2 flex-1 min-h-0">
          
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="h-16 w-16 md:h-12 md:w-12 flex-shrink-0"
            style={{borderColor: '#264831', color: '#264831'}}
          >
            <ChevronLeft className="h-8 w-8 md:h-6 md:w-6" />
          </Button>

          {/* Card Image - clickable */}
          <div 
            className="relative cursor-pointer group flex-1 h-full"
            onClick={() => setSelectedCard(currentSpecies)}
          >
            <div className="h-full flex items-center justify-center">
              <div className="max-h-full w-full max-w-[85%] aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={currentSpecies.imageUrl} 
                  alt={currentSpecies.commonName}
                  className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x800/e8f5e9/264831?text=' + 
                      currentSpecies.commonName.replace(' ', '+');
                  }}
                />
              </div>
            </div>
            
            {/* Hover overlay hint */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-lg bg-black/50 px-4 py-2 rounded">
                Click to view details
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="h-16 w-16 md:h-12 md:w-12 flex-shrink-0"
            style={{borderColor: '#264831', color: '#264831'}}
          >
            <ChevronRight className="h-8 w-8 md:h-6 md:w-6" />
          </Button>
        </div>

        {/* Counter and Thumbnail Carousel - Fixed at bottom */}
        <div className="relative flex-shrink-0 mt-4">
          <div className="flex items-center justify-center mb-3">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {allSpecies.length}
            </span>
          </div>

          {/* Thumbnail Carousel */}
          <div className="relative">
            <div 
              className="overflow-x-auto -mx-2 px-2"
              style={{ 
                scrollBehavior: 'smooth',
                scrollbarWidth: 'thin',
                scrollbarColor: '#264831 #e8f5e9'
              }}
            >
              <div className="flex gap-2 pb-2" style={{ minWidth: 'max-content' }}>
                {allSpecies.map((species, index) => (
                  <div
                    key={species.id}
                    className={`flex-shrink-0 w-16 cursor-pointer transition-all ${
                      index === currentIndex 
                        ? 'ring-2 ring-primary scale-105' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="aspect-[3/4] rounded overflow-hidden">
                      <img 
                        src={species.imageUrl} 
                        alt={species.commonName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/80x107/e8f5e9/264831?text=?';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Card Detail Modal - Pops up on click */}
      {selectedCard && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <Card className="max-w-5xl w-full p-8 relative" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setSelectedCard(null)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Large Image */}
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={selectedCard.imageUrl} 
                  alt={selectedCard.commonName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x800/e8f5e9/264831?text=' + 
                      selectedCard.commonName.replace(' ', '+');
                  }}
                />
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-foreground mb-2">{selectedCard.commonName}</h3>
                <p className="text-base text-muted-foreground italic mb-6">{selectedCard.scientificName}</p>

                <div className="space-y-5 flex-1">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Conservation Status</p>
                    <Badge className={`text-sm ${getStatusColor(selectedCard.conservationStatus)}`}>
                      {selectedCard.conservationStatus}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Habitat</p>
                    <p className="text-base text-foreground">{selectedCard.habitat}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Fun Fact</p>
                    <p className="text-base text-foreground">{selectedCard.funFact}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Discovered</p>
                    <p className="text-base text-foreground">
                      {new Date(selectedCard.discoveredDate).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-6"
                  style={{borderColor: '#264831', color: '#264831'}}
                  onClick={() => setSelectedCard(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};


