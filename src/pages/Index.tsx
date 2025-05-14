
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import WhyShehub from '@/components/WhyShehub';
import WaitlistForm from '@/components/WaitlistForm';
import HowItWorks from '@/components/HowItWorks';
import ForMentors from '@/components/ForMentors';
import OurImpact from '@/components/OurImpact';
import FaqSection from '@/components/FaqSection';
import JoinWaitlist from '@/components/JoinWaitlist';

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
      <div className="bg-white">
        <Hero />
      </div>

      {/* Why SheHub: Purple background */}
      <WhyShehub />
      
      {/* How It Works: Soft peach */}
      <HowItWorks />
      
      {/* Our Impact: White */}
      <OurImpact />
      
      {/* For Mentors: Light lavender */}
      <ForMentors />
      
      {/* FAQ: Light blue */}
      <FaqSection />
      
      {/* Join Waitlist CTA: Light purple */}
      <JoinWaitlist />
      
      {/* Waitlist Form: Light blue */}
      <div className="bg-[#F0F8FF]">
        <WaitlistForm />
      </div>
      
      {/* Footer: Brand purple */}
      <Footer />
    </div>
  );
};

export default Index;
