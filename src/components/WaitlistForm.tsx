
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
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
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
    <section id="waitlist" className={cn('py-20 relative overflow-hidden', className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                Ready to join?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Waiting List
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're launching soon! Join our waiting list and be the first to know when we open registration for our initial cohort of collaborative tech professionals.
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Check size={18} className="text-shehub-purple" />
                <span>Work on real-world projects</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>Collaborate with multidisciplinary teams</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>Get mentorship from industry experts</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>Build your portfolio and network</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Request an Invitation</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-purple focus:ring-1 focus:ring-shehub-purple transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-purple focus:ring-1 focus:ring-shehub-purple transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="profession" className="block text-sm font-medium mb-2">Your Background/Role</label>
                  <input
                    type="text"
                    id="profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-purple focus:ring-1 focus:ring-shehub-purple transition-all"
                    placeholder="e.g. UX/UI Designer, Frontend Developer"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className={cn(
                    "w-full py-3 rounded-lg font-medium text-white flex items-center justify-center transition-all",
                    submitting ? "bg-shehub-purple/80" : submitted ? "bg-green-500" : "bg-shehub-gradient hover:shadow-glow-purple"
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
                      Join Waiting List
                    </>
                  )}
                </button>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By signing up, you agree to our privacy policy and terms of service.
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
