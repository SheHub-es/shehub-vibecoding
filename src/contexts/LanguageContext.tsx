
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get the language from localStorage, default to Spanish
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage as Language) || 'es';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Also update the html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Helper function to get translations
  const t = (key: string): string => {
    // Type assertion to help TypeScript understand our structure
    const translationObj = translations as Record<string, Record<string, string>>;
    
    if (translationObj[key] && translationObj[key][language]) {
      return translationObj[key][language];
    }
    
    // Fallback to Spanish if translation is missing
    if (translationObj[key] && translationObj[key]['es']) {
      return translationObj[key]['es'];
    }
    
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
