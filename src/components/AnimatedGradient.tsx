
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className }) => {
  return (
    <div className={cn('fixed inset-0 -z-10 overflow-hidden', className)}>
      <div className="absolute -z-10 h-full w-full bg-background opacity-80" />
      
      {/* Gradient orbs */}
      <div className="blur-circle w-96 h-96 bg-blush top-[-15%] right-[-10%] animate-float opacity-40" />
      <div className="blur-circle w-80 h-80 bg-lavender bottom-[-10%] left-[5%] animate-float opacity-40" style={{ animationDelay: '-2s' }} />
      <div className="blur-circle w-64 h-64 bg-mauve top-[25%] left-[-5%] animate-float opacity-30" style={{ animationDelay: '-4s' }} />
      <div className="blur-circle w-72 h-72 bg-cream bottom-[10%] right-[15%] animate-float opacity-30" style={{ animationDelay: '-6s' }} />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          width: '200%',
          height: '200%',
          transform: 'translate(-25%, -25%)',
        }}
      />
    </div>
  );
};

export default AnimatedGradient;
