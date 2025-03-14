
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const PixelLogo: React.FC<PixelLogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
  };

  return (
    <div className={cn('font-pixel text-center', sizeClasses[size], className)}>
      <span className="bg-shehub-gradient bg-clip-text text-transparent">SHEHUB</span>
    </div>
  );
};

export default PixelLogo;
