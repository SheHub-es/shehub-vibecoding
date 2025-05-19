
export type Language = 'es' | 'en' | 'ca';

export type TranslationObject = {
  [key: string]: {
    en: string;
    es: string;
    ca: string;
  };
};
