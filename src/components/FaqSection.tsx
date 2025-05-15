
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { t } = useLanguage();
  
  return (
    <section id="faq" className={cn("py-24 bg-white", className)}>
      <div className="container max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('faq.title')}</h2>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <FaqItem 
              question={t('faq.q1')}
              answer={t('faq.a1')} 
            />
            
            <FaqItem 
              question={t('faq.q2')}
              answer={t('faq.a2')} 
            />
            
            <FaqItem 
              question={t('faq.q3')}
              answer={t('faq.a3')} 
            />
            
            <FaqItem 
              question={t('faq.q4')}
              answer={t('faq.a4')} 
            />
            
            <FaqItem 
              question={t('faq.q5')}
              answer={t('faq.a5')} 
            />
            
            <FaqItem 
              question={t('faq.q6')}
              answer={t('faq.a6')} 
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
