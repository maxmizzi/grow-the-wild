import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { About } from "@/components/About";
import { NeedSection } from "@/components/NeedSection";
import { WhyContribute } from "@/components/WhyContribute";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProjectDashboard } from "@/components/ProjectDashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Approach />
      <About />
      <NeedSection />
      <WhyContribute />
      <ProjectsSection />
      <ProjectDashboard />
    </div>
  );
};

export default Index;
