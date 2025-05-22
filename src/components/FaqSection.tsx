import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

interface FaqSectionProps {
  className?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ className }) => {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      className={cn(
        "py-24 bg-background text-foreground",
        className
      )}
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('faq.title')}
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <FaqItem
                key={idx}
                question={t(`faq.q${idx + 1}`)}
                answer={t(`faq.a${idx + 1}`)}
              />
            ))}
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
    <AccordionItem
      value={question}
      className={cn(
        'border border-border',
        'bg-background',
        'rounded-lg shadow-sm'
      )}
    >
      <AccordionTrigger className="px-6 py-4 hover:no-underline">
        <span className="font-semibold text-foreground">{question}</span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4 pt-1 text-muted-foreground">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqSection;
