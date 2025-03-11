
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn('min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <FadeIn>
            <span className="px-4 py-1.5 bg-accent/70 text-accent-foreground text-sm rounded-full font-medium mb-8 inline-block">
              Coming Soon
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Community of Women <span className="gradient-text">Working Together</span> to Achieve More
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl">
              Join a supportive network of ambitious women who collaborate, share resources, and lift each other up. Together, we're creating opportunities and breaking barriers.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="#waitlist" 
                className="px-8 py-3 rounded-full bg-primary text-white text-lg font-medium transition-all hover:shadow-glow-rose hover:scale-105 w-full sm:w-auto"
              >
                Join the Waitlist
              </a>
              <a 
                href="#mission" 
                className="px-8 py-3 rounded-full bg-secondary text-foreground text-lg font-medium transition-all hover:bg-secondary/70 w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </FadeIn>
        </div>
        
        {/* Abstract shape */}
        <div className="absolute -right-40 md:-right-20 top-1/4 w-80 h-80 rounded-full bg-lavender/20 blur-3xl animate-pulse-light" />
        <div className="absolute -left-40 md:-left-20 bottom-1/4 w-80 h-80 rounded-full bg-blush/20 blur-3xl animate-pulse-light" style={{ animationDelay: '-1.5s' }} />
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
