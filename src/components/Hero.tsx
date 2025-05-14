
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ArrowDown } from 'lucide-react';
import PixelLogo from './PixelLogo';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { t } = useLanguage();
  
  return (
    <section className={cn('min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden bg-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn>
            <PixelLogo size="lg" className="mb-8" />
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect. <span className="gradient-text">Create.</span><br />
              Break Barriers.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              Real tech experience for women ready to grow. Work on real projects. Build in real teams. Guided by real mentors.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <a 
              href="#waitlist" 
              className="px-8 py-3 rounded-full bg-shehub-gradient text-white text-lg font-medium transition-all hover:shadow-glow-orange hover:scale-105 w-full sm:w-auto inline-block"
            >
              Join the Waitlist
            </a>
            
            <div className="mt-4 text-muted-foreground text-sm max-w-2xl">
              Whether you're here to grow your experience or grow others — SheHub is your next step.
            </div>
          </FadeIn>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 mx-auto flex justify-center animate-float">
        <a href="#features" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm font-medium mb-2">Discover More</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
