import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";
import { ArrowRight, Shield, Heart, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

interface ForMentorsProps {
  className?: string;
}

const ForMentors: React.FC<ForMentorsProps> = ({ className }) => {
  const { t } = useLanguage();

  return (
    <section
      id="mentorship"
      className={cn(
        "py-24 bg-primary text-background relative overflow-hidden",
        className
      )}
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("mentors.title")}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg opacity-90 mb-8">
              {t("mentors.description")}
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FadeIn direction="up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 py-9 relative overflow-hidden group transition-all hover:bg-white/20">
              <div className="flex items-start">
                <div className="w-12 h-12 p-2 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Shield
                    size={18}
                    className="text-background"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mt-3 md:mt-0 mb-5">
                    {t("mentors.feature1.title")}
                  </h3>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.1}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 relative overflow-hidden group transition-all hover:bg-white/20">
              <div className="flex items-start">
                <div className="w-12 h-12 p-2 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Heart
                    size={18}
                    className="text-background"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    {t("mentors.feature2.title")}
                  </h3>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.2}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 relative overflow-hidden group transition-all hover:bg-white/20">
              <div className="flex items-start">
                <div className="w-12 h-12 p-2 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                  <Clock
                    size={18}
                    className="text-background"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">
                    {t("mentors.feature3.title")}
                  </h3>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Link
              to="/waitlist?mentor=true"
              onClick={() => {
                window.gtag?.('event', 'waitlist_cta_click', {
                  event_category: 'engagement',
                  event_label: 'mentorship_section_button',
                });
              }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-background text-primary text-lg font-medium transition-all hover:shadow-lg hover:scale-105"
            >
              {t("mentors.cta")}{" "}
              <ArrowRight
                className="ml-2"
                size={18}
              />
            </Link>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ForMentors;
