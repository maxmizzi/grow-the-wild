import natureImage from "@/assets/nature-state.jpg";

export const NeedSection = () => {
  return (
    <section id="need" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img 
              src={natureImage} 
              alt="State of nature" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Need
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Urgency of Now
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our planet is facing an unprecedented biodiversity crisis. Species are disappearing at rates 1,000 times higher than natural extinction rates.
              </p>
              <p>
                Habitat loss, climate change, and human activities threaten ecosystems that have taken millions of years to develop. The time to act is now.
              </p>
              <p>
                Strategic conservation efforts, backed by dedicated funding and expert implementation, can reverse these trends and restore balance to our natural world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
