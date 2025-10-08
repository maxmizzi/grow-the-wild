export const Approach = () => {
  const approaches = [
    {
      title: "Collective Impact",
      description: "Harness the power of community funding to create lasting change for wildlife and wild places across the globe"
    },
    {
      title: "Education First",
      description: "Build deep connections with nature through engaging content, expert insights, and transformative learning experiences"
    },
    {
      title: "Measurable Outcomes",
      description: "Track real results through transparent project reporting, verified impact metrics, and tangible conservation wins"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Our Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building a Wilder Future Together
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {approach.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
