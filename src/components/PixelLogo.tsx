
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const PixelLogo: React.FC<PixelLogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <img 
        src="/lovable-uploads/305d5926-1c61-4af1-a2af-de6e605b0301.png" 
        alt="SheHub Logo" 
        className={cn(sizeClasses[size])}
      />
    </div>
  );
};

export default PixelLogo;
