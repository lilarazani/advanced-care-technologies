import hapticGlove from "@/assets/haptic-glove.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20" style={{ backgroundColor: '#fff9f3' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-16">
            {t('how.title')}
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left content */}
            <div className="lg:w-1/2 space-y-12">
              {/* Feature 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/fb792348-7ecf-4d83-b560-7e8eb02c71fd.png" 
                    alt="Sensor technology icon" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg text-primary">
                    {t('how.feature1')}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/c09d82d9-f58e-4f56-b022-99150078a50a.png" 
                    alt="Software technology icon" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg text-primary">
                    {t('how.feature2')}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/4b94403d-2e8b-4fc9-9db3-7ee3c3ddd54c.png" 
                    alt="Stimulation bracelet icon" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg text-primary">
                    {t('how.feature3')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/60009006-ed47-4032-af51-9dde975c325d.png" 
                  alt="Haptic glove with sensors"
                  className="w-4/5 h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;