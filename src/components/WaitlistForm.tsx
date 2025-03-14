
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import FadeIn from './FadeIn';
import { Check, Loader2, Mail } from 'lucide-react';

interface WaitlistFormProps {
  className?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "¡Éxito!",
        description: "Has sido añadida a nuestra lista de espera. ¡Nos pondremos en contacto pronto!",
        duration: 5000,
      });
      
      // Reset form
      setEmail('');
      setName('');
      setProfession('');
      
      // Reset submitted state after delay for animation
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="waitlist" className={cn('py-20 relative overflow-hidden', className)}>
      <div className="container max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <span className="px-4 py-1.5 bg-shehub-purple/20 text-shehub-purple font-pixel text-sm rounded-full font-medium mb-6 inline-block uppercase tracking-wider">
                ¿Lista para unirte?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Únete a Nuestra Lista de Espera
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                ¡Pronto lanzamos! Únete a nuestra lista de espera y sé la primera en saber cuándo abrimos la inscripción para nuestra cohorte inicial de profesionales tecnológicas colaborativas.
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Check size={18} className="text-shehub-purple" />
                <span>Trabaja en proyectos del mundo real</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>Colabora con equipos multidisciplinarios</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>Recibe mentoría de expertas de la industria</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground mt-3">
                <Check size={18} className="text-shehub-purple" />
                <span>Construye tu portafolio y red de contactos</span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Solicita una Invitación</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-purple focus:ring-1 focus:ring-shehub-purple transition-all"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-purple focus:ring-1 focus:ring-shehub-purple transition-all"
                    placeholder="tu@ejemplo.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="profession" className="block text-sm font-medium mb-2">Tu Experiencia/Rol</label>
                  <input
                    type="text"
                    id="profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-shehub-purple focus:ring-1 focus:ring-shehub-purple transition-all"
                    placeholder="ej. Diseñadora UX/UI, Desarrolladora Frontend"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className={cn(
                    "w-full py-3 rounded-lg font-medium text-white flex items-center justify-center transition-all",
                    submitting ? "bg-shehub-purple/80" : submitted ? "bg-green-500" : "bg-shehub-gradient hover:shadow-glow-purple"
                  )}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : submitted ? (
                    <>
                      <Check size={20} className="mr-2" />
                      ¡Enviado!
                    </>
                  ) : (
                    <>
                      <Mail size={20} className="mr-2" />
                      Unirse a la Lista de Espera
                    </>
                  )}
                </button>
                
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Al registrarte, aceptas nuestra política de privacidad y términos de servicio.
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
