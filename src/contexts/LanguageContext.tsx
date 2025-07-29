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
    'hero.description1': "Digi'Skin by Advanced Care Technologies is the haptic feedback device that restores sensations in the simplest way possible.",
    'hero.description2': 'It is based on a smart technology that combines embedded force sensors and real time processing powered by AI to provide accurate feedback.',
    
    // Mission Section
    'mission.title': "Our mission is to facilitate patients' daily lives and autonomy",
    'mission.subtitle': 'With haptic feedback, we aim to :',
    
    // Solution Section
    'solution.title': 'Our solution',
    'solution.subtitle': 'A disruptive innovation : an IoT device monitored by a software powered by AI',
    
    // Numbers Section
    'numbers.title': 'In numbers',
    'numbers.stat1': 'of global population have',
    'numbers.stat1.line2': 'sensory loss',
    'numbers.stat2': 'of cases associated with',
    'numbers.stat2.line2': 'chronic pain',
    'numbers.stat3': 'The average cost',
    'numbers.stat3.line2': 'per patient',
    
    // How It Works Section
    'how.title': 'How it works',
    'how.feature1': 'Embedded force sensors within gloves of silicone, collecting pressure informations',
    'how.feature2': "Softpower adjusting the haptic feedback signals in real-time based on the context of use or the user's sensory profile",
    'how.feature3': 'A stimulation bracelet attached to the arm and featuring haptic stimulation devices',
    
    // About Section
    'about.title': 'About us',
    
    // Partnerships Section
    'partnerships.title': 'Partnerships & Collaborations',
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.solution': 'Notre solution',
    'nav.about': 'À propos',
    'contact.us': 'Nous contacter',
    
    // Hero Section
    'hero.title': 'Première Interface',
    'hero.subtitle': 'Homme-Machine qui reconnecte le',
    'hero.highlight': 'corps au cerveau',
    'hero.description1': "Digi'Skin par Advanced Care Technologies est le dispositif de retour haptique qui restaure les sensations de la manière la plus simple possible.",
    'hero.description2': 'Il est basé sur une technologie intelligente qui combine des capteurs de force intégrés et un traitement en temps réel alimenté par l\'IA pour fournir un retour précis.',
    
    // Mission Section
    'mission.title': 'Notre mission est de faciliter la vie quotidienne et l\'autonomie des patients',
    'mission.subtitle': 'Avec le retour haptique, nous visons à :',
    
    // Solution Section
    'solution.title': 'Notre solution',
    'solution.subtitle': 'Une innovation disruptive : un dispositif IoT surveillé par un logiciel alimenté par l\'IA',
    
    // Numbers Section
    'numbers.title': 'En chiffres',
    'numbers.stat1': 'de la population mondiale ont',
    'numbers.stat1.line2': 'une perte sensorielle',
    'numbers.stat2': 'des cas associés à',
    'numbers.stat2.line2': 'des douleurs chroniques',
    'numbers.stat3': 'Le coût moyen',
    'numbers.stat3.line2': 'par patient',
    
    // How It Works Section
    'how.title': 'Comment ça marche',
    'how.feature1': 'Capteurs de force intégrés dans des gants en silicone, collectant les informations de pression',
    'how.feature2': 'Logiciel ajustant les signaux de retour haptique en temps réel selon le contexte d\'utilisation ou le profil sensoriel de l\'utilisateur',
    'how.feature3': 'Un bracelet de stimulation attaché au bras et équipé de dispositifs de stimulation haptique',
    
    // About Section
    'about.title': 'À propos de nous',
    
    // Partnerships Section
    'partnerships.title': 'Partenariats et Collaborations',
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