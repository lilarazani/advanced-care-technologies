import prostheticArm from "@/assets/prosthetic-arm.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionSection = () => {
  const { t } = useLanguage();

  return <section id="solution" className="py-20" style={{
    backgroundColor: '#fff9f3'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-4">
            {t('solution.title')}
          </h2>
          
          <p className="text-2xl text-accent text-center mb-8">
            {t('solution.subtitle')}
          </p>

          {/* Digi'Skin Logo */}
          <div className="flex justify-center mb-8 relative -mt-4">
            <img 
              src="/lovable-uploads/c990606f-f755-4fe9-b6f8-90826a8b38bc.png" 
              alt="Digi'Skin Logo" 
              className="h-48 lg:h-56"
            />
          </div>

          {/* Prosthetic Hand Image */}
          <div className="flex justify-center -mt-32 -ml-8">
            <img 
              src="/lovable-uploads/e44856a1-5d9b-4726-8dfc-a4924ccfaf6c.png" 
              alt="Prosthetic Hand with Haptic Technology" 
              className="max-w-4xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;