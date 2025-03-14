
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import PixelLogo from './PixelLogo';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn('py-16 relative overflow-hidden', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <PixelLogo className="mb-4" />
            <p className="text-muted-foreground mb-6 max-w-md">
              SheHub conecta a graduadas de bootcamps tecnológicos de diferentes roles que quieren construir una carrera en la industria tech, guiadas por mentoras expertas.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Mail size={20} />} label="Email" />
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-3">
              <FooterLink href="#features">Acerca de Nosotras</FooterLink>
              <FooterLink href="#projects">Proyectos</FooterLink>
              <FooterLink href="#mentorship">Mentoría</FooterLink>
              <FooterLink href="#waitlist">Unirse a la Lista de Espera</FooterLink>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contacto</h4>
            <p className="text-muted-foreground mb-2">¿Tienes preguntas?</p>
            <a href="mailto:hello@shehub.com" className="text-shehub-purple hover:underline">
              hello@shehub.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SheHub. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Términos de Servicio
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
      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground transition-colors hover:bg-shehub-purple hover:text-white"
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
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
};

export default Footer;
