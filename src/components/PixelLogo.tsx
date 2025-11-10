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
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
  };

  const logoSrc = variant === 'hero'
    ? '/logo/logo-b.png'
    : '/logo/logo-shehub.png';

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <img 
        src={logoSrc}
        alt="SheHub Logo" 
        className={cn(
          sizeClasses[size],
          'object-contain object-center select-none'
        )}
      />
    </div>
  );
};

export default PixelLogo;
