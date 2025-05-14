
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ClipboardCheck, Users, Lightbulb } from 'lucide-react';

interface HowItWorksProps {
  className?: string;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ className }) => {
  return (
    <section id="how-it-works" className={cn("py-24 bg-white", className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How SheHub Works
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground">
              SheHub simulates real tech teams — so contributors grow through collaboration, ownership, and mentorship.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FadeIn direction="up">
            <div className="glass-card p-8 h-full relative overflow-hidden group transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-6">
                <ClipboardCheck size={20} className="text-shehub-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Agile, real-world projects</h3>
              <p className="text-muted-foreground relative z-10">Contributors work in sprints, planning and shipping features together.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-shehub-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <div className="glass-card p-8 h-full relative overflow-hidden group transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-6">
                <Users size={20} className="text-shehub-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-functional collaboration</h3>
              <p className="text-muted-foreground relative z-10">Teams include UX, Dev, Product, Marketing, and Data — like in real companies.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-shehub-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className="glass-card p-8 h-full relative overflow-hidden group transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-6">
                <Lightbulb size={20} className="text-shehub-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mentorship that matters</h3>
              <p className="text-muted-foreground relative z-10">Mentors provide weekly guidance, feedback, and leadership development.</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-shehub-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
