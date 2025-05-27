import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WaitlistPage from "@/pages/WaitlistPage";
import ThankYouPage from "@/pages/ThankYouPage";
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

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
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
