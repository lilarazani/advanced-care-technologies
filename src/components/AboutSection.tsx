const AboutSection = () => {
  const teamMembers = [{
    name: "Gabriel ELEUTERIO",
    role: "CEO & cofounder",
    title: "CEO & cofounder",
    qualifications: ["Biotechnology Engineer (Sup'Biotech)", "ESME - Specialized Master in Digital and Biotechnology (Robotics)", "Inventor of sensory restitution technology: Digi'Skin"]
  }, {
    name: "Manon Frajman",
    role: "COO & cofounder",
    title: "COO & cofounder",
    qualifications: ["Biotechnology Engineer (Sup'Biotech)", "Product Manager and Clinical Project Manager in Medical Device Startups", "Self-employed: drafting of financing applications"]
  }, {
    name: "Edward De Keating - Hart",
    role: "CMO & cofounder",
    title: "CMO & cofounder",
    qualifications: ["Orthopedic Surgeon", "Member of the French Society of Orthopaedic and Traumatological Surgery (SOFCOT)", "Associate member of the French Society of Hand Surgery (SFCM)"]
  }];
  return <section id="about" className="py-20" style={{
    backgroundColor: '#fff9f3'
  }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            About us
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => {
              const imageUrls = [
                "/lovable-uploads/116b89e6-179c-4d47-ab17-025d9033e872.png",
                "/lovable-uploads/20cc7460-335d-4808-89b0-3be3dcc7f99c.png", 
                "/lovable-uploads/42d09106-1154-434d-9dbf-44ac439b2b2f.png"
              ];
              
              return (
                <div key={index} className="text-center">
                  {/* Profile Image */}
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
                    <img 
                      src={imageUrls[index]} 
                      alt={`Photo de ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                {/* Name and Role */}
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <div className="text-xl text-accent font-semibold mb-6">
                  {member.title}
                </div>

                {/* Qualifications */}
                <ul className="text-left space-y-2 text-primary/80">
                  {member.qualifications.map((qualification, qIndex) => (
                    <li key={qIndex} className="flex items-start">
                      <span className="text-accent mr-2 flex-shrink-0">•</span>
                      {qualification}
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;