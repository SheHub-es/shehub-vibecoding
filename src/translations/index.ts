
import { TranslationObject } from './types';
import { navbarTranslations } from './navbar';
import { footerTranslations } from './footer';
import { heroTranslations } from './hero';
import { featuresTranslations } from './features';
import { projectsTranslations } from './projects';
import { mentorshipTranslations } from './mentorship';
import { waitlistTranslations } from './waitlist';
import { toastTranslations } from './toast';

// Combine all translations
const translations: Record<string, Record<string, string>> = {
  ...navbarTranslations,
  ...footerTranslations,
  ...heroTranslations,
  ...featuresTranslations,
  ...projectsTranslations,
  ...mentorshipTranslations,
  ...waitlistTranslations,
  ...toastTranslations,
};

export { translations, TranslationObject };
export type { Language } from './types';
