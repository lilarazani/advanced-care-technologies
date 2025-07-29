const NumbersSection = () => {
  return <section className="py-20" style={{
    backgroundColor: '#fff9f3'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-20">
            In numbers
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            {/* Statistic 1 */}
            <div className="text-center flex-1">
              <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">
                10%
              </div>
              <p className="text-xl text-primary/70">
                of global population have<br />
                sensory loss
              </p>
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
              <p className="text-xl text-primary/70">
                of cases associated with<br />
                chronic pain
              </p>
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
               <div className="text-6xl lg:text-8xl font-bold text-primary mb-4 min-h-[6rem] lg:min-h-[8rem] flex items-center justify-center">
                 €15,000
               </div>
              <p className="text-xl text-primary/70">The average cost 
per patient</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NumbersSection;