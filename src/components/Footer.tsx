import { Link } from "react-router-dom";

const Footer = () => {
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
          Legal Mention & CGU
        </Link>
        <div className="text-xs text-muted-foreground mt-4">
          © Advanced Care Technologies - 2025 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;