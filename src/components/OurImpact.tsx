
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { Users, CheckCircle, Trophy, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface OurImpactProps {
  className?: string;
}

const OurImpact: React.FC<OurImpactProps> = ({ className }) => {
  const { t } = useLanguage();
  
  return (
    <section id="impact" className={cn("py-24 bg-background", className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('impact.title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground">
              {t('impact.subtitle')}
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn direction="up">
            <ImpactStat 
              icon={<Users size={22} />}
              number="100+"
              label={t('impact.stat1')}
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <ImpactStat 
              icon={<CheckCircle size={22} />}
              number="3+"
              label={t('impact.stat2')}
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <ImpactStat 
              icon={<Clock size={22} />}
              number="760+"
              label={t('impact.stat3')}
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <ImpactStat 
              icon={<Trophy size={22} />}
              number="5+"
              label={t('impact.stat4')}
            />
          </FadeIn>
        
        </div>
        
        <FadeIn delay={0.4}>
          <p className="text-center text-lg font-medium mt-12">
            {t('impact.closing')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
interface ImpactStatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const ImpactStat: React.FC<ImpactStatProps> = ({ icon, number, label }) => {
  return (
    <div className="glass-card p-6 h-full flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-4">
        <span className="text-shehub-purple">{icon}</span>
      </div>
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default OurImpact;
