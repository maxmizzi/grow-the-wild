import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Grow The Wild" className="h-12 w-auto" />
          <span className="text-xl font-bold text-foreground">Grow The Wild</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#approach" className="text-foreground hover:text-primary transition-colors">Our Approach</a>
          <a href="/#need" className="text-foreground hover:text-primary transition-colors">Why Grow the Wild</a>
          <a href="/#dashboard" className="text-foreground hover:text-primary transition-colors">Get Started</a>
        </div>
        
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/for-projects">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              For Projects/Landowners
            </Button>
          </Link>
          <Button className="bg-foreground text-background hover:bg-foreground/90">
            Contact Us
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-[73px] border-t border-gray-200 z-40" 
          style={{
            backgroundColor: '#ffffff',
            opacity: '1',
            backdropFilter: 'none',
            background: '#ffffff'
          }}
        >
          <div className="flex flex-col items-center justify-start pt-8 pb-12 space-y-8" style={{backgroundColor: '#ffffff'}}>
            {/* Mobile Navigation Links */}
            <a 
              href="/#approach" 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Our Approach
            </a>
            <a 
              href="/#need" 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Why Grow the Wild
            </a>
            <a 
              href="/#dashboard" 
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Get Started
            </a>
            
            {/* Mobile Buttons */}
            <div className="flex flex-col items-center space-y-4 mt-8">
              <Link to="/for-projects" onClick={closeMenu}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
                  For Projects/Landowners
                </Button>
              </Link>
              <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
