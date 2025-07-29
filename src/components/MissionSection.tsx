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

          <div className="relative">
            <img 
              src="/lovable-uploads/d817f9f3-7160-49f9-979d-b6c826da9792.png" 
              alt="Mission cards overview" 
              className="w-full h-auto"
            />
            
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 w-full max-w-5xl px-8">
                <div className="text-center">
                  <div className="bg-blue-600 rounded-lg p-6 mx-4">
                    <p className="text-yellow-400 text-xl font-nunito font-bold">
                      {t('mission.card1')}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 rounded-lg p-6 mx-4">
                    <p className="text-yellow-400 text-xl font-nunito font-bold">
                      {t('mission.card2')}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 rounded-lg p-6 mx-4">
                    <p className="text-yellow-400 text-xl font-nunito font-bold">
                      {t('mission.card3')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;