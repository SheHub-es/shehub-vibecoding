import ProjectCard from '@/components/ui/project-card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getClosedProjects } from '@/data/closed-projects-data';

const ClosedProjectsList: React.FC = () => {
  const { t } = useLanguage();
  const projects = getClosedProjects(t);

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
