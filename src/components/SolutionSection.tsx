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

          {/* Digi'Skin Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/c990606f-f755-4fe9-b6f8-90826a8b38bc.png" 
              alt="Digi'Skin Logo" 
              className="h-24 lg:h-32"
            />
          </div>

          {/* Prosthetic Hand Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/13d843d7-b713-46d6-8e55-cd85095d6073.png" 
              alt="Prosthetic Hand with Haptic Technology" 
              className="max-w-md lg:max-w-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;