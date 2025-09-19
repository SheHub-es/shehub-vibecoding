import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Info, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import FadeIn from './FadeIn';
import { submitWaitlistForm, checkEmailExists } from '@/lib/api.js'; 

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string; // ← Cambiar de roles: string[] a role: string
  mentor: boolean;
}

const WaitlistForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [search] = useSearchParams();
  const mentorParam = search.get('mentor') === 'true';
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    role: "", // ← Cambiar de roles: [] a role: ""
    mentor: mentorParam,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Check email existence when email changes
    if (name === 'email' && value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      checkEmailExistence(value);
    } else if (name === 'email') {
      setEmailExists(false);
    }
  };

  const checkEmailExistence = async (email: string) => {
    try {
      setCheckingEmail(true);
      const result = await checkEmailExists(email);
      setEmailExists(result.exists);
      
      if (result.exists) {
        if (result.isDeleted) {
          toast.info('Este email fue usado anteriormente pero está marcado como eliminado.');
        } else {
          toast.warning('Este email ya está registrado en nuestra base de datos.');
        }
      }
    } catch (error) {
      console.error('Error checking email:', error);
    } finally {
      setCheckingEmail(false);
    }
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      toast.error('El nombre es obligatorio');
      return false;
    }
    
    if (!formData.lastName.trim()) {
      toast.error('El apellido es obligatorio');
      return false;
    }
    
    if (!formData.email.trim()) {
      toast.error('El email es obligatorio');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Formato de email inválido');
      return false;
    }
    
    if (!formData.role.trim()) { // ← Corregido: usar role en lugar de roles
      toast.error('El rol deseado es obligatorio');
      return false;
    }

    if (emailExists) {
      toast.error('Este email ya está registrado');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Use the external waitlist function
      const formPayload = {
        email: formData.email.trim().toLowerCase(),
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        mentor: formData.mentor,
        role: formData.role.trim(), // ← Corregido: usar role
        language: language.toUpperCase(),
        utmSource: search.get('utm_source'),
        utmMedium: search.get('utm_medium'),
        utmCampaign: search.get('utm_campaign')
      };

      console.log('Submitting waitlist form with data:', formPayload);
      const result = await submitWaitlistForm(formPayload);
      console.log('Waitlist submission successful:', result);

      // Success feedback
      toast.success(t('waitlist.form.toast.success') || '¡Registro exitoso! Te contactaremos pronto.');
      
      // Clear form
      setFormData({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        role: '', // ← Corregido: usar role
        mentor: false 
      });
      
      sessionStorage.setItem('waitlist_submitted', 'true');
      sessionStorage.setItem('submitted_email', formData.email);

      // Analytics tracking
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'waitlist_submission', {
          event_category: 'engagement',
          event_label: 'Waitlist Form',
          value: 1,
          email: formData.email,
          mentor: formData.mentor,
          role: formData.role, // ← Corregido: usar role
          utm_source: search.get('utm_source') || undefined,
          utm_medium: search.get('utm_medium') || undefined,
          utm_campaign: search.get('utm_campaign') || undefined,
          language: language,
        });
      }

      // Navigate to success page
      navigate('/thank-you');

    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error';
      console.error('[Waitlist] API error:', errorMsg, err);
      
      let userMessage = t('waitlist.form.toast.error') || 'Error al enviar. Inténtalo de nuevo.';
      
      // Customize error messages
      if (errorMsg.includes('email')) {
        userMessage = 'Error con el email. Verifica que sea correcto.';
      } else if (errorMsg.includes('validation')) {
        userMessage = 'Datos inválidos. Revisa los campos requeridos.';
      } else if (errorMsg.includes('500')) {
        userMessage = 'Error del servidor. Inténtalo más tarde.';
      }
      
      toast.error(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="bg-background text-foreground py-20 "
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                {t("waitlist.form.ctabadge")}
              </span>
              <h2 className="text-3xl md:text-4xl mb-6">
                <span className="font-bold">{t("waitlist.heading.title")}</span>{" "}
                <span className="font-bold gradient-text">
                  {t("waitlist.heading.title.gradient")}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("waitlist.heading.subtitle")}
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Check size={18} className="text-shehub-purple" />
                <span>{t("waitlist.form.benefit.realProjects")}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>{t("waitlist.form.benefit.collaboration")}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>{t("waitlist.form.benefit.mentorship")}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>{t("waitlist.form.benefit.portfolio")}</span>
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
                  <Label htmlFor="firstName">
                    {t("waitlist.form.label.name")}
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t("waitlist.form.placeholder.name")}
                    required
                    maxLength={80}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">
                    {t("waitlist.form.label.lastname")}
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t("waitlist.form.placeholder.lastname")}
                    required
                    maxLength={80}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">{t("waitlist.form.label.email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("waitlist.form.placeholder.email")}
                  required
                  maxLength={254}
                  className={emailExists ? 'border-red-500' : checkingEmail ? 'border-yellow-500' : ''}
                />
                {checkingEmail && (
                  <p className="text-sm text-yellow-600 mt-1">Verificando email...</p>
                )}
                {emailExists && (
                  <p className="text-sm text-red-600 mt-1">Este email ya está registrado</p>
                )}
              </div>

              <div>
                <div className="flex items-center mb-1 space-x-1">
                  <Label htmlFor="role">
                    {t("waitlist.form.label.role")}
                  </Label>
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
                    <TooltipContent
                      side={isMobile ? "top" : "right"}
                      align="center"
                      sideOffset={isMobile ? 8 : 0}
                      className="bg-shehub-purple text-white rounded-md px-4 py-3 w-[260px] text-sm text-left"
                    >
                      {t("waitlist.form.tooltip.role")}
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
                  maxLength={200}
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
                  aria-describedby="mentor-description"
                  title="Marcar si quieres ser mentora en la comunidad"
                />
                <Label htmlFor="mentor" className="cursor-pointer">
                  {t('waitlist.form.label.mentor')}
                </Label>
                <span id="mentor-description" className="sr-only">
                  Marcar si quieres ser mentora en la comunidad
                </span>
              </div>

              <Button
                type="submit"
                className="w-full bg-shehub-gradient text-white hover:shadow-glow-purple hover:scale-105 transition-all rounded-full"
                disabled={isSubmitting || emailExists || checkingEmail}
              >
                {isSubmitting 
                  ? (t('waitlist.form.button.submitting') || 'Enviando...') 
                  : (t('waitlist.form.button.join') || 'Unirme a la lista')
                }
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