
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import FadeIn from './FadeIn';
import { Check, Loader2, Mail } from 'lucide-react';

interface WaitlistFormProps {
  className?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "¡Éxito!",
        description: "Has sido añadida a nuestra lista de espera. ¡Nos pondremos en contacto pronto!",
        duration: 5000,
      });
      
      // Reset form
      setEmail('');
      setName('');
      setProfession('');
      
      // Reset submitted state after delay for animation
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="waitlist" className={cn('py-24 relative overflow-hidden', className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-white p-8 md:p-10 max-w-md mx-auto rounded-2xl shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-8">Join Waitlist</h3>
                
                <div className="mb-6 w-full">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-indigo focus:ring-1 focus:ring-shehub-indigo transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-6 w-full">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-indigo focus:ring-1 focus:ring-shehub-indigo transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div className="mb-8 w-full">
                  <label htmlFor="profession" className="block text-sm font-medium mb-2">Your Role/Experience</label>
                  <input
                    type="text"
                    id="profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-indigo focus:ring-1 focus:ring-shehub-indigo transition-all"
                    placeholder="e.g. UX/UI Designer, Frontend Developer"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className={cn(
                    "w-full py-3 rounded-lg font-medium text-white flex items-center justify-center transition-all",
                    submitting ? "bg-shehub-indigo/80" : submitted ? "bg-green-500" : "bg-shehub-gradient hover:shadow-glow-orange"
                  )}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : submitted ? (
                    <>
                      <Check size={20} className="mr-2" />
                      Submitted!
                    </>
                  ) : (
                    <>
                      <Mail size={20} className="mr-2" />
                      Join Waitlist
                    </>
                  )}
                </button>
                
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Whether you're looking to gain real tech experience or grow as a mentor, this is the place to start.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
