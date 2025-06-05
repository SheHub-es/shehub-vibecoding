import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { legalNoticeTranslations } from '@/translations/legal_notice';
import ClipboardToast from '@/components/ui/ClipboardToast';

const LegalNotice = () => {
  const { language } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const getLegalText = (key: string): string => {
    const translationKey = key as keyof typeof legalNoticeTranslations;
    const translation = legalNoticeTranslations[translationKey];

    return translation?.[language] || translation?.es || key;
  };

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('info@shehub.es');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error('Clipboard error:', err);
    }
  };

  return (
    <main lang={language} className="min-h-screen bg-gradient-to-br from-cream via-white to-sand dark:from-background dark:via-background dark:to-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8">
            {getLegalText('legal.notice.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-shehub-purple to-shehub-orange mx-auto rounded-full"></div>
        </header>

        <div className="glass-card bg-background/80 backdrop-blur-sm rounded-2xl shadow-soft p-8 md:p-12 space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getLegalText('legal.notice.entity.title')}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">{getLegalText('legal.notice.entity.name')}:</strong> SheHub
              </p>
              <p>
                <strong className="text-foreground">{getLegalText('legal.notice.entity.email')}:</strong>{' '}
                <button
                  onClick={handleEmailClick}
                  className="text-shehub-purple hover:text-shehub-orange transition-colors duration-300 font-medium underline"
                  aria-label="Copy email address"
                >
                  info@shehub.es
                </button>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getLegalText('legal.notice.purpose.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getLegalText('legal.notice.purpose.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getLegalText('legal.notice.intellectual_property.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getLegalText('legal.notice.intellectual_property.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getLegalText('legal.notice.responsibility.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getLegalText('legal.notice.responsibility.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getLegalText('legal.notice.usage.title')}
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p className="leading-relaxed">
                {getLegalText('legal.notice.usage.responsible')}
              </p>
              <p className="leading-relaxed">
                {getLegalText('legal.notice.usage.prohibited')}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getLegalText('legal.notice.cookies.title')}
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p className="leading-relaxed">
                {getLegalText('legal.notice.cookies.content')}
              </p>
              <p>
                <a
                  href="/cookies"
                  className="text-shehub-purple hover:text-shehub-orange transition-colors duration-300 font-medium underline"
                >
                  {getLegalText('legal.notice.cookies.link')}
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getLegalText('legal.notice.law.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getLegalText('legal.notice.law.content')}
            </p>
          </section>

          <footer className="pt-8 border-t border-border">
            <p className="text-center text-muted-foreground text-sm">
              {getLegalText('legal.notice.last_updated')}: {new Date().toLocaleDateString()}
            </p>
          </footer>
        </div>
      </div>

      <ClipboardToast show={showToast} />
    </main>
  );
};

export default LegalNotice;
