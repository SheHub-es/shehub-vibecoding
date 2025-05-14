
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import WhyShehub from '@/components/WhyShehub';
import HowItWorks from '@/components/HowItWorks';
import ForMentors from '@/components/ForMentors';
import OurImpact from '@/components/OurImpact';
import FaqSection from '@/components/FaqSection';
import JoinWaitlist from '@/components/JoinWaitlist';
import WaitlistForm from '@/components/WaitlistForm';

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
      <Navbar />
      
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
      
      {/* FAQ: White */}
      <FaqSection />
      
      {/* Join Waitlist CTA: White */}
      <JoinWaitlist />
      
      {/* Waitlist Form: Light blue (keeping as it requires a form) */}
      <div className="bg-[#F0F8FF]">
        <WaitlistForm />
      </div>
      
      {/* Footer: Light lavender (as specified) */}
      <Footer />
    </div>
  );
};

export default Index;
