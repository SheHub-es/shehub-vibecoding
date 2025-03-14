
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import PixelLogo from './PixelLogo';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <PixelLogo size="sm" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Acerca de</NavLink>
          <NavLink href="#projects">Proyectos</NavLink>
          <NavLink href="#mentorship">Mentoría</NavLink>
          <a 
            href="#waitlist" 
            className="px-5 py-2 rounded-full bg-shehub-gradient text-white font-medium transition-all hover:shadow-glow-purple hover:scale-105"
          >
            Unirse a la Lista de Espera
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white/95 backdrop-blur-sm z-40 flex flex-col p-6 animate-fade-in">
          <nav className="flex flex-col space-y-6 pt-6">
            <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Acerca de</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Proyectos</MobileNavLink>
            <MobileNavLink href="#mentorship" onClick={() => setMobileMenuOpen(false)}>Mentoría</MobileNavLink>
            <a 
              href="#waitlist" 
              className="mt-4 px-5 py-3 rounded-full bg-shehub-gradient text-white font-medium text-center transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Unirse a la Lista de Espera
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-foreground/80 hover:text-foreground font-medium transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shehub-purple group-hover:w-full transition-all duration-300" />
    </a>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      className="text-foreground text-lg font-medium py-2 border-b border-muted"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
