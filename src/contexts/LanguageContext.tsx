import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.solution': 'Our solution',
    'nav.about': 'About us',
    'contact.us': 'Contact us',
    
    // Hero Section
    'hero.title': 'First Human Machine',
    'hero.subtitle': 'Interface that reconnects the',
    'hero.highlight': 'body to the brain',
    'hero.description1': "Digi'Skin by Advanced Care Technologies is a haptic feedback device that restores sensations in the simplest way possible.",
    'hero.description2': 'It is based on a smart technology that combines embedded force sensors and real time processing powered by AI to provide accurate feedback.',
    
    // Mission Section
    'mission.title': "Our mission is to facilitate patients' daily lives and autonomy",
    'mission.subtitle': 'With Digi\'Skin, we aim to :',
    'mission.card1': 'Restore sensations',
    'mission.card2': 'Regain balance',
    'mission.card3': 'Prevent pain and injuries',
    
    // Solution Section
    'solution.title': 'Our solution',
    'solution.subtitle': 'A disruptive innovation : an IoT device monitored by a software powered by AI',
    
    // Numbers Section
    'numbers.title': 'In numbers',
    'numbers.stat1': 'of global population have',
    'numbers.stat1.line2': '<span class="font-bold" style="color: hsl(28, 95%, 65%)">sensory loss</span>',
    'numbers.stat2': 'of cases associated with',
    'numbers.stat2.line2': '<span class="font-bold" style="color: hsl(28, 95%, 65%)">chronic pain</span>',
    'numbers.stat3': 'The average cost',
    'numbers.stat3.line2': '<span class="font-bold" style="color: hsl(28, 95%, 65%)">per patient</span>',
    
    // How It Works Section
    'how.title': 'How does it work?',
    'how.feature1': 'Embedded **force sensors**, collecting touch informations',
    'how.feature2': "**Software** adjusting the haptic feedback signals in **real-time** based on the context of use or the **user's sensory profile**",
    'how.feature3': 'A stimulation **armband** attached to the limb stimulating the **patient\'s sensory system**',
    
    // About Section
    'about.title': 'About us',
    'about.gabriel.name': 'Gabriel ELEUTERIO',
    'about.gabriel.role': 'CEO & cofounder',
    'about.gabriel.qualifications': 'Biotechnology Engineer (Sup\'Biotech) • ESME - Specialized Master in Digital and Biotechnology (Robotics) • Inventor of sensory restitution technology: Digi\'Skin',
    'about.manon.name': 'Manon Frajman',
    'about.manon.role': 'COO & cofounder',
    'about.manon.qualifications': 'Biotechnology Engineer (Sup\'Biotech) • Product Manager and Clinical Project Manager in Medical Device Startups • Self-employed: drafting of financing applications',
    'about.edward.name': 'Edward De Keating - Hart',
    'about.edward.role': 'Orthopedic Surgeon & cofounder',
    'about.edward.qualifications': 'Orthopedic Surgeon • Member of the French Society of Orthopaedic and Traumatological Surgery (SOFCOT) • Associate member of the French Society of Hand Surgery (SFCM)',
    
    // Partnerships Section
    'partnerships.title': 'Partnerships & Collaborations',
    
    // Contact Section
    'contact.title': 'Be a part of our vision',
    'contact.description': 'To learn more about our solution or find out about opportunities at Advanced Care Technologies, please contact us at:',
    
    // Footer
    'footer.legal': 'Legal Mention & CGU',
    'footer.copyright': '© Advanced Care Technologies - 2025 - All Rights Reserved',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.solution': 'Notre solution',
    'nav.about': 'À propos',
    'contact.us': 'Nous contacter',
    
    // Hero Section
    'hero.title': '1ère Interface',
    'hero.subtitle': 'Homme-Machine qui reconnecte',
    'hero.highlight': 'le corps au cerveau',
    'hero.description1': "Digi'Skin par Advanced Care Technologies est un dispositif de retour haptique qui restaure les sensations de la manière la plus simple possible.",
    'hero.description2': 'Il est basé sur une technologie intelligente qui combine des capteurs de force intégrés et un traitement en temps réel alimenté par l\'IA pour fournir un retour précis.',
    
    // Mission Section
    'mission.title': 'Notre mission est d\'améliorer la qualité de vie et l\'autonomie des patients',
    'mission.subtitle': 'Avec Digi\'Skin, nous visons à :',
    'mission.card1': 'Restaurer des sensations',
    'mission.card2': 'Retrouver l\'équilibre',
    'mission.card3': 'Éviter douleurs et blessures',
    
    // Solution Section
    'solution.title': 'Notre solution',
    'solution.subtitle': 'Une innovation de rupture : un dispositif IoT basé sur l\'IA',
    
    // Numbers Section
    'numbers.title': 'En chiffres',
    'numbers.stat1': 'de la population mondiale a',
    'numbers.stat1.line2': '<span class="font-bold" style="color: hsl(28, 95%, 65%)">une perte sensorielle</span>',
    'numbers.stat2': 'des cas associés à',
    'numbers.stat2.line2': '<span class="font-bold" style="color: hsl(28, 95%, 65%)">des douleurs chroniques</span>',
    'numbers.stat3': 'Le coût moyen',
    'numbers.stat3.line2': '<span class="font-bold" style="color: hsl(28, 95%, 65%)">par patient</span>',
    
    // How It Works Section
    'how.title': 'Comment ça marche ?',
    'how.feature1': 'Capteurs de force intégrés, collectant les informations du **toucher**',
    'how.feature2': '**Logiciel** transmettant les signaux en **temps réel** selon le contexte d\'utilisation ou le **profil sensoriel de l\'utilisateur**',
    'how.feature3': 'Un **brassard de stimulation** attaché au bras stimulant le **système sensitif du patient**',
    
    // About Section
    'about.title': 'À propos de nous',
    'about.gabriel.name': 'Gabriel ELEUTERIO',
    'about.gabriel.role': 'CEO & cofondateur',
    'about.gabriel.qualifications': 'Ingénieur en Biotechnologie (Sup\'Biotech) • ESME - Mastère Spécialisé en Numérique et Biotechnologie (Robotique) • Inventeur de la technologie de restitution sensorielle : Digi\'Skin',
    'about.manon.name': 'Manon Frajman',
    'about.manon.role': 'COO & cofondatrice',
    'about.manon.qualifications': 'Ingénieure en Biotechnologie (Sup\'Biotech) • Product Manager et Clinical Project Manager dans des startups de dispositifs médicaux • Auto-entrepreneur : rédaction de dossiers de financement',
    'about.edward.name': 'Edward De Keating - Hart',
    'about.edward.role': 'Chirurgien Orthopédiste & cofondateur',
    'about.edward.qualifications': 'Chirurgien Orthopédiste • Membre de la Société Française de Chirurgie Orthopédique et Traumatologique (SOFCOT) • Membre associé de la Société Française de Chirurgie de la Main (SFCM)',
    
    // Partnerships Section
    'partnerships.title': 'Partenariats et Collaborations',
    
    // Contact Section
    'contact.title': 'Rejoignez notre vision',
    'contact.description': 'Pour en savoir plus sur notre solution ou découvrir les opportunités chez Advanced Care Technologies, contactez-nous à :',
    
    // Footer
    'footer.legal': 'Mentions Légales & CGU',
    'footer.copyright': '© Advanced Care Technologies - 2025 - Tous Droits Réservés',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};