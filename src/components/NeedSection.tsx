import natureImage from "@/assets/nature-state.webp";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { TrendingDown, TrendingUp } from "lucide-react";

const speciesData = [
  { category: "All Species", decline: 19, label: "Average decline" },
  { category: "Flowering Plants", decline: 54, label: "Distribution loss" },
  { category: "Birds", decline: 43, label: "At risk" },
  { category: "Amphibians & Reptiles", decline: 31, label: "At risk" },
];

const chartConfig = {
  decline: {
    label: "Decline %",
    color: "hsl(var(--chart-1))",
  },
};

export const NeedSection = () => {
  return (
    <section id="need" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Data Visualization (on desktop) */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src={natureImage} 
                alt="State of nature" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="bg-card p-4 sm:p-6 rounded-lg border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-foreground">UK Biodiversity Decline</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Data from State of Nature 2023 Report
              </p>
              
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={speciesData} margin={{ top: 20, right: 10, left: 0, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="category" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    className="text-xs"
                  />
                  <YAxis 
                    label={{ value: '% Decline/At Risk', angle: -90, position: 'insideLeft' }}
                    className="text-xs"
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    cursor={{ fill: 'hsl(var(--muted))' }}
                  />
                  <Bar 
                    dataKey="decline" 
                    fill="var(--color-decline)" 
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>

              <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div className="bg-muted/50 p-3 rounded">
                  <p className="text-2xl font-bold text-foreground">16%</p>
                  <p className="text-xs text-muted-foreground">Species at risk</p>
                </div>
                <div className="bg-primary/10 p-3 rounded">
                  <p className="text-2xl font-bold text-primary">150+</p>
                  <p className="text-xs text-muted-foreground">Species helped by conservation</p>
                </div>
              </div>
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

            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r">
                <p className="font-semibold text-destructive mb-2 flex items-center gap-2">
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
