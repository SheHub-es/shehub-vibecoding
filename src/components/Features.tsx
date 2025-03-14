
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './FadeIn';
import { Users, Rocket, Star, Network } from 'lucide-react';

interface FeaturesProps {
  className?: string;
}

const Features: React.FC<FeaturesProps> = ({ className }) => {
  return (
    <section id="features" className={cn('py-20 relative overflow-hidden', className)}>
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
              Nuestra Plataforma
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Construye tu carrera en la industria tecnológica
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Únete a SheHub y obtén experiencia real trabajando en proyectos con equipos multidisciplinarios
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn direction="up">
            <FeatureCard 
              icon={<Users className="text-shehub-purple" />}
              title="Equipos Multidisciplinarios"
              description="Colabora con profesionales de diferentes campos y aprende cómo operan los equipos multifuncionales"
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.1}>
            <FeatureCard 
              icon={<Rocket className="text-shehub-purple" />}
              title="Proyectos Reales"
              description="Trabaja en proyectos actuales que resuelven problemas reales y construye tu portafolio profesional"
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <FeatureCard 
              icon={<Star className="text-shehub-purple" />}
              title="Mentoría Experta"
              description="Recibe orientación de profesionales de la industria que te ayudarán a crecer y mejorar tus habilidades"
            />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <FeatureCard 
              icon={<Network className="text-shehub-purple" />}
              title="Networking"
              description="Conecta con otras profesionales y construye relaciones que pueden llevarte a futuras oportunidades"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-6 h-full flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default Features;
