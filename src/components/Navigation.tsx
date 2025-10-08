import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Grow The Wild" className="h-12 w-auto" />
          <span className="text-xl font-bold text-foreground">Grow The Wild</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/#approach" className="text-foreground hover:text-primary transition-colors">Our Approach</a>
          <a href="/#need" className="text-foreground hover:text-primary transition-colors">Why Grow the Wild</a>
          <a href="/#dashboard" className="text-foreground hover:text-primary transition-colors">Get Started</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/for-projects">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              For Projects/Landowners
            </Button>
          </Link>
          <Button className="bg-foreground text-background hover:bg-foreground/90">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};
