import needImage from "@/assets/need.webp";
import { TrendingDown, TrendingUp } from "lucide-react";

export const NeedSection = () => {
  return (
    <section id="need" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image (on desktop) */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img 
                src={needImage} 
                alt="Nature conservation" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#264831]/15"></div>
            </div>
          </div>

          {/* Right Column - Text Content (on desktop) */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Need
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                The State of UK Nature
              </h2>
            </div>

            <div className="space-y-8 text-base text-muted-foreground leading-relaxed">
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r">
                <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5" />
                  The Challenge
                </p>
                <p className="text-foreground">
                  <strong>1 in 6 species</strong> (16%) are at risk of being lost from Great Britain. 
                  Since 1970, species abundance has declined by <strong>19% on average</strong>, with 
                  intensive land management and climate change as primary drivers.
                </p>
              </div>

              <p>
                The State of Nature 2023 report reveals an urgent reality: our natural world is under unprecedented 
                pressure. From flowering plants losing more than half their distribution, to birds and amphibians 
                facing extinction risk, the data demands action.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r">
                <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  The Opportunity
                </p>
                <p className="text-foreground">
                  Conservation works. Targeted projects have created <strong>thousands of hectares</strong> of 
                  new habitats, directly benefiting over <strong>150 species</strong>. Strategic funding and 
                  expert implementation are reversing decline and restoring balance.
                </p>
              </div>

              <p className="text-lg font-medium text-foreground">
                Every project matters. With focused effort and community support, we can halt biodiversity loss, 
                restore vital habitats, and create a thriving natural world for future generations. The path forward 
                is clear—and together, we have the power to make it happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
