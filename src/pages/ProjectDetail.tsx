import { Navigation } from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { mockProjects } from "@/data/mockProjects";
import { 
  getProjectFundingPercentage, 
  getHabitatTypeLabel, 
  getProjectTypeLabel,
  formatCurrency,
  getProjectFundingTarget,
  getProjectFunded
} from "@/types/project";
import { MapPin, Calendar, Target, ArrowLeft, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const fundingPercentage = getProjectFundingPercentage(project);
  const fundingTarget = getProjectFundingTarget(project);
  const fundingRaised = getProjectFunded(project);
  const lotsRemaining = project.funding.total_lots - project.funding.lots_sponsored;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {getHabitatTypeLabel(project.habitat_type)}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-foreground text-sm font-semibold rounded-full">
                      {getProjectTypeLabel(project.project_type)}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {project.summary}
                  </p>
                </div>

                {/* Project Image */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={project.primary_image} 
                    alt={project.title}
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About This Project</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground whitespace-pre-line">
                    {project.description}
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Project Goals</h2>
                  <div className="space-y-4">
                    {project.goals.map((goal, index) => (
                      <div key={index} className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1">
                            {goal.status === 'completed' && (
                              <CheckCircle2 className="w-6 h-6 text-green-600" />
                            )}
                            {goal.status === 'in_progress' && (
                              <Clock className="w-6 h-6 text-primary" />
                            )}
                            {goal.status === 'pending' && (
                              <div className="w-6 h-6 rounded-full border-2 border-muted" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{goal.title}</h3>
                            <p className="text-muted-foreground mb-2">{goal.description}</p>
                            {goal.target_metric && (
                              <p className="text-sm text-primary font-medium">
                                Target: {goal.target_metric}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Location</h2>
                  <div className="bg-muted rounded-lg overflow-hidden" style={{ height: '400px' }}>
                    {/* Placeholder for map - will integrate actual map later */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-xl font-semibold text-foreground mb-2">
                          {project.location.region}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Interactive map coming soon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Funding Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card border border-border rounded-lg p-6 space-y-6">
                  {/* Funding Progress */}
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-3xl font-bold text-foreground">
                        {fundingPercentage.toFixed(0)}%
                      </span>
                      <span className="text-sm text-muted-foreground">funded</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-3 mb-4">
                      <div 
                        className="bg-primary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
                      />
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Raised:</span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(fundingRaised)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Target:</span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(fundingTarget)}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-border">
                        <span className="text-muted-foreground">Lots sponsored:</span>
                        <span className="font-semibold text-foreground">
                          {project.funding.lots_sponsored} / {project.funding.total_lots}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lots remaining:</span>
                        <span className="font-semibold text-primary">
                          {lotsRemaining}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lot Details */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-3">Sponsorship Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price per lot:</span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(project.funding.price_per_lot)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lot size:</span>
                        <span className="font-semibold text-foreground">
                          {project.lot_definition.size} {project.lot_definition.unit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="pt-6 border-t border-border space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-foreground">{project.location.region}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-foreground">{project.duration.months} month duration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-foreground">{project.goals.length} measurable goals</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="lg"
                    style={{backgroundColor: '#264831', color: '#ffffff'}}
                    className="w-full hover:opacity-90"
                  >
                    Sponsor This Project
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Sponsorship functionality coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
