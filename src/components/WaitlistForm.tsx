
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useLanguage } from '@/contexts/LanguageContext';
import FadeIn from './FadeIn';

const WaitlistForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.role) {
      toast.error("Please fill out all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("You've been added to our waitlist!");
      setFormData({
        name: '',
        email: '',
        role: '',
        motivation: ''
      });
    }, 1500);
  };

  return (
    <section id="waitlist" className="py-24">
      <div className="container max-w-3xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Waitlist</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Be the first to know when SheHub launches. Whether you're looking to grow your skills 
              or mentor others, we'll keep you updated.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange} 
                  placeholder="you@example.com" 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="role">I am interested in... *</Label>
                <Select 
                  value={formData.role} 
                  onValueChange={handleRoleChange}
                >
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mentee">Finding a mentor (Mentee)</SelectItem>
                    <SelectItem value="mentor">Becoming a mentor (Mentor)</SelectItem>
                    <SelectItem value="both">Both mentoring and being mentored</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="motivation">What are you hoping to achieve? (Optional)</Label>
                <Input 
                  id="motivation" 
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Your goals and expectations" 
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-shehub-gradient hover:shadow-glow-purple hover:scale-105 transition-all" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding You..." : "Join Waitlist"}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground pt-4">
              By joining, you agree to receive updates about SheHub. 
              We respect your privacy and will never share your information.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};

export default WaitlistForm;
