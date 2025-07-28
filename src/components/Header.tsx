import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/278cbecf-6c07-428b-a940-7b9461ad811b.png" 
              alt="Advanced Care Technologies"
              className="h-12 w-auto"
              style={{ 
                backgroundColor: 'transparent',
                mixBlendMode: 'multiply',
                filter: 'brightness(1.2)'
              }}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary hover:text-accent transition-colors font-medium">
              Home
            </a>
            <a href="#solution" className="text-primary hover:text-accent transition-colors font-medium">
              Our solution
            </a>
            <a href="#about" className="text-primary hover:text-accent transition-colors font-medium">
              About us
            </a>
          </nav>

          {/* Right side - Language and Contact */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary">
              <a href="https://www.linkedin.com/company/digi-skin/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-accent transition-colors cursor-pointer" />
              </a>
              <span className="hidden sm:inline">En</span>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <span className="hidden sm:inline">Fr</span>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;