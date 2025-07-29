import { useLanguage } from "@/contexts/LanguageContext";

const MissionSection = () => {
  const { t } = useLanguage();

  return <section className="py-20" style={{
    backgroundColor: '#fff9f3'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-8">
            {t('mission.title')}
          </h2>
          
          <p className="text-xl text-primary/70 mb-16">
            {t('mission.subtitle')}
          </p>

          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/4c72dd85-717e-4b07-afc1-aad276e8565f.png" 
              alt="Mission cards overview" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;