const MissionSection = () => {
  return <section className="py-20" style={{
    backgroundColor: '#fff9f3'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-8">
            Our mission is to facilitate patients' daily lives and autonomy
          </h2>
          
          <p className="text-xl text-primary/70 mb-16">
            With haptic feedback, we aim to :
          </p>

          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/63a87eb2-c5b8-4abe-82c6-030e3681e9a2.png" 
              alt="Mission cards overview" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;