
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  liveLink?: string;
  sourceLink?: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  date,
  technologies,
  liveLink,
  sourceLink,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm card-hover">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <p className="text-foreground/80 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="skill-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm font-medium text-amber hover:text-amber-600"
            >
              <ExternalLink size={16} className="mr-1" /> View Project
            </a>
          )}
          {sourceLink && (
            <a 
              href={sourceLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-sm font-medium text-amber hover:text-amber-600"
            >
              <Github size={16} className="mr-1" /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
