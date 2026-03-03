import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

// URL del nuevo sitio web
const NEW_WEBSITE_URL = 'https://shehub-demo.vercel.app/';

const NewWebsiteBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-shehub-purple text-white shadow-lg h-auto md:h-20">
      <div className="container max-w-7xl mx-auto px-3 md:px-4 py-2.5 md:py-0 md:h-full flex items-center">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 w-full">
          <div className="flex items-start gap-2 md:gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 mt-1 md:mt-0">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-medium leading-snug md:leading-tight">
                <span className="font-bold">{t('banner.newWebsite.title')}</span>{' '}
                <span className="hidden md:inline">{t('banner.newWebsite.message')}</span>
                <span className="md:hidden">{t('banner.newWebsite.message').split('.')[0]}.</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <a
              href={NEW_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-3 md:px-4 py-1.5 md:py-2 bg-white text-shehub-purple rounded-full",
                "font-medium text-xs md:text-sm",
                "hover:bg-white/90 transition-colors",
                "flex items-center justify-center gap-1.5 md:gap-2",
                "whitespace-nowrap w-full md:w-auto"
              )}
              onClick={() => {
                if (typeof window !== "undefined" && typeof window.gtag === "function") {
                  window.gtag("event", "new_website_banner_click", {
                    event_category: "engagement",
                    event_label: "New Website Banner",
                  });
                }
              }}
            >
              {t('banner.newWebsite.button')}
              <ExternalLink size={14} className="md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWebsiteBanner;
