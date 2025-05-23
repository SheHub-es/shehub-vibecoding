import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Info, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeIn from './FadeIn';
import { setFirebaseApplicant, ApplicantData } from '@/api/firebase/setFirebaseApplicant';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  mentor: boolean;
}

const WaitlistForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [search] = useSearchParams();
  const mentorParam = search.get('mentor') === 'true';
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    mentor: mentorParam,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.role) {
      toast.error(t('waitlist.form.error.required'));
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t('waitlist.form.error.email'));
      return;
    }
    setIsSubmitting(true);
    const applicant: ApplicantData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      role: formData.role,
      mentor: formData.mentor,
      timestamp: new Date(),
      utmSource: search.get('utm_source'),
      utmMedium: search.get('utm_medium'),
      utmCampaign: search.get('utm_campaign'),
      language: language,
    };
  try {
    await setFirebaseApplicant(formData.email, applicant);
    toast.success(t('waitlist.form.toast.success'));
    setFormData({ firstName: '', lastName: '', email: '', role: '', mentor: false });
    sessionStorage.setItem('waitlist_submitted', 'true');
    navigate('/thank-you');
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Waitlist] Firebase error:', errorMsg, err);
    toast.error(t('waitlist.form.toast.error') || 'Error al enviar. Inténtalo de nuevo.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="waitlist" className="py-24 bg-background text-foreground">
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                {t('waitlist.form.ctabadge')}
              </span>
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="font-bold">{t('waitlist.heading.title')}</span>
                {' '}
                <span className="font-bold gradient-text">{t('waitlist.heading.title.gradient')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('waitlist.heading.subtitle')}
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Check size={18} className="text-shehub-purple" />
                <span>{t('waitlist.form.benefit.realProjects')}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>{t('waitlist.form.benefit.collaboration')}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>{t('waitlist.form.benefit.mentorship')}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>{t('waitlist.form.benefit.portfolio')}</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/60 dark:bg-white/5 border border-border/30 p-8 rounded-3xl shadow-soft backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t('waitlist.form.label.name')}</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t('waitlist.form.placeholder.name')}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">{t('waitlist.form.label.lastname')}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t('waitlist.form.placeholder.lastname')}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">{t('waitlist.form.label.email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('waitlist.form.placeholder.email')}
                  required
                />
              </div>

              <div>
                <div className="flex items-center mb-1 space-x-1">
                  <Label htmlFor="role">{t('waitlist.form.label.role')}</Label>
                  <Tooltip
                    open={isMobile ? tooltipOpen : undefined}
                    onOpenChange={isMobile ? setTooltipOpen : undefined}
                  >
                    <TooltipTrigger asChild>
                      <Info
                        className="w-4 h-4 text-muted-foreground cursor-pointer"
                        onClick={() => isMobile && setTooltipOpen((o) => !o)}
                      />
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-shehub-purple text-white rounded-md px-3 py-2 max-w-xs">
                      {t('waitlist.form.tooltip.role')}
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder={t('waitlist.form.placeholder.role')}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="mentor"
                  name="mentor"
                  type="checkbox"
                  checked={formData.mentor}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                />
                <Label htmlFor="mentor">{t('waitlist.form.label.mentor')}</Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-shehub-gradient text-white hover:shadow-glow-purple hover:scale-105 transition-all rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('waitlist.form.button.submitting') : t('waitlist.form.button.join')}
              </Button>


              <p className="text-xs text-center text-muted-foreground pt-4">
                {t('waitlist.form.disclaimer')}
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
