
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import PixelLogo from './PixelLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  return (
    <footer className={cn("py-16 md:py-20 bg-[#EAE4F9] text-gray-700", className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className={cn(
          "flex flex-col md:flex-row md:justify-between md:items-start",
          isMobile ? "items-center text-center" : "items-start text-left"
        )}>
          
          {/* Logo + Contact Info */}
          <div className="mb-10 md:mb-0 max-w-sm">
            <div className="mb-6">
              <PixelLogo className="h-12 text-gray-700" />
            </div>

            <div className="space-y-3 mb-6">
              <p className="flex items-center md:justify-start justify-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@shehub.es" className="hover:underline">info@shehub.es</a>
              </p>
              <p className="text-sm">{t('footer.based')}</p>
              <a href="https://www.shehub.es" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline block">
                www.shehub.es
              </a>
            </div>

            <div className="mb-8 md:mb-0">
              <p className="mb-3 text-sm">{t('footer.follow')}</p>
              <div className="flex items-center space-x-4 md:justify-start justify-center">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/10 hover:bg-gray-700/20 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/10 hover:bg-gray-700/20 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="max-w-3xl px-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-3">{t('footer.how')}</h4>
                <a href="#projects" className="text-gray-700/80 hover:text-gray-700 transition-colors">{t('footer.overview')}</a>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-3">{t('footer.faq.title')}</h4>
                <a href="#faq" className="text-gray-700/80 hover:text-gray-700 transition-colors">{t('footer.faq.questions')}</a>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-3">{t('footer.why')}</h4>
                <a href="#why" className="text-gray-700/80 hover:text-gray-700 transition-colors">{t('footer.mission')}</a>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-3">{t('footer.mentors.title')}</h4>
                <a href="#mentorship" className="text-gray-700/80 hover:text-gray-700 transition-colors">{t('footer.mentors.involved')}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={cn("mt-12 text-sm text-gray-700/70", isMobile ? "text-center" : "text-left")}>
          <p>&copy; {new Date().getFullYear()} SheHub. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
