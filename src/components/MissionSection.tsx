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

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 2 - Restore sensations */}
            <div className="relative">
              {/* Image centrée dans l'espace vide avec bulle */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-40 h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img src="/lovable-uploads/01d5f442-ef93-4ae5-afd6-22f7a14b8874.png" alt="Hand with touch indicators" className="w-20 h-20 object-contain" />
                </div>
              </div>
              
              {/* Carte rectangulaire */}
              <div className="bg-primary rounded-3xl text-center p-8 pt-24 h-64 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Restore sensations
                </h3>
                
                
              </div>
            </div>

            {/* Card 3 - Regain balance */}
            <div className="relative">
              {/* Image centrée dans l'espace vide avec bulle */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-40 h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img src="/lovable-uploads/256dbbef-0449-4b77-9553-14a9e661aa40.png" alt="Person falling illustration" className="w-20 h-20 object-contain" />
                </div>
              </div>
              
              {/* Carte rectangulaire */}
              <div className="bg-primary rounded-3xl text-center p-8 pt-24 h-64 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Regain balance
                </h3>
                
                
              </div>
            </div>

            {/* Card 1 - Prevent the risk */}
            <div className="relative">
              {/* Image centrée dans l'espace vide avec bulle */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-40 h-28 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img src="/lovable-uploads/aa587c8d-a4f0-43f3-b386-85ba4185486a.png" alt="Foot with pain indicators" className="w-20 h-20 object-contain" />
                </div>
              </div>
              
              {/* Carte rectangulaire */}
              <div className="bg-primary rounded-3xl text-center p-8 pt-24 h-64 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Prevent the risk of<br />
                  injuries and pain
                </h3>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;