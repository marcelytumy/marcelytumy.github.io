
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'ImageConvert',
      description: 'Developed a web app that converts images to different formats',
      date: 'Nov 2024',
      technologies: ['NodeJS', 'Next.js', 'Tailwind CSS'],
      liveLink: 'https://marcelschreiber.de/imageconvert',
      sourceLink: 'https://github.com/marcelytumy/imageconvert',
      imageUrl: '/imageconvert.png',
    },
    {
      title: 'VideoCompress',
      description: 'Developed a web app that compresses videos with ffmpeg (WebAssembly)',
      date: 'Nov 2024',
      technologies: ['NodeJS', 'Next.js', 'Tailwind CSS', 'FFmpeg'],
      liveLink: 'https://marcelschreiber.de/videocompress',
      sourceLink: 'https://github.com/marcelytumy/videocompress',
      imageUrl: '/videocompress.png',
    },
    {
      title: 'Frostbound',
      description: 'Developed a game for a game jam',
      date: 'Feb 2025',
      technologies: ['Unity', 'C#', '.NET'],
      liveLink: 'https://ytumy.itch.io/frostbound-demo',
      imageUrl: '/frostbound-demo.webp',
    },
  ];

  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="text-lg mb-10 max-w-2xl">
          I've worked on a few projects, from simple web applications to even simpler web applications. 
          Here are a few of my top projects.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/marcelytumy/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary inline-flex items-center"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
