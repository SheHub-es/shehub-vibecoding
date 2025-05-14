
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import PixelLogo from './PixelLogo';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("py-16 bg-[#F4EDFA] text-gray-700", className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <PixelLogo className="h-12 text-gray-700" />
          </div>
          
          <div className="mb-8 space-y-2">
            <p className="flex items-center justify-center">
              <Mail size={16} className="mr-2" /> 
              <a href="mailto:info@shehub.es" className="hover:underline">info@shehub.es</a>
            </p>
            <p className="text-sm">Based in Spain — open to all of Europe</p>
          </div>
          
          <div className="mb-8">
            <p className="mb-3 text-sm">Follow us:</p>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/10 hover:bg-gray-700/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700/10 hover:bg-gray-700/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="mb-8">
            <a href="https://www.shehub.es" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline">
              www.shehub.es
            </a>
          </div>
          
          <div className="mt-4">
            <div className="grid md:grid-cols-4 gap-6 md:gap-12 text-center mb-8">
              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-1">Resources</h4>
                <a href="#faq" className="text-gray-700/80 hover:text-gray-700 transition-colors">FAQ</a>
                <a href="#" className="text-gray-700/80 hover:text-gray-700 transition-colors">Blog</a>
              </div>
              
              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-1">Join</h4>
                <a href="#waitlist" className="text-gray-700/80 hover:text-gray-700 transition-colors">Contributors</a>
                <a href="#mentorship" className="text-gray-700/80 hover:text-gray-700 transition-colors">Mentors</a>
              </div>
              
              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-1">About</h4>
                <a href="#projects" className="text-gray-700/80 hover:text-gray-700 transition-colors">How it Works</a>
                <a href="#vision" className="text-gray-700/80 hover:text-gray-700 transition-colors">Our Vision</a>
              </div>
              
              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-1">Connect</h4>
                <a href="mailto:info@shehub.es" className="text-gray-700/80 hover:text-gray-700 transition-colors">Email Us</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700/80 hover:text-gray-700 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-700/70">
            <p>&copy; {new Date().getFullYear()} SheHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
