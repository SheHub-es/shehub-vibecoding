import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import WaitlistPage from "@/pages/WaitlistPage";
import ThankYouPage from "@/pages/ThankYouPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import CookiesPolicyPage from "@/pages/CookiesPolicyPage";
import LegalNoticePage from "@/pages/LegalNoticePage";
import PreviousProjectsPage from "@/pages/ClosedProjectsPage";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import CookieConsent from "@/components/CookieConsent";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/cookies" element={<CookiesPolicyPage />} />
          <Route path="/legal-notice" element={<LegalNoticePage />} />
          <Route path="/closed-projects" element={<PreviousProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
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
