
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, UsersRound, Sparkles } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedGradient />
      <Navbar />
      <Hero />
      
      <Features />
      
      <section id="mission" className="py-24 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <FadeIn>
                <span className="px-4 py-1.5 bg-accent/70 text-accent-foreground text-sm rounded-full font-medium mb-6 inline-block">
                  Our Mission
                </span>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Empowering Women Through Collaboration
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that when women work together, extraordinary things happen. Our mission is to create a community where women can connect, collaborate, and amplify each other's success.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-lg text-muted-foreground mb-8">
                  By sharing resources, expertise, and opportunities, we're building a network that lifts everyone up—creating a ripple effect of positive change in workplaces and industries around the world.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <a 
                  href="#waitlist" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Join our movement <ArrowRight size={18} className="ml-2" />
                </a>
              </FadeIn>
            </div>
            
            <div className="md:col-span-2">
              <FadeIn direction="right">
                <div className="glass-card p-8 relative">
                  <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-lavender flex items-center justify-center border-4 border-white">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4">
                        <UsersRound size={20} className="text-rose-500" />
                      </div>
                      <div>
                        <h3 className="font-bold">Growing Community</h3>
                        <p className="text-sm text-muted-foreground">Join women from diverse backgrounds</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Stat number="500+" label="Women Ready to Join" />
                    <Stat number="20+" label="Different Industries" />
                    <Stat number="15+" label="Countries Represented" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blush/10 blur-3xl" />
      </section>
      
      <section id="join" className="py-20 bg-sand/30 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Forces?</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground">
                Be part of a community that values collaboration over competition, and believes in the power of women working together.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <JoinCard 
                number="01"
                title="Sign Up"
                description="Join our waitlist to be among the first to access our community platform."
              />
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <JoinCard 
                number="02"
                title="Connect"
                description="Get matched with women who share your interests and professional goals."
              />
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <JoinCard 
                number="03"
                title="Collaborate"
                description="Start working together on projects that advance your skills and impact."
              />
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <a 
                href="#waitlist" 
                className="px-8 py-3 rounded-full bg-primary text-white text-lg font-medium transition-all hover:shadow-glow-rose hover:scale-105 inline-block"
              >
                Join the Waitlist
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <WaitlistForm />
      <Footer />
    </div>
  );
};

interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => {
  return (
    <div className="flex items-center">
      <div className="w-16 text-xl font-bold">{number}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

interface JoinCardProps {
  number: string;
  title: string;
  description: string;
}

const JoinCard: React.FC<JoinCardProps> = ({ number, title, description }) => {
  return (
    <div className="glass-card p-8 h-full relative overflow-hidden group transition-all hover:shadow-md hover:-translate-y-1">
      <span className="text-4xl font-serif text-blush/30 absolute top-4 right-4">{number}</span>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </div>
  );
};

export default Index;
