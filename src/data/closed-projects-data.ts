type TranslationFunction = (key: string) => string;

export const getClosedProjects = (t: TranslationFunction) => [
  {
    id: '1',
    name: t('closed.1.name'),
    year: '04-2025',
    description: t('closed.1.desc'),
    longDescription: t('closed.1.longDesc'),
    technologies: ['Figma', 'React', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    methodology: t('closed.1.methodology'),
    collaborators: [
      {
        name: 'Monica Esteban Ponce',
        role: 'Product Manager | Product Marketing',
        github: 'https://github.com/grinxy',
        linkedin: 'https://www.linkedin.com/in/monicaestebanponce/',
      },
      {
        name: 'Anna Sarria',
        role: 'Product Leadership Mentor',
        linkedin: 'https://www.linkedin.com/in/anna-sarria/',
      },
      {
        name: 'Solange Molina Urrutia',
        role: 'User Experience Mentor',
        linkedin: 'https://www.linkedin.com/in/smolina/',
      },
      {
        name: 'Silvia Anguera Roldán',
        role: 'UX/UI design',
        linkedin: 'https://www.linkedin.com/in/silvia-anguera-rold%C3%A1n-17320220/',
      },
      {
        name: 'Triana Gracia',
        role: 'UX/UI design',
        linkedin: 'https://www.linkedin.com/in/triana-gracia/',
      },
      {
        name: 'Khrystsina Kozak',
        role: 'Frontend Developer',
        github: 'https://github.com/Tinunsky',
        linkedin: 'https://www.linkedin.com/in/khrystsinakozak/',
      },
      {
        name: 'Jessica Arroyo Lebrón',
        role: 'Frontend Developer',
        github: 'https://github.com/jess-ar',
        linkedin: 'https://www.linkedin.com/in/jessica-arroyo-lebron/',
      },
    ],
    externalLink: 'https://teaser.shehub.es',
    linkText: t('closed.1.link'),
  },

  // Ejemplos comentados para mantenerlos en el archivo
  /*
  {
    id: '2',
    name: t('closed.2.name'),
    ...
  },
  {
    id: '3',
    name: t('closed.3.name'),
    ...
  }
  */
];
