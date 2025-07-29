import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20" style={{ backgroundColor: '#fff9f3' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
            Be a part of our vision
          </h2>
          
          <p className="text-xl text-primary/70">
            To learn more about our solution or find out about opportunities at Peekcell, please contact us at:
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;