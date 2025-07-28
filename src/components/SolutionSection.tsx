import prostheticArm from "@/assets/prosthetic-arm.jpg";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-8">
            Our solution
          </h2>
          
          <p className="text-xl text-accent text-center mb-16">
            A disruptive innovation : an IoT device monitored by a software powered by AI
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Digi'Skin Logo */}
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">D</span>
                  </div>
                  <div>
                    <div className="text-primary font-bold text-3xl">Digi'</div>
                    <div className="text-primary font-bold text-3xl -mt-2">Skin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src={prostheticArm} 
                  alt="Digi'Skin prosthetic device"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;