
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface JoinWaitlistProps {
  className?: string;
}

const JoinWaitlist: React.FC<JoinWaitlistProps> = ({ className }) => {
  const { t } = useLanguage();
  
  return (
    <section id="join" className={cn("py-24 bg-white", className)}>
      <div className="container max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('waitlist.title')}</h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground mb-8">
              {t('waitlist.subtitle')}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <a 
              href="#waitlist" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-shehub-gradient text-white text-lg font-medium transition-all hover:shadow-glow-purple hover:scale-105"
            >
              {t('waitlist.button')} <ArrowRight className="ml-2" size={18} />
            </a>
            
            <p className="text-sm text-muted-foreground mt-4">
              {t('waitlist.promise')}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;
