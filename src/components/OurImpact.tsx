
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { Users, CheckCircle, Trophy, BookOpen } from 'lucide-react';

interface OurImpactProps {
  className?: string;
}

const OurImpact: React.FC<OurImpactProps> = ({ className }) => {
  return (
    <section id="impact" className={cn("py-24 bg-white", className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact So Far
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground">
              SheHub is already helping women build confidence, portfolios and real experience.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn direction="up">
            <ImpactStat 
              icon={<Users size={22} />}
              number="100+"
              label="women joined the community in our first month"
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <ImpactStat 
              icon={<CheckCircle size={22} />}
              number="3+"
              label="active teams already working across UX, dev, product, and more"
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <ImpactStat 
              icon={<Trophy size={22} />}
              number="5+"
              label="interviews landed by contributors in our first month"
            />
          </FadeIn>
         
        </div>
        
        <FadeIn delay={0.4}>
          <p className="text-center text-lg font-medium mt-12">
            We're just getting started.
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
