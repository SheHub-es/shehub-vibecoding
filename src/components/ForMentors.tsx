
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ArrowRight, Shield, Heart, Clock } from 'lucide-react';

interface ForMentorsProps {
  className?: string;
}

const ForMentors: React.FC<ForMentorsProps> = ({ className }) => {
  return (
    <section id="mentorship" className={cn("py-24 bg-[#F4EDFA] relative overflow-hidden", className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:text-left text-center">
            <FadeIn>
              <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                💼 For Mentors
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lead. Inspire. Grow — while helping others thrive.
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                At SheHub, mentors guide real teams — building leadership, coaching, and communication skills that translate directly into your career. It's flexible, impactful, and great for your CV.
              </p>
            </FadeIn>
          </div>
          
          <div className="space-y-6">
            <FadeIn direction="right">
              <div className="glass-card p-6 relative overflow-hidden group transition-all hover:shadow-md">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-shehub-purple/10 flex items-center justify-center mr-4 mt-1">
                    <Shield size={18} className="text-shehub-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Practice leadership in a safe, real-world setup</h3>
                    <p className="text-muted-foreground text-sm">Develop coaching, feedback, and team management skills in a supportive environment.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.1}>
              <div className="glass-card p-6 relative overflow-hidden group transition-all hover:shadow-md">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-shehub-purple/10 flex items-center justify-center mr-4 mt-1">
                    <Heart size={18} className="text-shehub-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Help diverse talent grow — while growing your own impact</h3>
                    <p className="text-muted-foreground text-sm">Make a difference in the careers of women entering tech while enhancing your own leadership credentials.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={0.2}>
              <div className="glass-card p-6 relative overflow-hidden group transition-all hover:shadow-md">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-shehub-purple/10 flex items-center justify-center mr-4 mt-1">
                    <Clock size={18} className="text-shehub-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Just 1–2 hours/week, fully remote</h3>
                    <p className="text-muted-foreground text-sm">Flexible commitment that fits around your schedule and other responsibilities.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <a 
              href="#waitlist" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-shehub-gradient text-white text-lg font-medium transition-all hover:shadow-glow-purple hover:scale-105"
            >
              Become a Mentor <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ForMentors;
