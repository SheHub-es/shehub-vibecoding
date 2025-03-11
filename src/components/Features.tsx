
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { Users, Lightbulb, Award, Heart } from 'lucide-react';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <section id="features" className={cn('py-20 relative overflow-hidden', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Our Community?</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground">
              We're creating a space where women can connect, collaborate, and amplify each other's professional success
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <FadeIn direction="left">
            <FeatureCard 
              icon={<Users className="text-rose-500" size={28} />}
              title="Meaningful Connections"
              description="Build relationships with like-minded women who understand your journey and can offer relevant support and advice."
            />
          </FadeIn>
          
          <FadeIn direction="right">
            <FeatureCard 
              icon={<Lightbulb className="text-rose-500" size={28} />}
              title="Collaborative Projects"
              description="Work together on initiatives that amplify your skills, expand your portfolio, and create real-world impact."
            />
          </FadeIn>
          
          <FadeIn direction="left" delay={0.1}>
            <FeatureCard 
              icon={<Award className="text-rose-500" size={28} />}
              title="Skill Enhancement"
              description="Access workshops, resources, and mentorship opportunities designed to help you grow professionally."
            />
          </FadeIn>
          
          <FadeIn direction="right" delay={0.1}>
            <FeatureCard 
              icon={<Heart className="text-rose-500" size={28} />}
              title="Supportive Environment"
              description="Experience a community that celebrates your wins, helps you navigate challenges, and empowers your growth."
            />
          </FadeIn>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-lavender/10 blur-3xl" />
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
    <div className="glass-card p-8 h-full transition-all hover:shadow-md hover:translate-y-[-5px]">
      <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Features;
