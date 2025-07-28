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
              {/* Image positionnée dans la découpe */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/312ce483-5bd0-4386-bba0-b0adf18c5444.png"
                    alt="Foot with pain indicators"
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>
              
              {/* Carte avec découpe en haut */}
              <div className="bg-brand-purple rounded-3xl text-center h-72 flex flex-col justify-center pt-16 px-6 relative"
                   style={{
                     clipPath: 'polygon(0% 15%, 35% 15%, 50% 0%, 65% 15%, 100% 15%, 100% 100%, 0% 100%)'
                   }}>
                
                <h3 className="text-3xl font-bold text-accent mb-4 text-center">
                  Prevent the risk of<br />
                  injuries and pain
                </h3>
                
                <p className="text-brand-purple-foreground text-lg text-center">
                  Avoid amputation up to<br />
                  80% on diabetic foot
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative">
              <div className="bg-brand-purple rounded-3xl p-6 pt-14 text-center h-72 flex flex-col justify-center">
                {/* Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/01d5f442-ef93-4ae5-afd6-22f7a14b8874.png"
                      alt="Hand with touch indicators"
                      className="w-16 h-16 object-contain"
                      style={{ 
                        mixBlendMode: 'multiply',
                        filter: 'brightness(1.2)'
                      }}
                    />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-accent mb-4 text-center">
                  Restore sensations
                </h3>
                
                <p className="text-brand-purple-foreground text-lg text-center">
                  Prevent the 50% of patients<br />
                  that rejects protheses
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative">
              <div className="bg-brand-purple rounded-3xl p-6 pt-14 text-center h-72 flex flex-col justify-center">
                {/* Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/256dbbef-0449-4b77-9553-14a9e661aa40.png"
                      alt="Person falling illustration"
                      className="w-16 h-16 object-contain"
                      style={{ 
                        mixBlendMode: 'multiply',
                        filter: 'brightness(1.2)'
                      }}
                    />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-accent mb-4 text-center">
                  Regain balance
                </h3>
                
                <p className="text-brand-purple-foreground text-lg text-center">
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