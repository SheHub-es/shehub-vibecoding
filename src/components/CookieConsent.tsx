import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cookieConsentTranslations } from '@/translations/cookie_consent';

const CookieConsent = () => {
  const [showModal, setShowModal] = useState(false);
  const { language } = useLanguage();

  const getText = (key: string): string => {
    const translationKey = key as keyof typeof cookieConsentTranslations;
    const translation = cookieConsentTranslations[translationKey];
    
    if (translation) {
      return translation[language] || translation.es || key;
    }
    
    return key;
  };

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowModal(true);
    } else if (cookieConsent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-LKZ2P8PXWK';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LKZ2P8PXWK');
    `;
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    loadGoogleAnalytics();
    setShowModal(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowModal(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      return;
    }
  };

  if (!showModal) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      onKeyDown={handleKeyDown}
    >
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
      
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-lg sm:max-w-lg">
        <div className="mb-4">
          <h2 
            id="cookie-consent-title"
            className="text-xl font-semibold text-foreground mb-2"
          >
            {getText('cookie.consent.title')}
          </h2>
          <p 
            id="cookie-consent-description"
            className="text-sm text-muted-foreground leading-relaxed"
          >
            {getText('cookie.consent.description')}
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium text-foreground mb-2">
            {getText('cookie.consent.types.title')}
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li dangerouslySetInnerHTML={{ __html: getText('cookie.consent.types.essential') }} />
            <li dangerouslySetInnerHTML={{ __html: getText('cookie.consent.types.analytics') }} />
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            onClick={handleReject}
            className="w-full sm:w-auto"
            aria-label={getText('cookie.consent.reject.aria')}
          >
            {getText('cookie.consent.reject')}
          </Button>
          <Button
            onClick={handleAccept}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            aria-label={getText('cookie.consent.accept.aria')}
          >
            {getText('cookie.consent.accept')}
          </Button>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          {getText('cookie.consent.footer')}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
