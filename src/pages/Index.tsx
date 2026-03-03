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
  // El scroll es manejado por HashLink con scrollOffset
  // No necesitamos useEffect aquí

  return (
    <div className="relative min-h-screen">
      
      {/* Hero: White */}
      <Hero />

      {/* Why SheHub: Brand Purple */}
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
