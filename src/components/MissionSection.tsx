import { useLanguage } from "@/contexts/LanguageContext";
const MissionSection = () => {
  const {
    t
  } = useLanguage();
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
            <img src="/lovable-uploads/f3d3e482-78a4-4579-81ba-7eb027d7ad54.png" alt="Mission cards overview" className="w-full h-auto -mt-8" />
            
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center mt-20 mx-0 px-0 py-[50px] my-[125px]">
              <div className="grid grid-cols-3 gap-16 w-full max-w-6xl px-8">
                <div className="text-center -ml-8 -mt-2">
                  <p style={{
                  color: '#f4a756'
                }} className="text-2xl font-bold text-[#f4a756] py-[45px]">
                    {t('mission.card1')}
                  </p>
                </div>
                <div className="text-center -mt-2">
                  <p style={{
                  color: '#f4a756'
                }} className="text-2xl font-bold text-[#f4a756] py-[45px]">
                    {t('mission.card2')}
                  </p>
                </div>
                <div className="text-center -mr-6 -mt-6">
                  <p style={{
                  color: '#f4a756'
                }} className="text-2xl font-bold whitespace-pre-line text-[#f4a756] py-[45px]">
                    {t('mission.card3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;