const NumbersSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-20">
            In numbers
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Statistic 1 */}
            <div className="text-center">
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

            {/* Statistic 2 */}
            <div className="text-center">
              <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">
                50%
              </div>
              <p className="text-xl text-primary/70">
                of cases associated with<br />
                chronic pain
              </p>
            </div>

            {/* Mobile separator */}
            <div className="md:hidden flex justify-center">
              <div className="h-px w-32 bg-border"></div>
            </div>

            {/* Separator for desktop */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-px h-32 bg-border"></div>
            </div>

            {/* Statistic 3 */}
            <div className="text-center md:col-span-1">
              <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">
                €15,000
              </div>
              <p className="text-xl text-primary/70">
                The average cost per patient
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;