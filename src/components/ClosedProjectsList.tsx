import React from 'react';
import ProjectCard from '@/components/ui/project-card';
import { useLanguage } from '@/contexts/LanguageContext';

const ClosedProjectsList: React.FC = () => {
  const { t } = useLanguage();

  const projects = [
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
          github: 'https://github.com/grinxy ',
          linkedin: 'https://www.linkedin.com/in/monicaestebanponce/'
        },
        {
          name: 'Anna Sarria',
          role: 'Product Leadership Mentor',
          linkedin: 'https://www.linkedin.com/in/anna-sarria/'
        },
        {
          name: 'Silvia Anguera Roldán',
          role: 'UX/UI design',
          linkedin: 'https://www.linkedin.com/in/silvia-anguera-rold%C3%A1n-17320220/'
        },
        {
          name: 'Triana Gracia',
          role: 'UX/UI design',
          linkedin: 'https://www.linkedin.com/in/triana-gracia/'
        },
        {
          name: 'Khrystsina Kozak ',
          role: 'Frontend Developer',
          github: 'https://github.com/Tinunsky ',
          linkedin: 'https://www.linkedin.com/in/khrystsinakozak/'
        },
        {
          name: 'Jessica Arroyo Lebrón',
          role: 'Frontend Developer',
          github: 'https://github.com/jess-ar',
          linkedin: 'https://www.linkedin.com/in/jessica-arroyo-lebron/'
        },
      ],
      externalLink: 'https://teaser.shehub.es',
      linkText: t('closed.1.link')
    },

    // {
    //   id: '2',
    //   name: t('closed.2.name'),
    //   year: '2025',
    //   description: t('closed.2.desc'),
    //   longDescription: t('closed.2.longDesc'),
    //   technologies: ['Google Forms', 'Excel', 'Figma'],
    //   methodology: t('closed.2.methodology'),
    //   collaborators: [
    //     {
    //       name: 'Lorem Ipsum',
    //       role: 'Data Analyst',
    //       linkedin: 'https://linkedin.com/in/lucia-fernandez'
    //     }
    //   ],
    //   externalLink: 'https://survey.shehub.es',
    //   linkText: t('closed.2.link')
    // },

    // {
    //   id: '3',
    //   name: t('closed.3.name'),
    //   year: '2025',
    //   description: t('closed.3.desc'),
    //   longDescription: t('closed.3.longDesc'),
    //   technologies: ['Miro', 'Notion'],
    //   methodology: t('closed.3.methodology'),
    //   collaborators: [
    //     {
    //       name: ' Lorem Ipsum',
    //       role: 'Mentoría',
    //       website: 'https://elena-coaching.com'
    //     }
    //   ],
    //   externalLink: 'https://mentorship-pilot.shehub.es',
    //   linkText: t('closed.3.link')
    // }
  ];

  return (
    <div
      className={`my-10 ${projects.length === 1
          ? 'flex justify-center'
          : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
        }`}
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          year={project.year}
          description={project.description}
          longDescription={project.longDescription}
          technologies={project.technologies}
          methodology={project.methodology}
          collaborators={project.collaborators}
          externalLink={project.externalLink}
          linkText={project.linkText}
        />
      ))}
    </div>

  );
};

export default ClosedProjectsList;
