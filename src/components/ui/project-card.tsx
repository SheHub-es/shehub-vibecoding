import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Calendar,
  ChevronDown,
  ChevronUp,
  Users,
  Github,
  Linkedin,
  Globe
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

interface Collaborator {
  name: string;
  role?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

interface ProjectCardProps {
  name: string;
  year: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  methodology?: string;
  collaborators?: Collaborator[];
  externalLink?: string;
  linkText?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  year,
  description,
  longDescription,
  technologies = [],
  methodology,
  collaborators = [],
  externalLink,
  linkText = "Ver Proyecto"
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const hasExtras = longDescription || technologies.length > 0 || methodology;

  return (
    <Card
      className={`
        w-full max-w-md h-full flex flex-col justify-between 
        bg-background/80 backdrop-blur-md 
        border border-border/50 shadow-sm 
        transition-all duration-300 
        ${externalLink ? "hover:shadow-md hover:scale-[1.01] cursor-pointer" : ""}
        hover:border-shehub-purple/40
      `}
    >
      <div className="flex flex-col flex-grow px-5 pt-6 min-h-[220px]">
        <div className="flex items-start justify-between mb-2 gap-2">
          <CardTitle className="text-xl font-semibold text-foreground break-words">{name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap">
            <Calendar size={16} className="mr-1" />
            {year}
          </div>
        </div>

        <CardDescription className="text-muted-foreground leading-relaxed flex-grow">
          {description}
        </CardDescription>

        {hasExtras && (
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="justify-between p-0 mt-4 font-normal text-primary px-2 hover:text-white">
                <span>{t(isExpanded ? 'closed.card.seeLess' : 'closed.card.seeMore')}</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-4 space-y-4">
              {longDescription && (
                <p className="text-sm text-muted-foreground leading-relaxed">{longDescription}</p>
              )}

              {technologies.length > 0 && (
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center">
                    <span className="w-2 h-2 bg-shehub-purple rounded-full mr-2" />
                    {t('closed.card.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-shehub-purple/10 text-shehub-purple rounded-md border border-shehub-purple/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {methodology && (
                <div>
                  <h4 className="font-medium text-foreground mb-2 flex items-center">
                    <span className="w-2 h-2 bg-shehub-orange rounded-full mr-2" />
                    {t('closed.card.methodology')}
                  </h4>
                  <p className="text-sm text-muted-foreground">{methodology}</p>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>

      <CardContent className="px-5 pb-6 pt-4 mt-auto space-y-3">
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-2">
          {collaborators.length > 0 && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex-1 hover:bg-shehub-orange hover:text-white hover:border-shehub-orange">
                  <Users size={16} className="mr-2" />
                  {t('closed.card.collaborators')}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center">
                    <Users size={20} className="mr-2 text-shehub-purple" />
                    {t('closed.card.collaborators')}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {collaborators.map((c, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground">{c.name}</h4>
                        {c.role && <p className="text-sm text-muted-foreground">{c.role}</p>}
                      </div>
                      <div className="flex space-x-2">
                        {c.linkedin && (
                          <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-[#0077B5] text-muted-foreground">
                            <Linkedin size={16} />
                          </a>
                        )}
                        {c.github && (
                          <a href={c.github} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-foreground text-muted-foreground">
                            <Github size={16} />
                          </a>
                        )}
                        {c.website && (
                          <a href={c.website} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-shehub-purple text-muted-foreground">
                            <Globe size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          )}

          {externalLink && (
            <Button
              asChild
              variant="outline"
              className="flex-1 border-shehub-purple text-shehub-purple hover:bg-shehub-purple hover:text-white transition-all"
            >
              <a href={externalLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                {linkText}
                <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
