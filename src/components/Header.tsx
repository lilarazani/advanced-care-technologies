import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/86495833-4816-48c6-b3d8-42dcdb33325b.png" 
              alt="Advanced Care Technologies"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary hover:text-accent transition-colors font-medium">
              {t('nav.home')}
            </a>
            <a href="#solution" className="text-primary hover:text-accent transition-colors font-medium">
              {t('nav.solution')}
            </a>
            <a href="#about" className="text-primary hover:text-accent transition-colors font-medium">
              {t('nav.about')}
            </a>
          </nav>

          {/* Right side - Language and Contact */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary">
              <a href="https://www.linkedin.com/company/digi-skin/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-accent transition-colors cursor-pointer" />
              </a>
              <button 
                onClick={() => setLanguage('en')}
                className={`hidden sm:inline cursor-pointer transition-colors ${language === 'en' ? 'text-accent font-bold' : 'hover:text-accent'}`}
              >
                En
              </button>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <button 
                onClick={() => setLanguage('fr')}
                className={`hidden sm:inline cursor-pointer transition-colors ${language === 'fr' ? 'text-accent font-bold' : 'hover:text-accent'}`}
              >
                Fr
              </button>
            </div>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('contact.us')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;