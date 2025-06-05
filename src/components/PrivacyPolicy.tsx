import { useLanguage } from '@/contexts/LanguageContext';
import { privacyPolicyTranslations } from '@/translations/privacy_policy';
import ClipboardToast from '@/components/ui/ClipboardToast';
import { useState } from 'react';

const EMAIL = 'info@shehub.es';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const getText = (key: string): string => {
    const translationKey = key as keyof typeof privacyPolicyTranslations;
    const translation = privacyPolicyTranslations[translationKey];
    return translation?.[language] || translation?.es || key;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  return (
    <main
      lang={language}
      className="min-h-screen bg-gradient-to-br from-cream via-white to-sand dark:from-background dark:via-background dark:to-background py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 mt-8">
            {getText('privacy.policy.title')}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-shehub-purple to-shehub-orange mx-auto rounded-full"></div>
        </header>

        <div className="glass-card bg-background/80 backdrop-blur-sm rounded-2xl shadow-soft p-8 md:p-12 space-y-12">
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.introduction.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getText('privacy.policy.introduction.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.data_collected.title')}
            </h2>
            <ul className="space-y-4 text-muted-foreground text-lg">
              {['name', 'email', 'city', 'linkedin', 'experience'].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-shehub-purple rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="leading-relaxed">{getText(`privacy.policy.data_collected.${item}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.usage.title')}
            </h2>
            <ul className="space-y-4 text-muted-foreground text-lg">
              {['newsletter', 'mentorship', 'groups', 'analytics'].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-shehub-purple rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="leading-relaxed">{getText(`privacy.policy.usage.${item}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.legal_basis.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getText('privacy.policy.legal_basis.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.sharing.title')}
            </h2>
            <ul className="space-y-4 text-muted-foreground text-lg">
              {['mentors', 'team', 'no_third_party'].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-shehub-purple rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="leading-relaxed">{getText(`privacy.policy.sharing.${item}`)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.rights.title')}
            </h2>
            <ul className="space-y-4 text-muted-foreground text-lg">
              {['access', 'rectification', 'deletion', 'opposition'].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-shehub-purple rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span className="leading-relaxed">{getText(`privacy.policy.rights.${item}`)}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed text-lg mt-6">
              {getText('privacy.policy.rights.contact')}{' '}
              <button
                onClick={handleCopyEmail}
                className="text-shehub-purple hover:text-shehub-orange transition-colors duration-300 font-medium underline"
              >
                {EMAIL}
              </button>
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.security.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getText('privacy.policy.security.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.transfers.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getText('privacy.policy.transfers.content')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 border-b border-border pb-3">
              {getText('privacy.policy.contact.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {getText('privacy.policy.contact.content')}{' '}
              <button
                onClick={handleCopyEmail}
                className="text-shehub-purple hover:text-shehub-orange transition-colors duration-300 font-medium underline"
              >
                {EMAIL}
              </button>
            </p>
          </section>

          <footer className="pt-8 border-t border-border">
            <p className="text-center text-muted-foreground text-sm">
              {getText('privacy.policy.last_updated')}: {new Date().toLocaleDateString()}
            </p>
          </footer>
        </div>
      </div>

      <ClipboardToast show={showToast} />
    </main>
  );
};

export default PrivacyPolicy;
