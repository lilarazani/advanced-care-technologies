import { useLanguage } from "@/contexts/LanguageContext";

const NumbersSection = () => {
  const { t } = useLanguage();

  return <section className="py-20" style={{
    backgroundColor: '#fff9f3'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-20 text-primary">
            {t('numbers.title')}
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            {/* Statistic 1 */}
            <div className="text-center flex-1">
              <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">
                10%
              </div>
              <p className="text-xl" style={{ color: 'hsl(28, 95%, 65%)' }} dangerouslySetInnerHTML={{
                __html: `${t('numbers.stat1')}<br />${t('numbers.stat1.line2')}`
              }} />
            </div>

            {/* Separator */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-px h-32 bg-border"></div>
            </div>

            {/* Mobile separator */}
            <div className="md:hidden flex justify-center">
              <div className="h-px w-32 bg-border"></div>
            </div>

            {/* Statistic 2 */}
            <div className="text-center flex-1">
              <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">
                50%
              </div>
              <p className="text-xl" style={{ color: 'hsl(28, 95%, 65%)' }} dangerouslySetInnerHTML={{
                __html: `${t('numbers.stat2')}<br />${t('numbers.stat2.line2')}`
              }} />
            </div>

            {/* Separator */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-px h-32 bg-border"></div>
            </div>

            {/* Mobile separator */}
            <div className="md:hidden flex justify-center">
              <div className="h-px w-32 bg-border"></div>
            </div>

            {/* Statistic 3 */}
            <div className="text-center flex-1">
               <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">
                 €15k
               </div>
               <p className="text-xl" style={{ color: 'hsl(28, 95%, 65%)' }} dangerouslySetInnerHTML={{
                 __html: `${t('numbers.stat3')}<br />${t('numbers.stat3.line2')}`
               }} />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NumbersSection;