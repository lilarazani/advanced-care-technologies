const MissionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-8">
            Our mission is to is to facilitate patients'<br />
            daily lives and autonomy
          </h2>
          
          <p className="text-xl text-primary/70 mb-16">
            With haptic feedback, we aim to :
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative">
              <div className="bg-brand-purple rounded-3xl p-8 pt-16 text-left h-80">
                {/* Icon */}
                <div className="absolute -top-8 left-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🖐️</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-accent mb-4 text-center">
                  Prevent the risk of<br />
                  injuries and pain
                </h3>
                
                <p className="text-brand-purple-foreground text-lg">
                  Avoid amputation up to<br />
                  80% on diabetic foot
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative">
              <div className="bg-brand-purple rounded-3xl p-8 pt-16 text-left h-80">
                {/* Icon */}
                <div className="absolute -top-8 left-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Restore sensations
                </h3>
                
                <p className="text-brand-purple-foreground text-lg">
                  Prevent the 50% of patients<br />
                  that rejects protheses
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative">
              <div className="bg-brand-purple rounded-3xl p-8 pt-16 text-left h-80">
                {/* Icon */}
                <div className="absolute -top-8 left-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏃</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Regain balance
                </h3>
                
                <p className="text-brand-purple-foreground text-lg">
                  23% to 40% increase in the<br />
                  risk of falling among<br />
                  diabetic patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;