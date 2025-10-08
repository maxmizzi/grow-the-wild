import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { About } from "@/components/About";
import { NatureState } from "@/components/NatureState";
import { WhyContribute } from "@/components/WhyContribute";
import { ForProjects } from "@/components/ForProjects";
import { ProjectDashboard } from "@/components/ProjectDashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Approach />
      <About />
      <NatureState />
      <WhyContribute />
      <ForProjects />
      <ProjectDashboard />
    </div>
  );
};

export default Index;
