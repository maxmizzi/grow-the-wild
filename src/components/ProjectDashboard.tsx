import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RegisterInterestDialog } from "./RegisterInterestDialog";

export const ProjectDashboard = () => {
  return (
    <section id="dashboard" className="py-24" style={{backgroundColor: '#264831', color: '#ffffff'}}>
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#ffffff'}}>
          Projects
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
          Our carefully curated collection of high-impact conservation projects will be launching soon...
        </p>
        <p className="text-base mb-8 max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
          Project explorer is currently in demo mode - check it out here to get an early look:

        </p>
        <Link to="/projects">
          <Button 
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Explore
          </Button>
        </Link>
        <div className="mt-16 max-w-2xl mx-auto rounded-lg p-12 border border-white/30" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
          <h3 className="text-2xl font-bold mb-4" style={{color: '#264831'}}>
            Register Your Interest
          </h3>
          <p className="text-lg mb-8" style={{color: '#333333'}}>
            Be the first to know when new conservation opportunities launch. Join our community now!
          </p>
          <RegisterInterestDialog>
            <Button 
              size="lg"
              style={{backgroundColor: '#264831', color: '#ffffff'}}
              className="hover:opacity-90"
            >
              I'm In
            </Button>
          </RegisterInterestDialog>
        </div>
      </div>
    </section>
  );
};
