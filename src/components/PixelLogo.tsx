
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
        src="/lovable-uploads/28ab9fd0-905a-49b2-984e-50a01aab310d.png" 
        alt="SheHub Logo" 
        className={cn(sizeClasses[size])}
      />
    </div>
  );
};

export default PixelLogo;
