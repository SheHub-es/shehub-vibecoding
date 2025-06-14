
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ClipboardCheck, Users, Lightbulb, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HowItWorksProps {
  className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  const { t } = useLanguage();
  
  return (
    <section
      id="how-it-works"
      className={cn(
        "py-24 bg-background text-foreground",
        className
      )}
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('how.title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground">
              {t('how.description')}
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-4 gap-5">
          {[ClipboardCheck, Users, Lightbulb, Wrench].map((Icon, i) => (
            <FadeIn direction="up" delay={i * 0.1} key={i}>
              <div className="glass-card p-8 h-full relative overflow-hidden group transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t(`how.feature${i+1}.title`)}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {t(`how.feature${i+1}.description`)}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-shehub-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
