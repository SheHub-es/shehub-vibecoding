
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import PixelLogo from './PixelLogo';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('py-16 relative overflow-hidden text-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <PixelLogo className="mb-4" />
            <p className="text-white/80 mb-6 max-w-md">
              SheHub connects women bootcamp graduates from different roles who want to build a career in tech, guided by expert mentors.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.linkedin.com/company/shehub-es" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/shehub.es" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="mailto:info@shehub.es" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <FooterLink href="#features">About Us</FooterLink>
              <FooterLink href="#projects">How It Works</FooterLink>
              <FooterLink href="#mentorship">For Mentors</FooterLink>
              <FooterLink href="#vision">Our Vision</FooterLink>
              <FooterLink href="#waitlist">Join the Waitlist</FooterLink>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <p className="text-white/80 mb-2">Have questions?</p>
            <a href="mailto:info@shehub.es" className="text-white hover:underline">
              info@shehub.es
            </a>
            <p className="text-white/80 mt-4 mb-1">
              Based in Spain — Building across Europe
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SheHub. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="https://shehub.es" className="text-white/80 hover:text-white transition-colors">
              www.shehub.es
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-white/20 hover:text-white"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-white/80 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};

export default Footer;
