const heroImage = "/lovable-uploads/93910807-de01-47c7-a89b-ccec13fa90db.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
            First Human Machine<br />
            Interface that reconnects the<br />
            <span className="text-primary">body to the brain</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-primary/80">
            <p>
              Digi'Skin by Advanced Care Technologies is the haptic feedback device that improves the 
              motor control of prostheses and restores sensations in the simplest way possible.
            </p>
            
            <p>
              It is based on a smart technology that combines embedded force sensors and real time 
              processing powered by AI to provide accurate feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;