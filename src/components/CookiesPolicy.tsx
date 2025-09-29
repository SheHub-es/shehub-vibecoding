import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cookiesPolicyTranslations } from '@/translations/cookies_policy';

const CookiesPolicy = () => {
  const { language } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const getText = (key: string): string => {
    const translationKey = key as keyof typeof cookiesPolicyTranslations;
    const translation = cookiesPolicyTranslations[translationKey];

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
            {getText('cookies.policy.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-shehub-purple to-shehub-orange mx-auto rounded-full"></div>
        </header>

        <div className="glass-card bg-background/80 backdrop-blur-sm rounded-2xl shadow-soft p-8 md:p-12 space-y-12">
          {/* What are cookies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('cookies.policy.what.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getText('cookies.policy.what.content')}
            </p>
          </section>

          {/* Types of cookies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('cookies.policy.types.title')}
            </h2>
            <ul className="space-y-4 text-muted-foreground text-lg">
              {['essential', 'analytics', 'preferences', 'firebase'].map((type) => (
                <li key={type} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-shehub-purple rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="leading-relaxed">{getText(`cookies.policy.types.${type}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How to manage cookies */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('cookies.policy.manage.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getText('cookies.policy.manage.content')}
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('cookies.policy.contact.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getText('cookies.policy.contact.content')}{' '}
              <button
                onClick={handleEmailClick}
                className="text-shehub-purple hover:text-shehub-orange transition-colors duration-300 font-medium underline"
                aria-label="Copy email address"
              >
                info@shehub.es
              </button>
            </p>
          </section>

          {/* Last Updated */}
          <footer className="pt-8 border-t border-border">
            <p className="text-center text-muted-foreground text-sm">
              {getText('cookies.policy.last_updated')}: {new Date().toLocaleDateString()}
            </p>
          </footer>
        </div>
      </div>

      {showToast && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-background text-foreground border border-shehub-purple/60 rounded-xl px-6 py-4 shadow-[0_0_0_4px_rgba(180,136,255,0.1)] max-w-xs text-center">
            <p className="text-base font-medium">
              {language === 'cat'
                ? 'Adreça electrònica copiada al porta-retalls.'
                : language === 'en'
                ? 'Email address copied to clipboard.'
                : 'Dirección de correo copiada al portapapeles.'}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default CookiesPolicy;
