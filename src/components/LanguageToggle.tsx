
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { Languages } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface LanguageToggleProps {
  className?: string;
  mode?: 'full' | 'compact';
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className,
  mode = 'compact'
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center", className)}>
      {mode === 'full' && (
        <Languages size={16} className="mr-2 text-muted-foreground" />
      )}

      <ToggleGroup
        type="single"
        value={language}
        onValueChange={(value) => {
          if (value) {
            setLanguage(value as 'es' | 'en' | 'ca');

            const isMobile = window.innerWidth < 768;
            const label = `${value}_${isMobile ? 'mobile' : 'desktop'}`;

            window.gtag?.('event', 'language_toggle', {
              event_category: 'engagement',
              event_label: label,
            });
          }
        }}
        className={cn(
          "border rounded-full overflow-hidden",
          mode === 'compact' ? "h-8" : "h-9"
        )}
      >

        <ToggleGroupItem
          value="es"
          aria-label="Spanish"
          className={cn(
            "text-xs px-2 transition-colors font-medium",
            language === 'es'
              ? "bg-shehub-purple text-white"
              : "hover:text-shehub-purple"
          )}
        >
          ES
        </ToggleGroupItem>

        <ToggleGroupItem
          value="en"
          aria-label="English"
          className={cn(
            "text-xs px-2 transition-colors font-medium",
            language === 'en'
              ? "bg-shehub-purple text-white"
              : "hover:text-shehub-purple"
          )}
        >
          EN
        </ToggleGroupItem>

        <ToggleGroupItem
          value="ca"
          aria-label="Catalan"
          className={cn(
            "text-xs px-2 transition-colors font-medium",
            language === 'ca'
              ? "bg-shehub-purple text-white"
              : "hover:text-shehub-purple"
          )}
        >
          CA
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LanguageToggle;
