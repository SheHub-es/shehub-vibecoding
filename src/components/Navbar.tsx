import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import PixelLogo from './PixelLogo';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8',
        scrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <HashLink smooth to="/#hero" className="flex items-center">
          <PixelLogo size="sm" />
        </HashLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <HashLink smooth to="/#features" className="text-foreground/80 hover:text-foreground font-medium transition-colors relative group">
            {t('nav.about')}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shehub-purple group-hover:w-full transition-all duration-300" />
          </HashLink>

          <HashLink smooth to="/#how-it-works" className="text-foreground/80 hover:text-foreground font-medium transition-colors relative group">
            {t('nav.projects')}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shehub-purple group-hover:w-full transition-all duration-300" />
          </HashLink>

          <HashLink smooth to="/#mentorship" className="text-foreground/80 hover:text-foreground font-medium transition-colors relative group">
            {t('nav.mentorship')}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shehub-purple group-hover:w-full transition-all duration-300" />
          </HashLink>

          <HashLink smooth to="/#faq" className="text-foreground/80 hover:text-foreground font-medium transition-colors relative group">
            {t('nav.faq')}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shehub-purple group-hover:w-full transition-all duration-300" />
          </HashLink>

          <LanguageToggle className="mr-4" />

          <div className="flex space-x-4">
            <Link
              to="/waitlist"
              className="px-5 py-2 rounded-full bg-shehub-gradient text-white font-medium transition-all hover:shadow-glow-purple hover:scale-105"
            >
              {t('nav.waitlist')}
            </Link>
          </div>
        </nav>

        {/* Mobile menu button and language toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-sm z-40 flex flex-col p-6 animate-fade-in">
          <nav className="flex flex-col space-y-6 pt-6">
            <HashLink smooth to="/#features" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-lg font-medium py-2 border-b border-muted">
              {t('nav.about')}
            </HashLink>

            <HashLink smooth to="/#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-lg font-medium py-2 border-b border-muted">
              {t('nav.projects')}
            </HashLink>

            <HashLink smooth to="/#mentorship" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-lg font-medium py-2 border-b border-muted">
              {t('nav.mentorship')}
            </HashLink>

            <HashLink smooth to="/#faq" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-lg font-medium py-2 border-b border-muted">
              {t('nav.faq')}
            </HashLink>

            <Link
              to="/waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 rounded-full bg-shehub-gradient text-white font-medium text-center transition-all"
            >
              {t('nav.waitlist')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
