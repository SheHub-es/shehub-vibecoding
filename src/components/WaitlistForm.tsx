import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RoleDropdown from "@/components/ui/role-dropdown";
import TermsCheckbox from "@/components/ui/terms-checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Wrench } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "./FadeIn";
import { submitWaitlistForm, checkEmailExists } from "@/lib/api.js";

// Activar modo mantenimiento durante la migración
const MAINTENANCE_MODE = true;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  mentor: boolean;
  termsAccepted: boolean;
}

const WaitlistForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [search] = useSearchParams();
  const mentorParam = search.get("mentor") === "true";

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    mentor: mentorParam,
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "email" && value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      checkEmailExistence(value);
    } else if (name === "email") {
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
          toast.info(
            "Este email fue usado anteriormente pero está marcado como eliminado."
          );
        } else {
          toast.warning(
            "Este email ya está registrado en nuestra base de datos."
          );
        }
      }
    } catch (error) {
      console.error("Error checking email:", error);
    } finally {
      setCheckingEmail(false);
    }
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      toast.error(t("waitlist.form.error.requiredName"));
      return false;
    }

    if (!formData.lastName.trim()) {
      toast.error(t("waitlist.form.error.requiredLastName"));
      return false;
    }

    if (!formData.email.trim()) {
      toast.error(t("waitlist.form.error.requiredEmail"));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t("waitlist.form.error.invalidEmail"));
      return false;
    }

    if (!formData.role.trim()) {
      toast.error(t("waitlist.form.error.requiredRole"));
      return false;
    }

    if (emailExists) {
      toast.error(t("waitlist.form.error.emailExists"));
      return false;
    }

    if (!formData.termsAccepted) {
      toast.error(t("waitlist.form.error.acceptTerms"));
      return false;
    }

    return true;
  };

  const handleRoleSelect = (roleValue: string) => {
    setFormData((prev) => ({ ...prev, role: roleValue }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (MAINTENANCE_MODE) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formPayload = {
        email: formData.email.trim().toLowerCase(),
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        mentor: formData.mentor,
        role: formData.role.trim(),
        language: language.toUpperCase(),
        utmSource: search.get("utm_source"),
        utmMedium: search.get("utm_medium"),
        utmCampaign: search.get("utm_campaign"),
      };

      const result = await submitWaitlistForm(formPayload);

      toast.success(
        t("waitlist.form.toast.success") ||
        "¡Registro exitoso! Te contactaremos pronto."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        mentor: false,
        termsAccepted: false,
      });

      sessionStorage.setItem("waitlist_submitted", "true");
      sessionStorage.setItem("submitted_email", formData.email);

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "waitlist_submission", {
          event_category: "engagement",
          event_label: "Waitlist Form",
          value: 1,
          email: formData.email,
          mentor: formData.mentor,
          role: formData.role,
          utm_source: search.get("utm_source") || undefined,
          utm_medium: search.get("utm_medium") || undefined,
          utm_campaign: search.get("utm_campaign") || undefined,
          language: language,
        });
      }

      navigate("/thank-you");
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      console.error("[Waitlist] API error:", errorMsg, err);

      let userMessage =
        t("waitlist.form.toast.error") ||
        "Error al enviar. Inténtalo de nuevo.";

      if (errorMsg.includes("email")) {
        userMessage = "Error con el email. Verifica que sea correcto.";
      } else if (errorMsg.includes("validation")) {
        userMessage = "Datos inválidos. Revisa los campos requeridos.";
      } else if (errorMsg.includes("500")) {
        userMessage = "Error del servidor. Inténtalo más tarde.";
      }

      toast.error(userMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="bg-background text-foreground py-20">
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
              noValidate
              className="space-y-6 bg-white/60 dark:bg-white/5 border border-border/30 p-8 rounded-3xl shadow-soft backdrop-blur-xl"
            >
              {MAINTENANCE_MODE && (
                <div className="mb-6 p-4 rounded-lg bg-shehub-purple/10 border border-shehub-purple/20">
                  <div className="flex items-start space-x-3">
                    <Wrench className="w-5 h-5 text-shehub-purple mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground">
                      {t("waitlist.form.maintenance.banner")}
                    </p>
                  </div>
                </div>
              )}
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
                      placeholder={
                        MAINTENANCE_MODE
                          ? t("waitlist.form.placeholder.name.maintenance")
                          : t("waitlist.form.placeholder.name")
                      }
                      required
                      maxLength={80}
                      disabled={MAINTENANCE_MODE}
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
                      placeholder={
                        MAINTENANCE_MODE
                          ? t("waitlist.form.placeholder.lastname.maintenance")
                          : t("waitlist.form.placeholder.lastname")
                      }
                      required
                      maxLength={80}
                      disabled={MAINTENANCE_MODE}
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
                    placeholder={
                      MAINTENANCE_MODE
                        ? t("waitlist.form.placeholder.email.maintenance")
                        : t("waitlist.form.placeholder.email")
                    }
                    required
                    maxLength={254}
                    disabled={MAINTENANCE_MODE}
                    className={
                      emailExists
                        ? "border-red-500"
                        : checkingEmail
                          ? "border-yellow-500"
                          : ""
                    }
                  />
                  {checkingEmail && (
                    <p className="text-sm text-yellow-600 mt-1">
                      Verificando email...
                    </p>
                  )}
                  {emailExists && (
                    <p className="text-sm text-red-600 mt-1">
                      Este email ya está registrado
                    </p>
                  )}
                </div>

                <RoleDropdown
                  selectedRole={formData.role}
                  onSelect={handleRoleSelect}
                  label={t("waitlist.form.label.role")}
                  tooltipText={t("waitlist.form.tooltip.role")}
                  placeholder={
                    MAINTENANCE_MODE
                      ? t("waitlist.form.placeholder.role.maintenance")
                      : t("waitlist.form.placeholder.role")
                  }
                  t={t}
                  disabled={MAINTENANCE_MODE}
                />

                <div className="flex items-center space-x-2">
                  <input
                    id="mentor"
                    name="mentor"
                    type="checkbox"
                    checked={formData.mentor}
                    onChange={handleChange}
                    disabled={MAINTENANCE_MODE}
                    className="h-4 w-4 rounded border-border text-accent focus:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
                    aria-describedby="mentor-description"
                    title="Marcar si quieres ser mentora en la comunidad"
                  />
                  <Label htmlFor="mentor" className={MAINTENANCE_MODE ? "cursor-not-allowed opacity-50" : "cursor-pointer"}>
                    {t("waitlist.form.label.mentor")}
                  </Label>
                  <span id="mentor-description" className="sr-only">
                    Marcar si quieres ser mentora en la comunidad
                  </span>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-shehub-gradient text-white hover:shadow-glow-purple hover:scale-105 transition-all rounded-full"
                  disabled={MAINTENANCE_MODE || isSubmitting || emailExists || checkingEmail}
                >
                  {isSubmitting
                    ? t("waitlist.form.button.submitting") || "Enviando..."
                    : t("waitlist.form.button.join") || "Unirme a la lista"}
                </Button>

                <TermsCheckbox
                  t={t}
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  disabled={MAINTENANCE_MODE}
                />
                <p className="text-xs text-muted-foreground text-right mt-2">
                  * {t("waitlist.form.note.required")}
                </p>
              </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
