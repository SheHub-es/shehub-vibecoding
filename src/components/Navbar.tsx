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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { key: 'about', href: '#features' },
    { key: 'projects', href: '#how-it-works' },
    { key: 'mentorship', href: '#mentorship' },
    { key: 'faq', href: '#faq' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8',
        scrolled ? 'bg-background shadow-sm' : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <HashLink smooth to="/#hero" className="flex items-center">
          <PixelLogo className="text-foreground" />
        </HashLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map(({ key, href }) => (
            <HashLink
              key={key}
              smooth
              to={`/${href}`}
              className="relative font-medium transition-colors text-foreground/80 hover:text-foreground group"
            >
              {t(`nav.${key}`)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shehub-purple group-hover:w-full transition-all duration-300" />
            </HashLink>
          ))}

          <LanguageToggle className="mr-4" />

          <Link
            to="/waitlist"
            className="px-5 py-2 rounded-full bg-shehub-gradient text-white font-medium transition-all hover:shadow-glow-purple hover:scale-105"
          >
            {t('nav.waitlist')}
          </Link>
        </nav>

        {/* Mobile menu button + language */}
        <div className="md:hidden flex items-center space-x-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="text-foreground p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-sm z-40 flex flex-col p-6 animate-fade-in">
          <nav className="flex flex-col space-y-6 pt-6">
            {links.map(({ key, href }) => (
              <HashLink
                key={key}
                smooth
                to={`/${href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground text-lg font-medium py-2 border-b border-muted"
              >
                {t(`nav.${key}`)}
              </HashLink>
            ))}

            <Link
              to="/waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-5 py-3 rounded-full bg-shehub-gradient text-white font-medium text-center transition-all hover:scale-105"
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
