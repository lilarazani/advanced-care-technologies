const PartnershipsSection = () => {
  const partners = [
    { name: "Novation Center IP Paris", logo: "🚀" },
    { name: "Handilab", logo: "🔬" },
    { name: "AGF", logo: "🏛️" },
    { name: "MyBubble Health", logo: "🫧" },
    { name: "Digital Medical Hub", logo: "⚕️" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-16">
            Partnerships & Collaborations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-6">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 text-3xl">
                  {partner.logo}
                </div>
                <span className="text-primary text-sm font-medium text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;