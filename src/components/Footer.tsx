
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
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
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          
          {/* Logo + Contact Info - Aligned Left */}
          <div className="mb-10 md:mb-0 flex flex-col items-center md:items-start">
            <div className="mb-6">
              <PixelLogo className="h-12 text-gray-700" />
            </div>

            <div className="mb-6">
              <p className="flex items-center justify-center md:justify-start">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@shehub.es" className="hover:underline">info@shehub.es</a>
              </p>
              <a href="https://www.shehub.es" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline block text-center md:text-left mt-2">
                www.shehub.es
              </a>
            </div>
          </div>

          {/* Navigation - Aligned Right */}
          <div className="flex flex-col items-center md:items-end">
            <nav className="flex flex-col items-center md:items-end space-y-4">
              <a href="#why" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t('footer.why')}
              </a>
              <a href="#how" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t('footer.how')}
              </a>
              <a href="#impact" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t('footer.impact')}
              </a>
              <a href="#mentorship" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t('footer.mentors.title')}
              </a>
              <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">
                {t('footer.faq.title')}
              </a>
            </nav>
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
