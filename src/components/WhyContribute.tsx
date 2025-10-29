import { Leaf, BookOpen, Target } from "lucide-react";
import wildlifeImage from "@/assets/wildlife.webp";

export const WhyContribute = () => {
  const reasons = [
    {
      icon: Leaf,
      title: "Protect Our Planet",
      description: "Directly fund initiatives that conserve critical habitats and protect endangered species"
    },
    {
      icon: BookOpen,
      title: "Learn & Connect",
      description: "Deepen your understanding of ecosystems, wildlife, and conservation through curated educational content"
    },
    {
      icon: Target,
      title: "See Real Impact",
      description: "Track project progress, receive updates, and witness the measurable outcomes of your contributions"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Why Contribute
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-12">
              Why Support Conservation Through Grow The Wild?
            </h2>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          
            <p className="text-muted-foreground leading-relaxed mt-8">
               Join our community of wildlife supporters! For the price of your weekly coffee you can sponsor and protect up to 1,000 m<sup>2</sup> of wildlife habitat. 
            </p>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <img 
              src={wildlifeImage} 
              alt="Wildlife" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#264831]/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
