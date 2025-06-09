
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language');
    return (['es', 'en', 'ca'].includes(storedLanguage || '') ? storedLanguage : 'es') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

const t = (key: string): string => {
  const translationObj = translations as Record<string, Record<string, string>>;

  const validLang = ['es', 'en', 'ca'].includes(language) ? language : 'es';

  if (translationObj[key] && translationObj[key][validLang]) {
    return translationObj[key][validLang];
  }

  if (translationObj[key] && translationObj[key]['es']) {
    return translationObj[key]['es'];
  }

  console.warn(`⚠️ Missing translation for key: "${key}"`);
  return '';
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
