
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { Briefcase, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface WhyShehubProps {
  className?: string;
}

const WhyShehub: React.FC<WhyShehubProps> = ({ className }) => {
  const { t } = useLanguage();
  
  return (
    <section id="features" className={cn('py-20 bg-primary text-background', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('why.headline')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg opacity-90">
              {t('why.description')}
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FadeIn direction="up">
            <FeatureCard 
              icon={<Briefcase className="text-accent" />}
              title={t('why.feature1.title')}
              description={t('why.feature1.description')}
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <FeatureCard 
              icon={<Users className="text-accent" />}
              title={t('why.feature2.title')}
              description={t('why.feature2.description')}
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <FeatureCard 
              icon={<Award className="text-accent" />}
              title={t('why.feature3.title')}
              description={t('why.feature3.description')}
            />
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <FeatureCard 
              icon={<Clock className="text-accent" />}
              title={t('why.feature4.title')}
              description={t('why.feature4.description')}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-white/10 rounded-2xl p-6 shadow-md text-foreground h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className=" text-black text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-800 text-sm">{description}</p>
    </div>
  );
};

export default WhyShehub;
