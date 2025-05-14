
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ArrowRight, Shield, Heart, Clock } from 'lucide-react';

interface ForMentorsProps {
  className?: string;
}

const ForMentors: React.FC<ForMentorsProps> = ({ className }) => {
  return (
    <section id="mentorship" className={cn("py-24 bg-shehub-purple text-white relative overflow-hidden", className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              For Mentors — Lead and Grow
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg opacity-90 mb-8">
              At SheHub, mentors guide real teams — building leadership, coaching, and communication skills that translate directly into your career. It's flexible, impactful, and great for your CV.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FadeIn direction="up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden group transition-all hover:bg-white/20">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Shield size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Practice leadership in a safe, real-world setup</h3>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden group transition-all hover:bg-white/20">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Heart size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Help diverse talent grow — while growing your own impact</h3>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative overflow-hidden group transition-all hover:bg-white/20">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Just 1–2 hours/week, fully remote</h3>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.3}>
          <div className="text-center">
            <a 
              href="#waitlist" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-shehub-purple text-lg font-medium transition-all hover:shadow-lg hover:scale-105"
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
