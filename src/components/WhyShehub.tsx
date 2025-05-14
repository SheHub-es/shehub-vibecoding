
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { Briefcase, Users, Award } from 'lucide-react';

interface WhyShehubProps {
  className?: string;
}

const WhyShehub: React.FC<WhyShehubProps> = ({ className }) => {
  return (
    <section id="features" className={cn('py-20 bg-shehub-purple text-white', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              SheHub is where women turn learning into opportunities.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg opacity-90">
              We provide the space, the tools, and the mentorship to transform potential into visible, 
              proven experience.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn direction="up">
            <FeatureCard 
              icon={<Briefcase className="text-shehub-light-purple" />}
              title="Build experience that matters"
              description="Work on real features from start to finish. Not practice tasks, but product-ready results."
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <FeatureCard 
              icon={<Users className="text-shehub-light-purple" />}
              title="Grow in a real tech environment"
              description="Collaborate with contributors across product, design, dev, data or marketing — using lean practices."
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <FeatureCard 
              icon={<Award className="text-shehub-light-purple" />}
              title="Be seen, supported, and ready to grow"
              description="Get mentorship, demos, and outcomes that give your talent visibility. We give you the tools to build an attractive portfolio and CV."
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
    <div className="bg-white rounded-2xl p-6 shadow-md text-foreground h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default WhyShehub;
