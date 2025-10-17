import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import projectImage from "@/assets/tree-plant.jpg";

export const ForProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* First Section - About Style */}
      <section className="py-24 bg-background mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                We are actively taking on new founding projects
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Are you running a landowner looking to fund a wildlife conservation project?
                </p>
                <p>
                  We're building a platform to connect high-impact conservation projects with passionate supporters who want to make a real difference for wildlife and ecosystems.
                </p>
                <p>
                  Through rigorous vetting, transparent monitoring, and engaged community building, we help projects access sustainable funding while delivering measurable impact.
                </p>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img 
                src={projectImage} 
                alt="Conservation project" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Projects Style */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            For Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We are actively taking on new founding projects across a wide range of scales and types, from estates to agriculture, rewilding to focused conservation.
          </p>
          
          <div className="mt-16 max-w-2xl mx-auto bg-background/50 backdrop-blur-sm rounded-lg p-12 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Register Your Interest
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to talk and explore if we can help fund your project
            </p>
            <Button 
              size="lg"
              style={{backgroundColor: '#264831', color: '#ffffff'}}
              className="hover:opacity-90"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
