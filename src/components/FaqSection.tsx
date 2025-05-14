
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

interface FaqSectionProps {
  className?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ className }) => {
  return (
    <section id="faq" className={cn("py-24 bg-[#F0F8FF]", className)}>
      <div className="container max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Know</h2>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <FaqItem 
              question="What is SheHub?"
              answer="A platform where women gain job-ready experience by working in agile teams with mentors." 
            />
            
            <FaqItem 
              question="Who can join?"
              answer="Contributors: women from bootcamps or self-taught backgrounds. Mentors: women in tech looking to support others and grow their leadership." 
            />
            
            <FaqItem 
              question="Is it free?"
              answer="Yes — SheHub is 100% free for both contributors and mentors." 
            />
            
            <FaqItem 
              question="How long are the projects?"
              answer="Most projects last 4 to 8 weeks and are part-time and flexible." 
            />
            
            <FaqItem 
              question="Do I need to be a certain level to join?"
              answer="For contributors, you should have basic skills in your area. For mentors, you need at least 2+ years of professional experience." 
            />
            
            <FaqItem 
              question="Can I list this experience on my CV/résumé?"
              answer="Absolutely! All work is documented and can be included in your portfolio or CV." 
            />
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <AccordionItem value={question} className="border bg-white rounded-lg shadow-sm">
      <AccordionTrigger className="px-6 py-4 hover:no-underline">
        <span className="font-semibold text-left">{question}</span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqSection;
