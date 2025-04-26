import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, techs }) => (
  <div className="bg-zinc-900 rounded-lg shadow-xl overflow-hidden hover:-translate-y-1 transition-transform">
    <div className="h-full rounded-md p-5 flex flex-col">
      <div className="relative mb-4 rounded-md overflow-hidden group">
        <div className="absolute inset-0 bg-accent bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-3 py-1 bg-background/80 text-accent rounded-full text-sm font-medium">View Project</span>
        </div>
        <img 
          src={image} 
          alt={`${title} Screenshot`} 
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <h3 className="text-xl font-medium text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        {techs.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-background text-xs text-gray-300 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex justify-end mt-auto">
        <a 
          href={link} 
          className="text-accent hover:text-white flex items-center gap-1 transition-colors"
          rel="noopener noreferrer"
          target="_blank"
        >
          View project <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "PaletteLab",
      description: "an very simple color palette generator for web developers.",
      image: "/screenshots/palettelab.webp",
      link: "https://marcelschreiber.de/palettelab",
      techs: ["Vite", "Tailwind", "TypeScript"]
    },
    {
      title: "imageconvert",
      description: "imageconvert is a simple image converter",
      image: "/screenshots/imageconvert.webp",
      link: "https://marcelschreiber.de/imageconvert",
      techs: ["Next.js", "Tailwind", "TypeScript"]
    },
    {
      title: "videocompress",
      description: "videocompress is an highly simpler ffmpeg wrapper",
      image: "/screenshots/videocompress.webp",
      link: "https://marcelschreiber.de/videocompress",
      techs: ["Next.js", "Tailwind", "TypeScript"]
    },
    {
      title: "Frostbound",
      description: "stay in the heat or freeze to death. made in a game jam.",
      image: "/screenshots/frostbound.webp",
      link: "https://ytumy.itch.io/frostbound-demo",
      techs: ["Unity", "C#", "WebGL"]
    }
  ];

  return (
    <div className="p-8 h-[500px] overflow-y-auto fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;