
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ArrowDown } from 'lucide-react';
import PixelLogo from './PixelLogo';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn>
            <PixelLogo size="lg" className="mb-8" />
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Work in <span className="gradient-text">real projects</span><br />
              with diverse teams
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              SheHub connects tech <span className="font-semibold">bootcamp alumni</span> from <span className="font-semibold">different roles</span> who want to <span className="font-semibold">build a career</span> in the tech industry, guided by <span className="font-semibold">expert mentors</span>.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl">
              Are you ready to gain experience in projects by collaborating with multidisciplinary teams in the Tech sector?
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="#waitlist" 
                className="px-8 py-3 rounded-full bg-shehub-gradient text-white text-lg font-medium transition-all hover:shadow-glow-purple hover:scale-105 w-full sm:w-auto"
              >
                Join Waiting List
              </a>
            </div>
          </FadeIn>
        </div>
        
        {/* Abstract shape */}
        <div className="absolute -right-40 md:-right-20 top-1/4 w-80 h-80 rounded-full bg-shehub-purple/20 blur-3xl animate-pulse-light" />
        <div className="absolute -left-40 md:-left-20 bottom-1/4 w-80 h-80 rounded-full bg-shehub-orange/20 blur-3xl animate-pulse-light" style={{ animationDelay: '-1.5s' }} />
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#features" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm font-medium mb-2">Discover More</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
