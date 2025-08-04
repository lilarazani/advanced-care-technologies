import prostheticArm from "@/assets/prosthetic-arm.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionSection = () => {
  const { t } = useLanguage();

  return <section id="solution" className="py-20" style={{
    backgroundColor: '#fff9f3'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-4">
            {t('solution.title')}
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-accent text-center mb-8">
            {t('solution.subtitle')}
          </p>

          {/* Digi'Skin Logo */}
          <div className="flex justify-center mb-4 md:mb-8 relative -mt-2 md:-mt-4">
            <img 
              src="/lovable-uploads/c990606f-f755-4fe9-b6f8-90826a8b38bc.png" 
              alt="Digi'Skin Logo" 
              className="h-32 md:h-48 lg:h-64 xl:h-80"
            />
          </div>

          {/* Prosthetic Hand Image */}
          <div className="flex justify-center -mt-16 md:-mt-32 lg:-mt-40 -ml-2 md:-ml-4 lg:-ml-8">
            <img 
              src="/lovable-uploads/a9ed14e7-ac01-4937-9270-2d97f4339e81.png" 
              alt="Prosthetic Hand with Haptic Technology" 
              className="max-w-full md:max-w-3xl lg:max-w-4xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;