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
              src="/lovable-uploads/5f8b3639-372c-4e2a-8843-49b3da871352.png" 
              alt="Digi'Skin Logo" 
              className="h-24 lg:h-32"
            />
          </div>

          {/* Prosthetic Hand Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/dd00f25f-3c3b-4cfa-8f8a-25b78c9c5772.png" 
              alt="Prosthetic Hand with Haptic Technology" 
              className="max-w-md lg:max-w-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;