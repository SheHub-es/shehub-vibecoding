import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

// URL del nuevo sitio web
const NEW_WEBSITE_URL = 'https://shehub-demo.vercel.app/';

const NewWebsiteBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-shehub-purple text-white shadow-lg h-16 md:h-20">
      <div className="container max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-medium leading-tight">
                <span className="font-bold">{t('banner.newWebsite.title')}</span>{' '}
                {t('banner.newWebsite.message')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={NEW_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-3 md:px-4 py-1.5 md:py-2 bg-white text-shehub-purple rounded-full",
                "font-medium text-xs md:text-sm",
                "hover:bg-white/90 transition-colors",
                "flex items-center gap-1.5 md:gap-2",
                "whitespace-nowrap"
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
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWebsiteBanner;
