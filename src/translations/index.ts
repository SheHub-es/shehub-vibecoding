
import { navbarTranslations } from './navbar';
import { footerTranslations } from './footer';
import { heroTranslations } from './hero';
import { featuresTranslations } from './features';
import { projectsTranslations } from './projects';
import { mentorshipTranslations } from './mentorship';
import { waitlistTranslations } from './waitlist';
import { toastTranslations } from './toast';
import { whyShehubTranslations } from './why_shehub';
import { howItWorksTranslations } from './how_it_works';
import { forMentorsTranslations } from './for_mentors';
import { faqTranslations } from './faq';

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
  ...whyShehubTranslations,
  ...howItWorksTranslations,
  ...forMentorsTranslations,
  ...faqTranslations,
};

export { translations };
export type { Language } from './types';
export type { TranslationObject } from './types';
