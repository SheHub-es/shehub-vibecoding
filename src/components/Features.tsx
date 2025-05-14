
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { Users, Rocket, Star, Network } from 'lucide-react';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <section id="features" className={cn('py-20 relative overflow-hidden', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
              🚀 Why SheHub?
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Because talent is not lacking—opportunity is.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground">
              SheHub is the bridge between talent and opportunity.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn direction="up">
            <FeatureCard 
              icon={<Users className="text-shehub-purple" />}
              title="74% Struggle Post-Bootcamp"
              description="Most women face challenges landing tech jobs after completing bootcamps"
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <FeatureCard 
              icon={<Rocket className="text-shehub-purple" />}
              title="Experience Gap"
              description="Many lack real-world experience and exposure to cross-functional teamwork"
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <FeatureCard 
              icon={<Star className="text-shehub-purple" />}
              title="Companies Need Diversity"
              description="Businesses seek diverse talent but struggle to find qualified candidates"
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <FeatureCard 
              icon={<Network className="text-shehub-purple" />}
              title="SheHub Bridge"
              description="We connect talented women with real experience to make them job-ready"
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
    <div className="glass-card p-6 h-full flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default Features;
