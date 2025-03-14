
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, Rocket, Users, Star } from 'lucide-react';
import Network from '@/components/Network';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedGradient />
      <Navbar />
      <Hero />
      
      <Features />
      
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <FadeIn>
                <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                  Proyectos Reales
                </span>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Obtén experiencia valiosa a través de la colaboración
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground mb-6">
                  En SheHub, trabajarás en proyectos reales que resuelven problemas actuales. Esta experiencia práctica es invaluable para tu crecimiento profesional y portafolio.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-lg text-muted-foreground mb-8">
                  Colabora con miembros del equipo de diferentes disciplinas, igual que en un entorno laboral real, y aprende a comunicarte y trabajar juntas de manera efectiva.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <a 
                  href="#waitlist" 
                  className="inline-flex items-center text-shehub-purple font-medium hover:underline"
                >
                  Únete a nuestra plataforma <ArrowRight size={18} className="ml-2" />
                </a>
              </FadeIn>
            </div>
            
            <div className="md:col-span-2">
              <FadeIn direction="right">
                <div className="glass-card p-8 relative">
                  <div className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-shehub-light-purple flex items-center justify-center border-4 border-white">
                    <Rocket size={20} className="text-shehub-purple" />
                  </div>
                  
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mr-4">
                        <Users size={20} className="text-shehub-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold">Equipos Diversos</h3>
                        <p className="text-sm text-muted-foreground">Colabora entre disciplinas</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Stat number="15+" label="Proyectos Activos" />
                    <Stat number="5+" label="Socios de la Industria" />
                    <Stat number="100+" label="Profesionales Tech" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-shehub-orange/10 blur-3xl" />
      </section>
      
      <section id="mentorship" className="py-20 bg-shehub-purple/5 relative overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                Orientación Experta
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Aprende de Mentoras de la Industria</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground">
                Nuestras mentoras son profesionales experimentadas que te guiarán, te darán feedback y te ayudarán a crecer en tu carrera.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up">
              <MentorCard 
                icon={<Star size={20} className="text-shehub-purple" />}
                title="Feedback Experto"
                description="Recibe retroalimentación personalizada sobre tu trabajo de profesionales en tu campo."
              />
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <MentorCard 
                icon={<Users size={20} className="text-shehub-purple" />}
                title="Orientación Profesional"
                description="Recibe consejos sobre tu trayectoria profesional y cómo alcanzar tus metas."
              />
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <MentorCard 
                icon={<Network size={20} className="text-shehub-purple" />}
                title="Conexiones en la Industria"
                description="Conecta con profesionales que pueden ayudarte a expandir tu red de contactos."
              />
            </FadeIn>
          </div>
        </div>
      </section>
      
      <WaitlistForm />
      <Footer />
    </div>
  );
};

interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => {
  return (
    <div className="flex items-center">
      <div className="w-16 text-xl font-bold">{number}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

interface MentorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card p-8 h-full relative overflow-hidden group transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-shehub-purple/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground relative z-10">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-shehub-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </div>
  );
};

export default Index;
