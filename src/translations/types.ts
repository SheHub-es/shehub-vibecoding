export type Language = 'es' | 'en' | 'cat';

export type TranslationObject = {
  [key: string]: {
    en: string;
    es: string;
    cat: string;
  };
};
