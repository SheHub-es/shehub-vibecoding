import { useEffect } from 'react';
import ClosedProjectsList from '@/components/ClosedProjectsList';
import FadeIn from '@/components/FadeIn';
import { useLanguage } from '@/contexts/LanguageContext';

const ClosedProjects = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAE4F9] via-white to-sand dark:from-[#1E1E2A] dark:via-background dark:to-slate-900">
      <main className="pt-24 pb-16">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pb-6 gradient-text">
                {t("closed.title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("closed.intro")}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <ClosedProjectsList />
          </FadeIn>
        </div>
      </main>
    </div>
  );
};

export default ClosedProjects;
