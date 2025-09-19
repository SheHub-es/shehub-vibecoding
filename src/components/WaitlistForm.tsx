import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Info, Check } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import {
  DropdownMenu,
  DropdownMenuTriggerButton,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { submitWaitlistForm } from "@/lib/api";

import { ROLE_OPTIONS, labelForRole } from "@/constants/roles";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  mentor: boolean;
  acceptTerms: boolean;
}

const WaitlistForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [search] = useSearchParams();
  const mentorParam = search.get("mentor") === "true";
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    roles: [],
    mentor: mentorParam,
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      formData.roles.length === 0
    ) {
      toast.error(t("waitlist.form.error.required"));
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t("waitlist.form.error.email"));
      return;
    }
    if (!formData.acceptTerms) {
      toast.error(
        t("waitlist.form.error.terms") ||
        "Debes aceptar la política de privacidad y los términos de servicio."
      );
      return;
    }
    setIsSubmitting(true);
    const payload = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      mentor: formData.mentor,
      roles: formData.roles,
      language: language || 'ES',
    };
    try {
      await submitWaitlistForm(payload);
      toast.success(t("waitlist.form.toast.success"));
      setFormData(prev => ({
        ...prev,
        firstName: "",
        lastName: "",
        email: "",
        roles: [],
        mentor: false,
        acceptTerms: false,
      }));

      setSubmitAttempted(false);

      sessionStorage.setItem("waitlist_submitted", "true");

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "waitlist_submission", {
          event_category: "engagement",
          event_label: "Waitlist Form",
          value: 1,
          utm_source: search.get("utm_source") || undefined,
          utm_medium: search.get("utm_medium") || undefined,
          utm_campaign: search.get("utm_campaign") || undefined,
          language: language,
        });
      }

      navigate("/thank-you");
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Unknown error";
      console.error("[Waitlist] Backend error:", errorMsg, err);
      toast.error(
        t("waitlist.form.toast.error") || "Error al enviar. Inténtalo de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedRoleLabel = formData.roles[0]
    ? labelForRole(formData.roles[0], t)
    : null;

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
                <Check
                  size={18}
                  className="text-shehub-purple"
                />
                <span>{t("waitlist.form.benefit.realProjects")}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check
                  size={18}
                  className="text-shehub-purple"
                />
                <span>{t("waitlist.form.benefit.collaboration")}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check
                  size={18}
                  className="text-shehub-purple"
                />
                <span>{t("waitlist.form.benefit.mentorship")}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check
                  size={18}
                  className="text-shehub-purple"
                />
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
                />
              </div>

              <div>
                <div className="flex items-center mb-1 space-x-1">
                  <Label
                    id="role-label"
                    htmlFor="role"
                  >
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
                        aria-label="Más información sobre el campo Rol"
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

                <DropdownMenu>
                  <DropdownMenuTriggerButton
                    id="role"
                    aria-labelledby="role-label"
                    aria-required="true"
                    aria-invalid={formData.roles.length === 0 ? true : undefined}
                    className="w-full"
                    placeholder={
                      t("waitlist.form.placeholder.role") || "Rol deseado"
                    }
                    selected={selectedRoleLabel}
                  />
                  <DropdownMenuContent
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    avoidCollisions={false}
                  >
                    <DropdownMenuRadioGroup
                      value={formData.roles[0] ?? ""}
                      onValueChange={(value) => {
                        setFormData(prev => ({ ...prev, roles: [value] }));
                        setSubmitAttempted(false);
                      }}
                    >
                      {ROLE_OPTIONS.map((opt) => (
                        <DropdownMenuRadioItem
                          key={opt.value}
                          value={opt.value}
                        >
                          {t(opt.key)}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="mentor"
                  name="mentor"
                  type="checkbox"
                  checked={formData.mentor}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent border-shehub-purple"
                />
                <Label htmlFor="mentor">
                  {t("waitlist.form.label.mentor")}
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-shehub-gradient text-white hover:shadow-glow-purple hover:scale-105 transition-all rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? t("waitlist.form.button.submitting")
                  : t("waitlist.form.button.join")}
              </Button>
              <div className="flex items-start space-x-2 pt-2">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-border text-accent focus:ring-accent mt-0.5 border-shehub-purple"
                  aria-required="true"
                  required
                />
                <Label
                  htmlFor="acceptTerms"
                  className="text-xs text-muted-foreground"
                >
                  {t("waitlist.form.terms.prefix")}{" "}
                  <Link
                    to="/privacy"
                    className="text-shehub-purple hover:text-shehub-orange underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t("waitlist.form.terms.privacy")}
                  </Link>{" "}
                  {t("waitlist.form.terms.connector")}{" "}
                  <Link
                    to="/legal-notice"
                    className="text-shehub-purple hover:text-shehub-orange underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t("waitlist.form.terms.terms")}
                  </Link>
                  .
                </Label>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
