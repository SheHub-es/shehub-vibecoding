import { navbarTranslations } from "./navbar";
import { footerTranslations } from "./footer";
import { heroTranslations } from "./hero";
import { featuresTranslations } from "./features";
import { projectsTranslations } from "./projects";
import { mentorshipTranslations } from "./mentorship";
import { waitlistTranslations } from "./waitlist";
import { waitlistFormTranslations } from "./waitlist_form";
import { waitlistThanksTranslations } from "./waitlist_thanks";
import { toastTranslations } from "./toast";
import { whyShehubTranslations } from "./why_shehub";
import { howItWorksTranslations } from "./how_it_works";
import { forMentorsTranslations } from "./for_mentors";
import { faqTranslations } from "./faq";
import { impactTranslations } from "./impact";
import { htmlTranslations } from "./html_content";
import { legalNoticeTranslations } from "./legal_notice";
import { closedProjectsTranslations } from "./closed_projects";
import { sponsorsTranslations } from "./sponsors";
import { rolesTranslations } from "./roles_form";

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
  ...impactTranslations,
  ...waitlistFormTranslations,
  ...waitlistThanksTranslations,
  ...htmlTranslations,
  ...legalNoticeTranslations,
  ...closedProjectsTranslations,
  ...sponsorsTranslations,
  ...rolesTranslations,
};

export { translations };
export type { Language } from "./types";
export type { TranslationObject } from "./types";
