import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PartnershipsSection = () => {
  const { t } = useLanguage();

  const partnerLogos = [
    { src: "/lovable-uploads/8059dd74-cacf-414e-accb-6a25e8bdff65.png", alt: "Novation Center" },
    { src: "/lovable-uploads/5c170ef4-9498-4bf4-8b59-f07a9fbc7826.png", alt: "WILCO" },
    { src: "/lovable-uploads/3e46ed63-2fd2-46b7-8e0f-1e76fdaabfa5.png", alt: "Handilab" },
    { src: "/lovable-uploads/dfcd2f8c-ea59-4624-8987-582cb4fae005.png", alt: "IMT Starter" },
    { src: "/lovable-uploads/2c84308b-3953-46e2-99c9-f8350ad57565.png", alt: "Réseau Entreprendre Essonne" },
    { src: "/lovable-uploads/40c22245-fcd4-43aa-9ebe-6f8f9f62def0.png", alt: "IMPACT" },
    { src: "/lovable-uploads/ed495636-ff52-4ab6-a829-d6bb7370c1b1.png", alt: "BPI France" },
    { src: "/lovable-uploads/327de599-acb2-49fd-a13e-ad8e668a654d.png", alt: "La French Tech Paris-Saclay" },
    { src: "/lovable-uploads/87b56a7a-de88-4c7d-b6bc-cf00c109e62a.png", alt: "Women in Tech France" },
    { src: "/lovable-uploads/940fd5b1-3997-4852-9616-f5efa059b1df.png", alt: "She/EOs" }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#fff9f3' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            {t('partnerships.title')}
          </h2>
          <Carousel 
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partnerLogos.map((logo, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="p-4">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="w-full h-24 object-contain mx-auto"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;