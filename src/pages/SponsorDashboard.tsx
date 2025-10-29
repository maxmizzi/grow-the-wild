import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockSponsorship } from "@/data/mockSponsorship";
import { Calendar, MapPin, Sprout, TrendingUp } from "lucide-react";
import { formatCurrency } from "@/types/project";
import { Link } from "react-router-dom";

// Simple markdown parser for bold (**text**) and italic (*text*)
function parseSimpleMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') // Bold
    .replace(/\*(.+?)\*/g, '<em>$1</em>'); // Italic
}

export const SponsorDashboard = () => {
  const { sponsorship, project, updates } = mockSponsorship;
  
  const yourContribution = (sponsorship.lot_count / project.total_lots) * 100;
  const totalAreaSponsored = sponsorship.lot_count * project.lot_size_sqm;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#264831'}}>
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2" style={{color: '#ffffff'}}>Your Dashboard</h1>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>Track your conservation impact and project updates</p>
          </div>

          {/* Active Sponsorship Overview */}
          <Card className="p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Sponsorships</p>
                <p className="text-3xl font-bold" style={{color: '#264831'}}>1</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Contribution</p>
                <p className="text-3xl font-bold" style={{color: '#264831'}}>
                  {formatCurrency(sponsorship.amount_paid)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Area Sponsored</p>
                <p className="text-3xl font-bold" style={{color: '#264831'}}>
                  {totalAreaSponsored} m²
                </p>
              </div>
            </div>
          </Card>

          {/* Project Card */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{color: '#ffffff'}}>Your Sponsored Project</h2>
            
            <Card className="overflow-hidden">
              <div className="md:flex">
                {/* Project Image */}
                <div className="md:w-1/3">
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Project Info */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.summary}</p>
                    </div>
                    <Badge variant="outline" style={{borderColor: '#264831', color: '#264831'}}>
                      Active
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Sprout className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.habitat_type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Sponsored {formatDate(sponsorship.timestamp)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {sponsorship.lot_count} lots ({totalAreaSponsored} m²)
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      Your contribution: <span className="font-medium" style={{color: '#264831'}}>
                        {yourContribution.toFixed(2)}%
                      </span> of this project
                    </p>
                    <Button 
                      variant="outline" 
                      style={{borderColor: '#264831', color: '#264831'}}
                      className="hover:bg-green-50"
                    >
                      View Full Project Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Updates */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold" style={{color: '#ffffff'}}>Project Updates</h2>
              <Badge variant="outline" style={{borderColor: 'rgba(255, 255, 255, 0.3)', color: '#ffffff'}}>{updates.length} updates</Badge>
            </div>

            <div className="space-y-6">
              {updates.map((update) => (
                <Card key={update.id} className="p-6">
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold text-foreground mb-1">{update.title}</h3>
                            <span className="text-sm text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                          </div>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(update.published_at)}
                            {update.visibility === 'sponsor_only' && (
                              <Badge variant="secondary" className="ml-2">Sponsor Only</Badge>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Highlights */}
                      {update.highlights && update.highlights.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {update.highlights.map((highlight, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              style={{borderColor: '#264831', color: '#264831'}}
                              className="font-normal"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </summary>

                    <div className="mt-4">
                      {/* Update Image */}
                      {update.media_url && (
                        <div className="mb-4">
                          <img 
                            src={update.media_url} 
                            alt={update.media_caption || update.title}
                            className="w-full max-w-md aspect-square object-cover rounded-lg"
                          />
                        </div>
                      )}
                      {update.media_caption && (
                        <p className="text-sm text-muted-foreground mb-4 italic">
                          {update.media_caption}
                        </p>
                      )}

                      {/* Update Body */}
                      <div className="prose prose-sm max-w-none">
                        <div 
                          className="text-muted-foreground whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(update.body) }}
                        />
                      </div>
                    </div>
                  </details>
                </Card>
              ))}
            </div>
          </div>

          {/* Empty State / CTA */}
          <div className="flex justify-center">
            <Card className="p-8 mt-8 text-center" style={{backgroundColor: '#e8f5e9', width: '65%'}}>
              <h3 className="text-xl font-bold mb-2" style={{color: '#264831'}}>Want to make more impact?</h3>
              <p className="mb-4" style={{color: '#264831', opacity: 0.8}}>
                Explore more conservation projects and expand your portfolio
              </p>
              <Link to="/projects">
                <Button 
                  size="lg"
                  style={{backgroundColor: '#264831', color: '#ffffff'}}
                  className="hover:opacity-90"
                >
                  Browse Projects
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
