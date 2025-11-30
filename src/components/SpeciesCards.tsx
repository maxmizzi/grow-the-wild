import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SpeciesCard } from "../types/species";
import { getStatusColor } from "../data/mockSpecies";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface SpeciesCardsProps {
  discovered: SpeciesCard[];
  locked: SpeciesCard[];
  totalSpecies: number;
  isMobile?: boolean;
}

export const SpeciesCards = ({ discovered }: SpeciesCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<SpeciesCard | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // All species are available
  const allSpecies = discovered.length > 0 ? discovered : [];
  const currentSpecies = allSpecies[currentIndex];

  // Handle scroll for mobile carousel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Find which card is actually closest to the center of the viewport
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        const cards = Array.from(container.querySelectorAll('[data-card-index]'));
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        cards.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(containerCenter - cardCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        
        if (closestIndex !== currentIndex) {
          setCurrentIndex(closestIndex);
        }
      }, 100);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimeout);
      container.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex]);

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
        {/* Desktop: Main Card Display with Side Navigation */}
        <div className="hidden md:flex relative items-center justify-center gap-2 flex-1 min-h-0">
          
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

        {/* Mobile: Swipeable Carousel with Large Center Card */}
        <div className="md:hidden flex-1 min-h-0 flex flex-col">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-hide" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              height: 'calc(60vw * 4 / 3)', // Lock to largest card height (3:4 aspect ratio)
              scrollPaddingLeft: 'calc((100vw - 60vw) / 2)',
              scrollPaddingRight: 'calc((100vw - 60vw) / 2)'
            }}
          >
            <div className="flex items-center h-full" style={{ paddingLeft: 'calc((100vw - 60vw) / 2)', paddingRight: 'calc((100vw - 60vw) / 2)' }}>
              {allSpecies.map((species, index) => {
                const isCenter = index === currentIndex;
                return (
                  <div
                    key={species.id}
                    data-card-index={index}
                    className="flex-shrink-0 snap-center"
                    style={{ 
                      width: '60vw',
                      marginRight: index === allSpecies.length - 1 ? '0' : '0.5vw',
                      transition: 'all 0.3s ease-in-out'
                    }}
                    onClick={() => {
                      if (!isCenter) {
                        // Scroll this card into view
                        const card = document.querySelector(`[data-card-index="${index}"]`);
                        if (card) {
                          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        }
                      } else {
                        setSelectedCard(species);
                      }
                    }}
                  >
                    <div 
                      className="rounded-lg overflow-hidden cursor-pointer"
                      style={{
                        width: '100%',
                        aspectRatio: '3/4',
                        opacity: isCenter ? 1 : 0.5,
                        transform: isCenter ? 'scale(1)' : 'scale(0.75)',
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      <img 
                        src={species.imageUrl} 
                        alt={species.commonName}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/600x800/e8f5e9/264831?text=?';
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Counter for mobile */}
          <div className="flex items-center justify-center mt-4">
            <span className="text-base font-medium text-muted-foreground">
              {currentIndex + 1} / {allSpecies.length}
            </span>
          </div>
        </div>

        {/* Desktop: Counter and Thumbnail Carousel */}
        <div className="hidden md:block relative flex-shrink-0 mt-4">
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
          <Card 
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto relative" 
            onClick={() => setSelectedCard(null)}
          >
            <div className="p-4 md:p-8">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10"
                onClick={() => setSelectedCard(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{selectedCard.commonName}</h3>
                  <p className="text-sm md:text-base text-muted-foreground italic mb-4 md:mb-6">{selectedCard.scientificName}</p>

                  <div className="space-y-4 md:space-y-5 flex-1">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Conservation Status</p>
                      <Badge className={`text-sm ${getStatusColor(selectedCard.conservationStatus)}`}>
                        {selectedCard.conservationStatus}
                      </Badge>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Habitat</p>
                      <p className="text-sm md:text-base text-foreground">{selectedCard.habitat}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Fun Fact</p>
                      <p className="text-sm md:text-base text-foreground">{selectedCard.funFact}</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Discovered</p>
                      <p className="text-sm md:text-base text-foreground">
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
                    className="w-full mt-4 md:mt-6"
                    style={{borderColor: '#264831', color: '#264831'}}
                    onClick={() => setSelectedCard(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};


