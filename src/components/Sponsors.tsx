import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import ClipboardToast from "@/components/ui/clipboard-toast";
import { sponsors } from "@/data/sponsors-data";
import SponsorCard from "@/components/ui/sponsor-card";

interface SponsorsProps {
  className?: string;
}

const Sponsors: React.FC<SponsorsProps> = ({ className }) => {
  const { t } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("info@shehub.es");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  return (
    <section
      id="sponsors"
      className={cn("py-16 bg-muted/30 dark:bg-muted/60", className)}
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-8 py-4 md:py-12">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {t("sponsors.title")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground">
              {t("sponsors.subtitle")}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div
            className="
      grid grid-cols-2 gap-8 mt-14
      sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-10
    "
          >
            {sponsors.map((sponsor) => (
              <SponsorCard
                key={sponsor.name}
                sponsor={sponsor}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground inline">
              {t("sponsors.interested")}
            </p>
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label={t("sponsors.contactAriaLabel")}
              className="text-shehub-purple hover:underline ml-1 underline text-sm"
            >
              {t("sponsors.contact")}
            </button>
          </div>
        </FadeIn>
      </div>

      <ClipboardToast show={showToast} />
    </section>
  );
};

export default Sponsors;
