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
            {/* Card 1 - Restore sensations */}
            <div className="relative">
              {/* Image qui dépasse de la carte */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <img src="/lovable-uploads/01d5f442-ef93-4ae5-afd6-22f7a14b8874.png" alt="Hand with touch indicators" className="w-16 h-16 object-contain" />
              </div>
              
              {/* Carte avec coins très arrondis */}
              <div className="bg-primary rounded-[2.5rem] text-center p-8 pt-16 h-48 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-accent">
                  Restore sensations
                </h3>
              </div>
            </div>

            {/* Card 2 - Regain balance */}
            <div className="relative">
              {/* Image qui dépasse de la carte */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <img src="/lovable-uploads/256dbbef-0449-4b77-9553-14a9e661aa40.png" alt="Person falling illustration" className="w-16 h-16 object-contain" />
              </div>
              
              {/* Carte avec coins très arrondis */}
              <div className="bg-primary rounded-[2.5rem] text-center p-8 pt-16 h-48 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-accent">
                  Regain balance
                </h3>
              </div>
            </div>

            {/* Card 3 - Prevent the risk */}
            <div className="relative">
              {/* Image qui dépasse de la carte */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                <img src="/lovable-uploads/aa587c8d-a4f0-43f3-b386-85ba4185486a.png" alt="Foot with pain indicators" className="w-16 h-16 object-contain" />
              </div>
              
              {/* Carte avec coins très arrondis */}
              <div className="bg-primary rounded-[2.5rem] text-center p-8 pt-16 h-48 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-accent">
                  Prevent the risk of pain<br />
                  and injuries
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MissionSection;