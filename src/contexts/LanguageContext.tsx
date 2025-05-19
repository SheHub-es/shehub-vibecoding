import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en' | 'ca';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations for all the text on the website
const translations = {
  // Navbar translations
  'nav.about': {
    en: 'Why SheHub',
    es: 'Por qué SheHub',
    ca: 'Per què SheHub',
  },
  'nav.projects': {
    en: 'How It Works',
    es: 'Cómo Funciona',
    ca: 'Com Funciona',
  },
  'nav.mentorship': {
    en: 'For Mentors',
    es: 'Para Mentoras',
    ca: 'Per a Mentores',
  },
  'nav.faq': {
    en: 'FAQ',
    es: 'Preguntas Frecuentes',
    ca: 'Preguntes Freqüents',
  },
  'nav.waitlist': {
    en: 'Join Waitlist',
    es: 'Únete a la Lista',
    ca: 'Uneix-te a la Llista',
  },
  
  // Footer translations
  'footer.based': {
    en: 'Based in Spain — open to the world',
    es: 'Basado en España — abierto al mundo',
    ca: 'Basat a Espanya — obert al món',
  },
  'footer.follow': {
    en: 'Follow us:',
    es: 'Síguenos:',
    ca: 'Segueix-nos:',
  },
  'footer.how': {
    en: 'How it Works',
    es: 'Cómo Funciona',
    ca: 'Com Funciona',
  },
  'footer.overview': {
    en: 'Overview',
    es: 'Resumen',
    ca: 'Resum',
  },
  'footer.faq.title': {
    en: 'FAQ',
    es: 'Preguntas Frecuentes',
    ca: 'Preguntes Freqüents',
  },
  'footer.faq.questions': {
    en: 'Common Questions',
    es: 'Preguntas Comunes',
    ca: 'Preguntes Comunes',
  },
  'footer.why': {
    en: 'Why SheHub',
    es: 'Por qué SheHub',
    ca: 'Per què SheHub',
  },
  'footer.mission': {
    en: 'Our Mission',
    es: 'Nuestra Misión',
    ca: 'La Nostra Missió',
  },
  'footer.mentors.title': {
    en: 'Mentors',
    es: 'Mentoras',
    ca: 'Mentores',
  },
  'footer.mentors.involved': {
    en: 'Get Involved',
    es: 'Involúcrate',
    ca: 'Involucra\'t',
  },
  'footer.rights': {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
    ca: 'Tots els drets reservats.',
  },
  
  // JoinWaitlist translations
  'waitlist.title': {
    en: 'Ready to grow or give back?',
    es: '¿Lista para crecer o contribuir?',
    ca: 'Preparada per créixer o contribuir?',
  },
  'waitlist.subtitle': {
    en: 'Whether you\'re pivoting into tech or growing as a leader, SheHub is your space to contribute and thrive.',
    es: 'Ya sea que estés cambiando al sector tecnológico o creciendo como líder, SheHub es tu espacio para contribuir y prosperar.',
    ca: 'Ja sigui que estiguis canviant al sector tecnològic o creixent com a líder, SheHub és el teu espai per contribuir i prosperar.',
  },
  'waitlist.button': {
    en: 'Join the Waitlist',
    es: 'Únete a la Lista de Espera',
    ca: 'Uneix-te a la Llista d\'Espera',
  },
  'waitlist.promise': {
    en: 'We\'ll be in touch as soon as your opportunity opens up.',
    es: 'Nos pondremos en contacto tan pronto como se abra tu oportunidad.',
    ca: 'Ens posarem en contacte tan aviat com s\'obri la teva oportunitat.',
  },
  
  // Hero section translations
  'hero.title1': {
    en: 'Connect.',
    es: 'Conecta.',
    ca: 'Connecta.',
  },
  'hero.title2': {
    en: 'Create.',
    es: 'Crea.',
    ca: 'Crea.',
  },
  'hero.title3': {
    en: 'Break Barriers.',
    es: 'Rompe Barreras.',
    ca: 'Trenca Barreres.',
  },
  'hero.subtitle': {
    en: 'Real tech experience for women ready to grow. Work on real projects. Build in real teams. Guided by mentors.',
    es: 'Experiencia tech real para mujeres listas para crecer. Trabaja en proyectos reales. Construye en equipos reales. Guiada por mentores.',
    ca: 'Experiència tech real per a dones preparades per créixer. Treballa en projectes reals. Construeix en equips reals. Guiada per mentors.',
  },
  'hero.waitlist': {
    en: 'Join the Waitlist',
    es: 'Únete a la Lista de Espera',
    ca: 'Uneix-te a la Llista d\'Espera',
  },
  'hero.tagline': {
    en: 'Whether you\'re here to grow your experience or grow mentoring others — SheHub is your next step.',
    es: 'Ya sea que estés aquí para aumentar tu experiencia o crecer mentorando a otras — SheHub es tu próximo paso.',
    ca: 'Ja sigui que estiguis aquí per augmentar la teva experiència o créixer mentoritzant altres — SheHub és el teu següent pas.',
  },
  'hero.discover': {
    en: 'Discover More',
    es: 'Descubre Más',
    ca: 'Descobreix Més',
  },
  
  // Features section translations
  'features.title': {
    en: 'Our Platform',
    es: 'Nuestra Plataforma',
    ca: 'La Nostra Plataforma',
  },
  'features.headline': {
    en: 'Build your career in the tech industry',
    es: 'Construye tu carrera en la industria tecnológica',
    ca: 'Construeix la teva carrera a la indústria tecnològica',
  },
  'features.description': {
    en: 'Join SheHub and gain real experience working on projects with multidisciplinary teams',
    es: 'Únete a SheHub y obtén experiencia real trabajando en proyectos con equipos multidisciplinarios',
    ca: 'Uneix-te a SheHub i obté experiència real treballant en projectes amb equips multidisciplinaris',
  },
  'features.teams.title': {
    en: 'Multidisciplinary Teams',
    es: 'Equipos Multidisciplinarios',
    ca: 'Equips Multidisciplinaris',
  },
  'features.teams.description': {
    en: 'Collaborate with professionals from different fields and learn how cross-functional teams operate',
    es: 'Colabora con profesionales de diferentes campos y aprende cómo operan los equipos multifuncionales',
    ca: 'Col·labora amb professionals de diferents camps i aprèn com operen els equips multifuncionals',
  },
  'features.projects.title': {
    en: 'Real Projects',
    es: 'Proyectos Reales',
    ca: 'Projectes Reals',
  },
  'features.projects.description': {
    en: 'Work on current projects that solve real problems and build your professional portfolio',
    es: 'Trabaja en proyectos actuales que resuelven problemas reales y construye tu portafolio profesional',
    ca: 'Treballa en projectes actuals que resolen problemes reals i construeix el teu portfoli professional',
  },
  'features.mentorship.title': {
    en: 'Expert Mentorship',
    es: 'Mentoría Experta',
    ca: 'Mentoria Experta',
  },
  'features.mentorship.description': {
    en: 'Receive guidance from industry professionals who will help you grow and improve your skills',
    es: 'Recibe orientación de profesionales de la industria que te ayudarán a crecer y mejorar tus habilidades',
    ca: 'Rep orientació de professionals de la indústria que t\'ajudaran a créixer i millorar les teves habilitats',
  },
  'features.networking.title': {
    en: 'Networking',
    es: 'Networking',
    ca: 'Networking',
  },
  'features.networking.description': {
    en: 'Connect with other professionals and build relationships that can lead to future opportunities',
    es: 'Conecta con otras profesionales y construye relaciones que pueden llevarte a futuras oportunidades',
    ca: 'Conecta amb altres professionals i construeix relacions que poden portar-te a futures oportunitats',
  },
  
  // Projects section translations
  'projects.title': {
    en: 'Real Projects',
    es: 'Proyectos Reales',
    ca: 'Projectes Reals',
  },
  'projects.headline': {
    en: 'Gain valuable experience through collaboration',
    es: 'Obtén experiencia valiosa a través de la colaboración',
    ca: 'Obté experiència valuosa a través de la col·laboració',
  },
  'projects.description1': {
    en: 'At SheHub, you will work on real projects that solve current problems. This hands-on experience is invaluable for your professional growth and portfolio.',
    es: 'En SheHub, trabajarás en proyectos reales que resuelven problemas actuales. Esta experiencia práctica es invaluable para tu crecimiento profesional y portafolio.',
    ca: 'A SheHub, treballaràs en projectes reals que resolen problemes actuals. Aquesta experiència pràctica és invaluable per al teu creixement professional i portfoli.',
  },
  'projects.description2': {
    en: 'Collaborate with team members from different disciplines, just like in a real work environment, and learn to communicate and work together effectively.',
    es: 'Colabora con miembros del equipo de diferentes disciplinas, igual que en un entorno laboral real, y aprende a comunicarte y trabajar juntas de manera efectiva.',
    ca: 'Col·labora amb membres de l\'equip de diferents disciplines, igual que en un entorn laboral real, i aprèn a comunicar-te i treballar juntes de manera efectiva.',
  },
  'projects.cta': {
    en: 'Join our platform',
    es: 'Únete a nuestra plataforma',
    ca: 'Uneix-te a la nostra plataforma',
  },
  'projects.diverse': {
    en: 'Diverse Teams',
    es: 'Equipos Diversos',
    ca: 'Equips Diversos',
  },
  'projects.collaboration': {
    en: 'Cross-discipline collaboration',
    es: 'Colabora entre disciplinas',
    ca: 'Col·labora entre disciplines',
  },
  'projects.stats.active': {
    en: 'Active Projects',
    es: 'Proyectos Activos',
    ca: 'Projectes Actius',
  },
  'projects.stats.partners': {
    en: 'Industry Partners',
    es: 'Socios de la Industria',
    ca: 'Socis de la Indústria',
  },
  'projects.stats.professionals': {
    en: 'Tech Professionals',
    es: 'Profesionales Tech',
    ca: 'Professionals Tech',
  },
  
  // Mentorship section translations
  'mentorship.title': {
    en: 'Expert Guidance',
    es: 'Orientación Experta',
    ca: 'Orientació Experta',
  },
  'mentorship.headline': {
    en: 'Learn from Industry Mentors',
    es: 'Aprende de Mentoras de la Industria',
    ca: 'Aprèn de Mentores de la Indústria',
  },
  'mentorship.description': {
    en: 'Our mentors are experienced professionals who will guide you, give you feedback, and help you grow in your career.',
    es: 'Nuestras mentoras son profesionales experimentadas que te guiarán, te darán feedback y te ayudarán a crecer en tu carrera.',
    ca: 'Les nostres mentores són professionals experimentades que et guiaran, et donaran feedback i t\'ajudaran a créixer en la teva carrera.',
  },
  'mentorship.feedback.title': {
    en: 'Expert Feedback',
    es: 'Feedback Experto',
    ca: 'Feedback Expert',
  },
  'mentorship.feedback.description': {
    en: 'Receive personalized feedback on your work from professionals in your field.',
    es: 'Recibe retroalimentación personalizada sobre tu trabajo de profesionales en tu campo.',
    ca: 'Rep retroalimentació personalitzada sobre el teu treball de professionals en el teu camp.',
  },
  'mentorship.guidance.title': {
    en: 'Career Guidance',
    es: 'Orientación Profesional',
    ca: 'Orientació Professional',
  },
  'mentorship.guidance.description': {
    en: 'Receive advice on your career path and how to achieve your goals.',
    es: 'Recibe consejos sobre tu trayectoria profesional y cómo alcanzar tus metas.',
    ca: 'Rep consells sobre la teva trajectòria profesional i com assolir els teus objectius.',
  },
  'mentorship.connections.title': {
    en: 'Industry Connections',
    es: 'Conexiones en la Industria',
    ca: 'Connexions a la Indústria',
  },
  'mentorship.connections.description': {
    en: 'Connect with professionals who can help you expand your network.',
    es: 'Conecta con profesionales que pueden ayudarte a expandir tu red de contactos.',
    ca: 'Connecta amb professionals que poden ajudar-te a expandir la teva xarxa de contactes.',
  },
  
  // Waitlist section translations
  'waitlist.title': {
    en: 'Ready to join?',
    es: '¿Lista para unirte?',
    ca: 'Preparada per unir-te?',
  },
  'waitlist.headline': {
    en: 'Join Our Waitlist',
    es: 'Únete a Nuestra Lista de Espera',
    ca: 'Uneix-te a la Nostra Llista d\'Espera',
  },
  'waitlist.description': {
    en: 'We\'re launching soon! Join our waitlist and be the first to know when we open registration for our initial cohort of collaborative tech professionals.',
    es: '¡Pronto lanzamos! Únete a nuestra lista de espera y sé la primera en saber cuándo abrimos la inscripción para nuestra cohorte inicial de profesionales tecnológicas colaborativas.',
    ca: 'Aviat llancem! Uneix-te a la nostra llista d\'espera i sigues la primera en saber quan obrim la inscripció per a la nostra cohort inicial de professionals tecnològics col·laboratives.',
  },
  'waitlist.benefit1': {
    en: 'Work on real-world projects',
    es: 'Trabaja en proyectos del mundo real',
    ca: 'Treballa en projectes del món real',
  },
  'waitlist.benefit2': {
    en: 'Collaborate with multidisciplinary teams',
    es: 'Colabora con equipos multidisciplinarios',
    ca: 'Col·labora amb equips multidisciplinaris',
  },
  'waitlist.benefit3': {
    en: 'Receive mentorship from industry experts',
    es: 'Recibe mentoría de expertas de la industria',
    ca: 'Rep mentoria d\'expertes de la indústria',
  },
  'waitlist.benefit4': {
    en: 'Build your portfolio and network',
    es: 'Construye tu portafolio y red de contactos',
    ca: 'Construeix el teu portfoli i xarxa de contactes',
  },
  'waitlist.form.title': {
    en: 'Request an Invitation',
    es: 'Solicita una Invitación',
    ca: 'Sol·licita una Invitació',
  },
  'waitlist.form.name': {
    en: 'Full Name',
    es: 'Nombre Completo',
    ca: 'Nom Complet',
  },
  'waitlist.form.email': {
    en: 'Email',
    es: 'Correo Electrónico',
    ca: 'Correu Electrònic',
  },
  'waitlist.form.role': {
    en: 'Your Experience/Role',
    es: 'Tu Experiencia/Rol',
    ca: 'La Teva Experiència/Rol',
  },
  'waitlist.form.placeholder.name': {
    en: 'Your name',
    es: 'Tu nombre',
    ca: 'El teu nom',
  },
  'waitlist.form.placeholder.email': {
    en: 'you@example.com',
    es: 'tu@ejemplo.com',
    ca: 'tu@exemple.com',
  },
  'waitlist.form.placeholder.role': {
    en: 'e.g. UX/UI Designer, Frontend Developer',
    es: 'ej. Diseñadora UX/UI, Desarrolladora Frontend',
    ca: 'ex. Dissenyadora UX/UI, Desenvolupadora Frontend',
  },
  'waitlist.form.submit': {
    en: 'Join the Waitlist',
    es: 'Unirse a la Lista de Espera',
    ca: 'Uneix-te a la Llista d\'Espera',
  },
  'waitlist.form.sending': {
    en: 'Sending...',
    es: 'Enviando...',
    ca: 'Enviant...',
  },
  'waitlist.form.success': {
    en: 'Submitted!',
    es: '¡Enviado!',
    ca: 'Enviat!',
  },
  'waitlist.form.privacy': {
    en: 'By registering, you agree to our privacy policy and terms of service.',
    es: 'Al registrarte, aceptas nuestra política de privacidad y términos de servicio.',
    ca: 'En registrar-te, acceptes la nostra política de privacitat i condicions de servei.',
  },
  
  // Footer translations
  'footer.description': {
    en: 'SheHub connects tech bootcamp graduates from different roles who want to build a career in the tech industry, guided by expert mentors.',
    es: 'SheHub conecta a graduadas de bootcamps tecnológicos de diferentes roles que quieren construir una carrera en la industria tech, guiadas por mentoras expertas.',
    ca: 'SheHub connecta graduades de bootcamps tecnològics de diferents rols que volen construir una carrera a la indústria tech, guiades per mentores expertes.',
  },
  'footer.quicklinks': {
    en: 'Quick Links',
    es: 'Enlaces Rápidos',
    ca: 'Enllaços Ràpids',
  },
  'footer.about': {
    en: 'About Us',
    es: 'Acerca de Nosotras',
    ca: 'Sobre Nosaltres',
  },
  'footer.projects': {
    en: 'Projects',
    es: 'Proyectos',
    ca: 'Projectes',
  },
  'footer.mentorship': {
    en: 'Mentorship',
    es: 'Mentoría',
    ca: 'Mentoria',
  },
  'footer.waitlist': {
    en: 'Join the Waitlist',
    es: 'Unirse a la Lista de Espera',
    ca: 'Uneix-te a la Llista d\'Espera',
  },
  'footer.contact': {
    en: 'Contact',
    es: 'Contacto',
    ca: 'Contacte',
  },
  'footer.questions': {
    en: 'Have questions?',
    es: '¿Tienes preguntas?',
    ca: 'Tens preguntes?',
  },
  'footer.rights': {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
    ca: 'Tots els drets reservats.',
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    es: 'Política de Privacidad',
    ca: 'Política de Privacitat',
  },
  'footer.terms': {
    en: 'Terms of Service',
    es: 'Términos de Servicio',
    ca: 'Condicions de Servei',
  },
  'toast.success.title': {
    en: 'Success!',
    es: '¡Éxito!',
    ca: 'Èxit!',
  },
  'toast.success.description': {
    en: 'You have been added to our waitlist. We will contact you soon!',
    es: 'Has sido añadida a nuestra lista de espera. ¡Nos pondremos en contacto pronto!',
    ca: 'Has estat afegida a la nostra llista d\'espera. Ens posarem en contacte aviat!',
  },
};

type TranslationsType = typeof translations;

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get the language from localStorage, default to Spanish
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage as Language) || 'es';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Also update the html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Helper function to get translations
  const t = (key: string): string => {
    const keyParts = key.split('.');
    
    // Type assertion to help TypeScript understand our structure
    const translationObj = translations as Record<string, Record<string, string>>;
    
    if (translationObj[key] && translationObj[key][language]) {
      return translationObj[key][language];
    }
    
    // Fallback to Spanish if translation is missing
    if (translationObj[key] && translationObj[key]['es']) {
      return translationObj[key]['es'];
    }
    
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
