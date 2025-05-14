
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'hero';
}

const PixelLogo: React.FC<PixelLogoProps> = ({ 
  className, 
  size = 'md', 
  variant = 'default' 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  const logoSrc = variant === 'hero'
    ? "/lovable-uploads/28ab9fd0-905a-49b2-984e-50a01aab310d.png"
    : "/lovable-uploads/305d5926-1c61-4af1-a2af-de6e605b0301.png";

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <img 
        src={logoSrc}
        alt="SheHub Logo" 
        className={cn(sizeClasses[size])}
      />
    </div>
  );
};

export default PixelLogo;
