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
    en: 'About',
    es: 'Acerca de',
    ca: 'Sobre nosaltres',
  },
  'nav.projects': {
    en: 'Projects',
    es: 'Proyectos',
    ca: 'Projectes',
  },
  'nav.mentorship': {
    en: 'Mentorship',
    es: 'Mentoría',
    ca: 'Mentoria',
  },
  'nav.waitlist': {
    en: 'Join Waitlist',
    es: 'Unirse a la Lista de Espera',
    ca: 'Uneix-te a la Llista d\'Espera',
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
  
  // Why SheHub section
  'whyshehub.title': {
    en: 'SheHub is where women turn learning into opportunities.',
    es: 'SheHub es donde las mujeres convierten el aprendizaje en oportunidades.',
    ca: 'SheHub és on les dones converteixen l\'aprenentatge en oportunitats.',
  },
  'whyshehub.subtitle': {
    en: 'We provide the space, the tools, and the mentorship to transform potential into visible, proven experience.',
    es: 'Proporcionamos el espacio, las herramientas y la mentoría para transformar el potencial en experiencia visible y probada.',
    ca: 'Proporcionem l\'espai, les eines i la mentoria per transformar el potencial en experiència visible i comprovada.',
  },
  'whyshehub.feature1.title': {
    en: 'Build experience that matters',
    es: 'Construye experiencia que importa',
    ca: 'Construeix experiència que importa',
  },
  'whyshehub.feature1.description': {
    en: 'Work on real features from start to finish. Not practice tasks, but product-ready results.',
    es: 'Trabaja en características reales de principio a fin. No son tareas de práctica, sino resultados listos para el producto.',
    ca: 'Treballa en característiques reals de principi a fi. No són tasques de pràctica, sinó resultats preparats per al producte.',
  },
  'whyshehub.feature2.title': {
    en: 'Grow in a real tech environment',
    es: 'Crece en un entorno tecnológico real',
    ca: 'Creix en un entorn tecnològic real',
  },
  'whyshehub.feature2.description': {
    en: 'Collaborate with contributors across product, design, dev, data or marketing — using lean practices.',
    es: 'Colabora con contribuyentes de producto, diseño, desarrollo, datos o marketing, utilizando prácticas lean.',
    ca: 'Col·labora amb contribuents de producte, disseny, desenvolupament, dades o màrqueting, utilitzant pràctiques lean.',
  },
  'whyshehub.feature3.title': {
    en: 'Be seen, supported, and ready to grow',
    es: 'Sé vista, apoyada y lista para crecer',
    ca: 'Sigues vista, recolzada i preparada per créixer',
  },
  'whyshehub.feature3.description': {
    en: 'Get mentorship, demos, and outcomes that give your talent visibility. We give you the tools to build an attractive portfolio and CV.',
    es: 'Obtén mentoría, demostraciones y resultados que den visibilidad a tu talento. Te damos las herramientas para construir un portafolio y CV atractivos.',
    ca: 'Obtingues mentoria, demostracions i resultats que donin visibilitat al teu talent. Et donem les eines per construir un portfoli i CV atractius.',
  },
  'whyshehub.feature4.title': {
    en: 'Flexible and Remote-first',
    es: 'Flexible y remoto principalmente',
    ca: 'Flexible i principalment remot',
  },
  'whyshehub.feature4.description': {
    en: 'Every project is fully remote and part-time, designed to fit around your job, studies, or personal life, so you can grow on your terms.',
    es: 'Cada proyecto es completamente remoto y a tiempo parcial, diseñado para adaptarse a tu trabajo, estudios o vida personal, para que puedas crecer en tus propios términos.',
    ca: 'Cada projecte és completament remot i a temps parcial, dissenyat per adaptar-se a la teva feina, estudis o vida personal, perquè puguis créixer en els teus propis termes.',
  },
  
  // Our Impact section
  'impact.title': {
    en: 'Our Impact So Far',
    es: 'Nuestro Impacto Hasta Ahora',
    ca: 'El Nostre Impacte Fins Ara',
  },
  'impact.subtitle': {
    en: 'SheHub is already helping women build confidence, portfolios and real experience.',
    es: 'SheHub ya está ayudando a las mujeres a construir confianza, portfolios y experiencia real.',
    ca: 'SheHub ja està ajudant a les dones a construir confiança, portfolis i experiència real.',
  },
  'impact.stat1.label': {
    en: 'women joined the community in our first month',
    es: 'mujeres se unieron a la comunidad en nuestro primer mes',
    ca: 'dones es van unir a la comunitat en el nostre primer mes',
  },
  'impact.stat2.label': {
    en: 'active teams already working across UX, dev, product, and more',
    es: 'equipos activos ya trabajando en UX, desarrollo, producto y más',
    ca: 'equips actius ja treballant en UX, desenvolupament, producte i més',
  },
  'impact.stat3.label': {
    en: 'hours invested by contributors in real workflows',
    es: 'horas invertidas por colaboradores en flujos de trabajo reales',
    ca: 'hores invertides per col·laboradors en fluxos de treball reals',
  },
  'impact.stat4.label': {
    en: 'interviews landed by contributors in our first month',
    es: 'entrevistas conseguidas por colaboradores en nuestro primer mes',
    ca: 'entrevistes aconseguides per col·laboradors en el nostre primer mes',
  },
  'impact.closing': {
    en: 'We\'re just getting started.',
    es: 'Apenas estamos comenzando.',
    ca: 'Tot just estem començant.',
  },
  
  // Join Waitlist section
  'joinwaitlist.title': {
    en: 'Ready to grow or give back?',
    es: '¿Lista para crecer o contribuir?',
    ca: 'Preparada per créixer o contribuir?',
  },
  'joinwaitlist.description': {
    en: 'Whether you\'re pivoting into tech or growing as a leader, SheHub is your space to contribute and thrive.',
    es: 'Ya sea que estés cambiando hacia la tecnología o creciendo como líder, SheHub es tu espacio para contribuir y prosperar.',
    ca: 'Ja sigui que estiguis canviant cap a la tecnologia o creixent com a líder, SheHub és el teu espai per contribuir i prosperar.',
  },
  'joinwaitlist.button': {
    en: 'Join the Waitlist',
    es: 'Únete a la Lista de Espera',
    ca: 'Uneix-te a la Llista d\'Espera',
  },
  'joinwaitlist.footer': {
    en: 'We\'ll be in touch as soon as your opportunity opens up.',
    es: 'Nos pondremos en contacto tan pronto como se abra tu oportunidad.',
    ca: 'Ens posarem en contacte tan aviat com s\'obri la teva oportunitat.',
  },
  
  // FAQ section
  'faq.title': {
    en: 'Got Questions? We\'ve Got You Covered.',
    es: '¿Tienes Preguntas? Te Ayudamos.',
    ca: 'Tens Preguntes? T\'Ajudem.',
  },
  'faq.q1': {
    en: 'What is SheHub?',
    es: '¿Qué es SheHub?',
    ca: 'Què és SheHub?',
  },
  'faq.a1': {
    en: 'SheHub is a career growth platform where women gain job-ready experience by working in lean, collaborative tech teams guided by mentors. Contributors don\'t just practice — they deliver. Along the way, they also strengthen confidence, communication, and problem-solving skills that matter in real roles.',
    es: 'SheHub es una plataforma de crecimiento profesional donde las mujeres adquieren experiencia lista para el trabajo al trabajar en equipos tecnológicos colaborativos y ágiles guiados por mentores. Las colaboradoras no sólo practican, sino que entregan. En el camino, también fortalecen la confianza, la comunicación y las habilidades de resolución de problemas que son importantes en roles reales.',
    ca: 'SheHub és una plataforma de creixement professional on les dones adquireixen experiència preparada per a la feina treballant en equips tecnològics col·laboratius i àgils guiats per mentors. Les col·laboradores no només practiquen, sinó que entreguen. En el camí, també enforteixen la confiança, la comunicació i les habilitats de resolució de problemes que són importants en rols reals.',
  },
  'faq.q2': {
    en: 'Who can join?',
    es: '¿Quién puede unirse?',
    ca: 'Qui pot unir-se?',
  },
  'faq.a2': {
    en: 'Contributors: Women pivoting into tech, typically from bootcamps or self-taught backgrounds, who already have the technical or design skills to contribute to a real product team. Mentors: Women in tech who want to give back, support others or grow their own leadership experience as they prepare for their next career move (e.g., management, team lead, strategy roles).',
    es: 'Colaboradoras: Mujeres que están cambiando hacia la tecnología, típicamente de bootcamps o con formación autodidacta, que ya tienen las habilidades técnicas o de diseño para contribuir a un equipo de producto real. Mentores: Mujeres en tecnología que quieren contribuir, apoyar a otras o desarrollar su propia experiencia de liderazgo mientras se preparan para su próximo movimiento profesional (por ejemplo, gestión, líder de equipo, roles estratégicos).',
    ca: 'Col·laboradores: Dones que estan canviant cap a la tecnologia, típicament de bootcamps o amb formació autodidacta, que ja tenen les habilitats tècniques o de disseny per contribuir a un equip de producte real. Mentores: Dones en tecnologia que volen contribuir, donar suport a altres o desenvolupar la seva pròpia experiència de lideratge mentre es preparen per al seu proper moviment professional (per exemple, gestió, líder d\'equip, rols estratègics).',
  },
  'faq.q3': {
    en: 'Is it free?',
    es: '¿Es gratis?',
    ca: 'És gratuït?',
  },
  'faq.a3': {
    en: 'Yes — SheHub is 100% free for both contributors and mentors. Our mission is to make access to real experience and leadership development more equitable.',
    es: 'Sí — SheHub es 100% gratuito tanto para colaboradoras como para mentoras. Nuestra misión es hacer que el acceso a experiencia real y desarrollo de liderazgo sea más equitativo.',
    ca: 'Sí — SheHub és 100% gratuït tant per a col·laboradores com per a mentores. La nostra missió és fer que l\'accés a experiència real i desenvolupament de lideratge sigui més equitatiu.',
  },
  'faq.q4': {
    en: 'How long are the projects?',
    es: '¿Cuánto duran los proyectos?',
    ca: 'Quant duren els projectes?',
  },
  'faq.a4': {
    en: 'Most projects last 4 to 8 weeks. Teams meet regularly, and all roles are part-time and designed to fit around work, study, or caregiving responsibilities.',
    es: 'La mayoría de los proyectos duran de 4 a 8 semanas. Los equipos se reúnen regularmente, y todos los roles son a tiempo parcial y diseñados para adaptarse al trabajo, estudio o responsabilidades de cuidado.',
    ca: 'La majoria dels projectes duren de 4 a 8 setmanes. Els equips es reuneixen regularment, i tots els rols són a temps parcial i dissenyats per adaptar-se a la feina, estudis o responsabilitats de cura.',
  },
  'faq.q5': {
    en: 'Do I need a certain level to join?',
    es: '¿Necesito un cierto nivel para unirme?',
    ca: 'Necessito un cert nivell per unir-me?',
  },
  'faq.a5': {
    en: 'Yes — SheHub is not a bootcamp or a course. You should already have the basic skills needed to deliver in your desired role (design, development, product, data, etc.).',
    es: 'Sí — SheHub no es un bootcamp o un curso. Ya deberías tener las habilidades básicas necesarias para entregar en tu rol deseado (diseño, desarrollo, producto, datos, etc.).',
    ca: 'Sí — SheHub no és un bootcamp o un curs. Ja hauries de tenir les habilitats bàsiques necessàries per entregar en el teu rol desitjat (disseny, desenvolupament, producte, dades, etc.).',
  },
  'faq.q6': {
    en: 'Can I list this on my CV?',
    es: '¿Puedo incluir esto en mi CV?',
    ca: 'Puc incloure això al meu CV?',
  },
  'faq.a6': {
    en: 'Absolutely! You\'ll work on real deliverables, collaborate in a real team environment, and be supported by experienced mentors — all of which is highly valuable and fully LinkedIn/CV-worthy.',
    es: '¡Absolutamente! Trabajarás en entregables reales, colaborarás en un entorno de equipo real y serás apoyada por mentores experimentados — todo lo cual es altamente valioso y completamente digno de LinkedIn/CV.',
    ca: 'Absolutament! Treballaràs en entregables reals, col·laboraràs en un entorn d\'equip real i seràs recolzada per mentors experimentats — tot això és altament valuós i completament digne de LinkedIn/CV.',
  },
  
  // Footer translations
  'footer.description': {
    en: 'SheHub connects tech bootcamp graduates from different roles who want to build a career in the tech industry, guided by expert mentors.',
    es: 'SheHub conecta a graduadas de bootcamps tecnológicos de diferentes roles que quieren construir una carrera en la industria tecnológica, guiadas por mentoras expertas.',
    ca: 'SheHub connecta graduades de bootcamps tecnològics de diferents rols que volen construir una carrera a la indústria tecnològica, guiades per mentores experts.',
  },
  'footer.howworks': {
    en: 'How it Works',
    es: 'Cómo Funciona',
    ca: 'Com Funciona',
  },
  'footer.overview': {
    en: 'Overview',
    es: 'Visión General',
    ca: 'Visió General',
  },
  'footer.commonquestions': {
    en: 'Common Questions',
    es: 'Preguntas Comunes',
    ca: 'Preguntes Comunes',
  },
  'footer.whyshehub': {
    en: 'Why SheHub',
    es: 'Por Qué SheHub',
    ca: 'Per Què SheHub',
  },
  'footer.ourmission': {
    en: 'Our Mission',
    es: 'Nuestra Misión',
    ca: 'La Nostra Missió',
  },
  'footer.mentors': {
    en: 'Mentors',
    es: 'Mentores',
    ca: 'Mentors',
  },
  'footer.getinvolved': {
    en: 'Get Involved',
    es: 'Involúcrate',
    ca: 'Involucra\'t',
  },
  'footer.copyright': {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
    ca: 'Tots els drets reservats.',
  },
  'footer.basedin': {
    en: 'Based in Spain — open to the world',
    es: 'Con sede en España — abierto al mundo',
    ca: 'Amb seu a Espanya — obert al món',
  },
  'footer.followus': {
    en: 'Follow us:',
    es: 'Síguenos:',
    ca: 'Segueix-nos:',
  },
  
  // Navbar translations
  'navbar.whyshehub': {
    en: 'Why SheHub',
    es: 'Por Qué SheHub',
    ca: 'Per Què SheHub',
  },
  'navbar.howitworks': {
    en: 'How It Works',
    es: 'Cómo Funciona',
    ca: 'Com Funciona',
  },
  'navbar.formentors': {
    en: 'For Mentors',
    es: 'Para Mentores',
    ca: 'Per a Mentors',
  },
  'navbar.faq': {
    en: 'FAQ',
    es: 'Preguntas Frecuentes',
    ca: 'Preguntes Freqüents',
  },
  'navbar.joinwaitlist': {
    en: 'Join Waitlist',
    es: 'Únete a la Lista de Espera',
    ca: 'Uneix-te a la Llista d\'Espera',
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
