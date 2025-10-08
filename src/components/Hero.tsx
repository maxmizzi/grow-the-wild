import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-forest.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 text-white animate-fade-in leading-tight">
          Grow The Wild
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto animate-fade-in font-light">
          Connect with impactful wildlife conservation projects and help restore our planet's biodiversity
        </p>
        <Button 
          size="lg"
          className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-medium px-10 py-6 text-base animate-fade-in transition-all"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};
