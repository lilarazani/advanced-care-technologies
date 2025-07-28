const AboutSection = () => {
  const teamMembers = [
    {
      name: "Gabriel ELEUTERIO",
      role: "CEO & cofounder",
      title: "CEO & cofounder",
      qualifications: [
        "Biotechnology Engineer (Sup'Biotech)",
        "ESME - Specialized Master in Digital and Biotechnology (Robotics)",
        "Inventor of sensory restitution technology: Digi'Skin"
      ]
    },
    {
      name: "Manon Frajman",
      role: "COO & cofounder", 
      title: "COO & cofounder",
      qualifications: [
        "Biotechnology Engineer (Sup'Biotech)",
        "Product Manager and Clinical Project Manager in Medical Device Startups",
        "Self-employed: drafting of financing applications"
      ]
    },
    {
      name: "Edward De Keating - Hart",
      role: "CMO & cofounder",
      title: "CMO & cofounder", 
      qualifications: [
        "Orthopedic Surgeon",
        "Member of the French Society of Orthopaedic and Traumatological Surgery (SOFCOT)",
        "Associate member of the French Society of Hand Surgery (SFCM)"
      ]
    }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#fff9f3' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            About us
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                {/* Profile Image Placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center border-4 border-primary">
                  <span className="text-6xl text-primary">{member.name.charAt(0)}</span>
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
                      <span>{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;