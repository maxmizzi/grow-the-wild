import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Grow The Wild" className="h-12 w-12" />
          <span className="text-xl font-bold text-foreground">Grow The Wild</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#work" className="text-foreground hover:text-primary transition-colors">Work</a>
          <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
          <a href="#blog" className="text-foreground hover:text-primary transition-colors">Blog</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        
        <Button className="bg-foreground text-background hover:bg-foreground/90">
          Contact Us
        </Button>
      </div>
    </nav>
  );
};
