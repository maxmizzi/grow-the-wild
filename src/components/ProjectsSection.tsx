import conservationImage from "@/assets/conservation-project.jpg";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img 
              src={conservationImage} 
              alt="Conservation project" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Our Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              For Conservation Projects
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Are you running a wildlife conservation project? We're building a platform that connects dedicated conservationists with supporters who care deeply about making a difference.
              </p>
              <p>
                Through rigorous vetting, ongoing monitoring, and transparent reporting, we help conservation projects access sustainable funding while building engaged communities around their work.
              </p>
              <p>
                Join our network of verified conservation initiatives and tap into a growing community of passionate supporters ready to fund meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
