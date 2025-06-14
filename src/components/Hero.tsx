import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { ArrowDown } from 'lucide-react';
import PixelLogo from './PixelLogo';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className={cn(
        'min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden bg-background',
        className
      )}
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <FadeIn>
            <PixelLogo
              size="lg"
              variant="hero"
              className="mb-8 text-foreground"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title1')} <span className="gradient-text">{t('hero.title2')}</span><br />
              {t('hero.title3')}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              {t('hero.subtitle')}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link
              to="/waitlist"
              onClick={() => {
                window.gtag?.('event', 'waitlist_cta_click', {
                  event_category: 'engagement',
                  event_label: 'hero_button',
                });
              }}
              className="px-8 py-3 rounded-full bg-shehub-gradient text-white text-lg font-medium transition-all hover:shadow-glow-orange hover:scale-105 w-full sm:w-auto inline-block"
            >
              {t('hero.waitlist')}
            </Link>

            <div className="mt-4 text-muted-foreground text-sm max-w-2xl">
              <p>{t('hero.tagline.part1')}</p>
              <p className="font-medium text-foreground mb-4">{t('hero.tagline.part2')}</p>
            </div>

          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 mx-auto flex justify-center animate-float">
        <a
          href="#features"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm font-medium mt-4">{t('hero.discover')}</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
