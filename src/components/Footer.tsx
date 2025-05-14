
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import PixelLogo from './PixelLogo';
import { useIsMobile } from '@/hooks/use-mobile';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  return (
    <footer className={cn("py-16 md:py-20 bg-[#EAE4F9] text-gray-700", className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className={cn("flex flex-col md:flex-row md:justify-between md:items-start", 
          isMobile ? "items-center text-center" : "items-start text-left")}>
          
          {/* Logo and Contact Info - Left Column */}
          <div className="mb-10 md:mb-0 max-w-sm">
            <div className="mb-6">
              <PixelLogo className="h-12 text-gray-700" />
            </div>
            
            <div className="space-y-3 mb-6">
              <p className="flex items-center md:justify-start justify-center">
                <Mail size={16} className="mr-2" /> 
                <a href="mailto:info@shehub.es" className="hover:underline">info@shehub.es</a>
              </p>
              <p className="text-sm">Based in Spain — open to the world</p>
              <a href="https://www.shehub.es" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:underline block">
                www.shehub.es
              </a>
            </div>
            
            <div className="mb-8 md:mb-0">
              <p className="mb-3 text-sm">Follow us:</p>
              <div className="flex items-center space-x-4 md:justify-start justify-center">
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
          </div>
          
          {/* Navigation Links */}
         <div className="max-w-4xl mx-auto px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold mb-3">Resources</h4>
      <a href="#faq" className="text-gray-700/80 hover:text-gray-700 transition-colors">FAQ</a>
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold mb-3">Join</h4>
      <a href="#waitlist" className="text-gray-700/80 hover:text-gray-700 transition-colors">Contributors</a>
      <a href="#mentorship" className="text-gray-700/80 hover:text-gray-700 transition-colors">Mentors</a>
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold mb-3">About</h4>
      <a href="#projects" className="text-gray-700/80 hover:text-gray-700 transition-colors">How it Works</a>
      <a href="#vision" className="text-gray-700/80 hover:text-gray-700 transition-colors">Our Vision</a>
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold mb-3">Connect</h4>
      <a href="mailto:info@shehub.es" className="text-gray-700/80 hover:text-gray-700 transition-colors">Email Us</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700/80 hover:text-gray-700 transition-colors">LinkedIn</a>
    </div>
  </div>
</div>
✅ What changed?
grid-cols-2 md:grid-cols-4 → grid-cols-1 sm:grid-cols-2 md:grid-cols-2 (tighter layout)

Wrapped it in max-w-4xl mx-auto px-6 to keep it centered and bounded

Reduced visual width so it’s more compact and readable, especially on large screens

Let me know if you want it stacked fully on mobile or need a version with icons.






Tú dijiste:
make it just these sections: how it works, FAW, Why SheHub, Mentors


ChatGPT Plus
Here’s your updated, compact footer grid with just the four sections you requested:

How It Works

FAQ

Why SheHub

Mentors

Designed to be cleaner, more compact, and mobile-responsive:


<div className="max-w-3xl mx-auto px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold mb-3">How it Works</h4>
      <a href="#projects" className="text-gray-700/80 hover:text-gray-700 transition-colors">Overview</a>
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold mb-3">FAQ</h4>
      <a href="#faq" className="text-gray-700/80 hover:text-gray-700 transition-colors">Common Questions</a>
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold mb-3">Why SheHub</h4>
      <a href="#why" className="text-gray-700/80 hover:text-gray-700 transition-colors">Our Mission</a>
    </div>

    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold mb-3">Mentors</h4>
      <a href="#mentorship" className="text-gray-700/80 hover:text-gray-700 transition-colors">Get Involved</a>
    </div>
  </div>
</div>
        {/* Copyright - Bottom */}
        <div className={cn("mt-12 text-sm text-gray-700/70", isMobile ? "text-center" : "text-left")}>
          <p>&copy; {new Date().getFullYear()} SheHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
