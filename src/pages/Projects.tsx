import { Navigation } from "@/components/Navigation";
import { DemoBanner } from "@/components/DemoBanner";
import { mockProjects } from "@/data/mockProjects";
import { Link } from "react-router-dom";
import { 
  getProjectFundingPercentage, 
  getHabitatTypeLabel, 
  getProjectTypeLabel,
  formatCurrency,
  getProjectFundingTarget
} from "@/types/project";
import { MapPin, Calendar, Target } from "lucide-react";

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DemoBanner />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover verified conservation projects making real impact across the UK. 
            Every contribution directly funds habitat restoration and wildlife protection.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {mockProjects.map((project) => {
              const fundingPercentage = getProjectFundingPercentage(project);
              const fundingTarget = getProjectFundingTarget(project);
              
              return (
                <Link 
                  key={project.id} 
                  to={`/projects/${project.id}`}
                  className="block group"
                >
                  <div className="grid md:grid-cols-[400px_1fr] gap-8 bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Image */}
                    <div className="relative h-[300px] md:h-auto">
                      <img 
                        src={project.primary_image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Funding Progress Donut - Overlay on image */}
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-16 h-16 transform -rotate-90">
                          {/* Background circle */}
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="none"
                            className="text-muted"
                          />
                          {/* Progress circle */}
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 28}`}
                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - fundingPercentage / 100)}`}
                            className="text-primary transition-all duration-300"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h2>

                        {/* Summary */}
                        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                          {project.summary}
                        </p>

                        {/* Key Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {/* Habitat Type */}
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                              Habitat
                            </p>
                            <p className="text-base text-foreground font-medium">
                              {getHabitatTypeLabel(project.habitat_type)}
                            </p>
                          </div>

                          {/* Project Type */}
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                              Project Type
                            </p>
                            <p className="text-base text-foreground font-medium">
                              {getProjectTypeLabel(project.project_type)}
                            </p>
                          </div>

                          {/* Location */}
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              Location
                            </p>
                            <p className="text-base text-foreground font-medium">
                              {project.location.region}
                            </p>
                          </div>

                          {/* Duration */}
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Duration
                            </p>
                            <p className="text-base text-foreground font-medium">
                              {project.duration.months} months
                            </p>
                          </div>

                          {/* Overall Project Size */}
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                              Overall Project Size
                            </p>
                            <p className="text-base text-foreground font-medium">
                              {project.lot_definition.size * project.funding.total_lots} {project.lot_definition.unit}
                            </p>
                          </div>

                          {/* Funding Target */}
                          <div>
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1">
                              <Target className="w-3 h-3" />
                              Target
                            </p>
                            <p className="text-base text-foreground font-medium">
                              {formatCurrency(fundingTarget)}
                            </p>
                          </div>
                        </div>

                        {/* View Project Link */}
                        <div className="mt-6 pt-6 border-t border-border">
                          <span className="text-primary font-semibold group-hover:underline">
                            View Project Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
