
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
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
    <section id="faq" className={cn("py-24 bg-white", className)}>
      <div className="container max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Got Questions? We've Got You Covered.</h2>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <FaqItem 
              question="What is SheHub?"
              answer="SheHub is a career growth platform where women gain job-ready experience by working in lean, collaborative tech teams with real mentors. Contributors don't just practice — they deliver. Along the way, they also strengthen leadership, communication, and problem-solving skills that matter in real roles." 
            />
            
            <FaqItem 
              question="Who can join?"
              answer="Contributors: Women pivoting into tech — typically from bootcamps or self-taught backgrounds — who already have the technical or design skills to contribute to a real product team. Mentors: Women in tech who want to support others and grow their own leadership experience as they prepare for their next career move (e.g., management, team lead, strategy roles)." 
            />
            
            <FaqItem 
              question="Is it free?"
              answer="Yes — SheHub is 100% free for both contributors and mentors. Our mission is to make access to real experience and leadership development more equitable." 
            />
            
            <FaqItem 
              question="How long are the projects?"
              answer="Most projects last 4 to 8 weeks. Teams meet weekly, and all roles are part-time and designed to fit around work, study, or caregiving responsibilities." 
            />
            
            <FaqItem 
              question="Do I need a certain level to join?"
              answer="Yes — SheHub is not a bootcamp or a course. You should already have the basic skills needed to deliver in your role (design, development, product, data, etc.). If you're not quite there yet, we encourage you to build your skills and come back — we'll still be here." 
            />
            
            <FaqItem 
              question="Can I list this on my CV?"
              answer="Absolutely. You'll work on real deliverables, collaborate in a real team environment, and be supported by experienced mentors — all of which is highly valuable and fully LinkedIn/CV-worthy." 
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
