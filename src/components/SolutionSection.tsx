import prostheticArm from "@/assets/prosthetic-arm.jpg";
const SolutionSection = () => {
  return <section id="solution" className="py-20" style={{
    backgroundColor: '#fff9f3'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-8">
            Our solution
          </h2>
          
          <p className="text-2xl text-accent text-center mb-16">
            A disruptive innovation : an IoT device monitored by a software powered by AI
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Digi'Skin Logo */}
              <div className="flex items-center justify-center lg:justify-start mb-8">
                
              </div>
            </div>

            {/* Right image */}
            <div className="lg:w-1/2">
              <div className="relative">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;