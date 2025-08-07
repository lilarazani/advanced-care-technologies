import { useLanguage } from "@/contexts/LanguageContext";
const heroImage = "/lovable-uploads/93910807-de01-47c7-a89b-ccec13fa90db.png";
const HeroSection = () => {
  const {
    t
  } = useLanguage();
  return <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-primary">
            {t('hero.title')}<br />
            {t('hero.subtitle')} <span className="text-primary">{t('hero.highlight')}</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-primary/80">
            <p className="text-2xl">{t('hero.description1')}</p>
            
            <p className="text-2xl">{t('hero.description2')}</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;