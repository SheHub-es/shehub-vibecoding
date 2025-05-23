import { Link } from 'react-router-dom';
import FadeIn from '@/components/FadeIn';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ThankYou = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const hasSubmitted = sessionStorage.getItem('waitlist_submitted');
    if (!hasSubmitted) {
      navigate('/');
    } else {
      localStorage.removeItem('waitlist_submitted');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background text-foreground">
      <main className="flex-1 flex items-center justify-center p-6 relative z-10 mt-20 lg:mt-0">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            <div className="lg:col-span-7 lg:pr-12">
              <FadeIn className="space-y-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/60 dark:bg-white/10 backdrop-blur-xl rounded-3xl shadow-soft transform rotate-1"></div>
                  <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/50 dark:border-white/20">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-shehub-purple leading-tight">
                      {t('waitlist_thanks.title')}
                    </h1>
                    <div className="space-y-6 text-md md:text-lg text-gray-700 dark:text-gray-300">
                      <p>{t('waitlist_thanks.message')}</p>
                      <p className="text-xs md:text-md font-medium text-shehub-purple">{t('waitlist_thanks.spamWarning')}</p>
                    </div>
                    <div className="mt-10">
                      <Link to="/">
                        <Button className="px-6 py-3 h-auto rounded-full bg-shehub-gradient text-white text-sm font-semibold transition-all hover:shadow-glow-purple hover:scale-105 hover:-rotate-1">
                          {t('waitlist_thanks.backToHome')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <FadeIn delay={0.3} className="space-y-8">
                <div className="relative bg-white/70 dark:bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 dark:border-white/10 shadow-soft">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold mb-2">
                      {t('waitlist_thanks.followUs')}
                    </h3>
                    <div className="w-16 h-1 bg-shehub-gradient rounded-full mx-auto"></div>
                  </div>
                  <div className="space-y-4">
                    <a href="https://www.instagram.com/shehub.es" target="_blank" rel="noopener noreferrer" className="group flex items-center p-6 rounded-2xl bg-white/80 dark:bg-white/5 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-glow-purple border border-white/50 dark:border-white/10" aria-label="Instagram">
                      <div className="p-4 rounded-xl bg-shehub-gradient mr-6 group-hover:scale-110 transition-transform">
                        <Instagram size={24} className="text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-white text-lg">Instagram</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">@shehub.es</p>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/company/shehub-es/" target="_blank" rel="noopener noreferrer" className="group flex items-center p-6 rounded-2xl bg-white/80 dark:bg-white/5 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-glow-purple border border-white/50 dark:border-white/10" aria-label="LinkedIn">
                      <div className="p-4 rounded-xl bg-shehub-gradient mr-6 group-hover:scale-110 transition-transform">
                        <Linkedin size={24} className="text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-white text-lg">LinkedIn</span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">SheHub</p>
                      </div>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
