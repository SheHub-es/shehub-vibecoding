
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import WhyShehub from '@/components/WhyShehub';
import HowItWorks from '@/components/HowItWorks';
import ForMentors from '@/components/ForMentors';
import OurImpact from '@/components/OurImpact';
import FaqSection from '@/components/FaqSection';
import Sponsors from '@/components/Sponsors';
import JoinWaitlist from '@/components/JoinWaitlist';

const Index = () => {
  useEffect(() => {
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
      
      {/* Hero: White */}
      <Hero />

      {/* Why SheHub: Purple background */}
      <WhyShehub />
      
      {/* How It Works: White */}
      <HowItWorks />
      
      {/* Our Impact: White */}
      <OurImpact />
      
      {/* For Mentors: Brand Purple */}
      <ForMentors />

      {/* Sponsors: Light gray */}
      <Sponsors />
      
      {/* FAQ: White */}
      <FaqSection />
      
      {/* Join Waitlist CTA: White */}
      <JoinWaitlist />
      
    </div>
  );
};

export default Index;
