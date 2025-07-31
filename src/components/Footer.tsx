import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-20">
      <div className="w-full h-px bg-border"></div>
      <div className="py-8 text-center">
        <div className="text-2xl font-bold text-primary mb-4">
          Advanced Care Technologies
        </div>
        <Link 
          to="/legal" 
          className="text-muted-foreground hover:text-primary transition-colors underline"
        >
          {t('footer.legal')}
        </Link>
        <div className="text-xs text-muted-foreground mt-4">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;