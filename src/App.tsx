import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { RedirectToTeaserPage } from "@/pages/closed-projects/RedirectToTeaserPage";
import Index from "@/pages/Index";
import WaitlistPage from "@/pages/WaitlistPage";
import ThankYouPage from "@/pages/ThankYouPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import CookiesPolicyPage from "@/pages/CookiesPolicyPage";
import LegalNoticePage from "@/pages/LegalNoticePage";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import CookieConsent from "@/components/CookieConsent";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

const queryClient = new QueryClient();

const AppContent = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet key={language}>
        <title>{t("title")}</title>
        <meta name="description" content={t("metaDescription")} />
      </Helmet>

      <Toaster />
      <Sonner />
      <CookieConsent />

      <BrowserRouter>
        <Routes>
          <Route path="/closed-projects/teaser-page" element={<RedirectToTeaserPage />} />
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/waitlist" element={<Layout><WaitlistPage /></Layout>} />
          <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
          <Route path="/privacy" element={<Layout><PrivacyPolicyPage /></Layout>} />
          <Route path="/cookies" element={<Layout><CookiesPolicyPage /></Layout>} />
          <Route path="/legal-notice" element={<Layout><LegalNoticePage /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
