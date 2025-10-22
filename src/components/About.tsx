import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.webp";
import { RegisterInterestDialog } from "./RegisterInterestDialog";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Grow The Wild
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We're building a platform that connects passionate individuals with vetted, high-impact wildlife conservation projects around the world.
              </p>
              <p>
                Through our platform, you'll discover meaningful ways to support conservation, learn about ecosystems and species, and witness the tangible impact of your contributions.
              </p>
              <p>
                Every project is carefully curated, independently monitored, and regularly evaluated to ensure your support creates real, lasting change for wildlife.
              </p>
            </div>
            <RegisterInterestDialog>
              <Button 
                size="lg"
                style={{backgroundColor: '#264831', color: '#ffffff'}}
                className="mt-8 hover:opacity-90 px-8 py-4"
              >
                Register Interest
              </Button>
            </RegisterInterestDialog>
          </div>
          
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img 
              src={aboutImage} 
              alt="Wildlife conservation" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
