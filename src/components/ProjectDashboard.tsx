import { Button } from "@/components/ui/button";

export const ProjectDashboard = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Project Dashboard
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Our carefully curated collection of high-impact conservation projects will be launching soon!
        </p>
        
        <div className="mt-16 max-w-2xl mx-auto bg-background/10 backdrop-blur-sm rounded-lg p-12 border border-primary-foreground/20">
          <h3 className="text-2xl font-bold mb-4">
            Register Your Interest
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Be the first to know when new conservation opportunities go live. Join our community and start making an impact in 2025.
          </p>
          <Button 
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            I'm In
          </Button>
        </div>
      </div>
    </section>
  );
};
