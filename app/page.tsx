'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { ExternalLink, Github, Menu, X } from 'lucide-react';
import Link from "next/link";

interface Skill {
  name: string;
  proficiency: number;
  category: "Frontend" | "Backend" | "Tools";
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  techs: string[];
}

const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", proficiency: 5, category: "Frontend" },
  { name: "TypeScript", proficiency: 4, category: "Frontend" },
  { name: "React", proficiency: 5, category: "Frontend" },
  { name: "HTML", proficiency: 5, category: "Frontend" },
  { name: "CSS", proficiency: 4, category: "Frontend" },
  { name: "Tailwind", proficiency: 4, category: "Frontend" },
  { name: "Next.js", proficiency: 4, category: "Frontend" },
  { name: "Vite", proficiency: 4, category: "Frontend" },

  // Backend
  { name: "Node.js", proficiency: 4, category: "Backend" },
  { name: "Express", proficiency: 3, category: "Backend" },
  { name: "Flask", proficiency: 3, category: "Backend" },
  { name: "MariaDB", proficiency: 3, category: "Backend" },

  // Tools
  { name: "Git", proficiency: 4, category: "Tools" },
  { name: "VS Code", proficiency: 5, category: "Tools" },
  { name: "Unity", proficiency: 2, category: "Tools" },
];

const projects: Project[] = [
  {
    title: "PaletteLab",
    description: "A very simple color palette generator for web developers.",
    image: "/screenshots/palettelab.webp",
    link: "https://marcelytumy.github.io/palettelab",
    github: "https://github.com/marcelytumy/palettelab",
    techs: ["Vite", "Tailwind", "TypeScript"]
  },
  {
    title: "imageconvert",
    description: "A simple image converter for quick format changes.",
    image: "/screenshots/imageconvert.webp",
    link: "https://marcelytumy.github.io/imageconvert",
    github: "https://github.com/marcelytumy/imageconvert",
    techs: ["Next.js", "Tailwind", "TypeScript"]
  },
  {
    title: "videocompress",
    description: "A highly simplified ffmpeg wrapper for video compression.",
    image: "/screenshots/videocompress.webp",
    link: "https://marcelytumy.github.io/videocompress",
    github: "https://github.com/marcelytumy/videocompress",
    techs: ["Next.js", "Tailwind", "TypeScript"]
  },
  {
    title: "Frostbound",
    description: "Stay in the heat or freeze to death. Made in a game jam.",
    image: "/screenshots/frostbound.webp",
    link: "https://ytumy.itch.io/frostbound-demo",
    techs: ["Unity", "C#", "WebGL"]
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTldr, setIsTldr] = useState(false);

  useEffect(() => {
    // Fade in the content after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Set default TL;DR state based on screen size
    const checkScreenSize = () => {
      setIsTldr(window.innerWidth < 640); // sm breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleImageError = (projectTitle: string) => {
    setImageErrors(prev => new Set([...prev, projectTitle]));
  };

  const currentYear = new Date().getFullYear();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTldr = () => {
    setIsTldr(!isTldr);
  };

  return (
    <div className={`min-h-screen w-full font-mono flex flex-col items-start px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-4xl mx-auto transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
      {/* Navigation */}
      <nav className="mb-6 sm:mb-8 text-sm w-full" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center">
            <Link className="font-bold hover:underline focus:underline focus:outline-none text-base sm:text-sm" href="/" aria-label="Home">
            ytumy.de
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="#projects" className="hover:underline focus:no-underline focus:outline-none focus:ring-2 focus:ring-current rounded px-1">
              projects
            </Link>
            <Link href="#skills" className="hover:underline focus:no-underline focus:outline-none focus:ring-2 focus:ring-current rounded px-1">
              skills
            </Link>
            <Link href="#contact" className="hover:underline focus:no-underline focus:outline-none focus:ring-2 focus:ring-current rounded px-1">
              contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex items-center space-x-2">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-current border-neutral-600 hover:bg-neutral-800"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden mt-4 p-4 rounded-lg border bg-neutral-800 border-neutral-700">
            <div className="flex flex-col space-y-3">
              <Link
                href="#projects"
                className="hover:underline focus:no-underline focus:outline-none focus:ring-2 focus:ring-current rounded px-1 py-2 text-base"
                onClick={closeMobileMenu}
              >
                projects
              </Link>
              <Link
                href="#skills"
                className="hover:underline focus:no-underline focus:outline-none focus:ring-2 focus:ring-current rounded px-1 py-2 text-base"
                onClick={closeMobileMenu}
              >
                skills
              </Link>
              <Link
                href="#contact"
                className="hover:underline focus:no-underline focus:outline-none focus:ring-2 focus:ring-current rounded px-1 py-2 text-base"
                onClick={closeMobileMenu}
              >
                contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="mb-8 sm:mb-12 w-full" aria-labelledby="hero-heading">
        <div className="flex items-start justify-between mb-4">
          <h1 id="hero-heading" className="text-2xl sm:text-3xl font-bold">Hello, I&apos;m Marcel</h1>
          <button
            onClick={toggleTldr}
            className={`text-xs px-2 py-1 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-current border-neutral-600 hover:bg-neutral-800 ${isTldr ? 'bg-neutral-700' : ''}`}
            aria-label={`Switch to ${isTldr ? 'full' : 'simplified'} description`}
          >
            {isTldr ? 'FULL' : 'TL;DR'}
          </button>
        </div>
        <div className="p-4 sm:p-6 rounded-lg border bg-neutral-800 border-neutral-700">
          {isTldr ? (
            <p className="leading-relaxed text-sm sm:text-base text-neutral-300">
              Frontend developer who builds clean web apps and loves solving problems.
            </p>
          ) : (
            <>
              <p className="leading-relaxed mb-4 text-sm sm:text-base text-neutral-300">
                Frontend developer with a passion for creating clean, efficient, and visually appealing web applications.
                I enjoy turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="leading-relaxed text-sm sm:text-base text-neutral-300">
                When I&apos;m not coding, you can find me exploring new tech or playing video games.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-8 sm:mb-12 w-full" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="font-bold mb-4 text-lg sm:text-xl">Projects</h2>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="border rounded-lg overflow-hidden flex flex-col border-neutral-700 bg-neutral-800"
            >
                <div className="aspect-video relative bg-neutral-700">
                {!imageErrors.has(project.title) ? (
                  <>
                  <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                    <span className="text-xs text-neutral-500">Loading...</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title} project`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 50vw"
                    priority={index < 2}
                    onError={() => handleImageError(project.title)}
                    onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    const loadingDiv = target.parentElement?.querySelector('[class*="animate-pulse"]');
                    if (loadingDiv) {
                      loadingDiv.remove();
                    }
                    }}
                  />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-500">
                  <span className="text-xs sm:text-sm">Image unavailable</span>
                  </div>
                )}
                </div>
              <div className="p-2 sm:p-4 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-1 sm:mb-2 gap-1 sm:gap-2">
                  <h3 className="font-semibold text-xs sm:text-base flex-1">
                    <Link
                      href={project.link}
                      className="hover:underline focus:no-underline focus:outline-none focus:ring-2 focus:ring-current rounded inline-flex items-center gap-1 py-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} project (opens in new tab)`}
                    >
                      {project.title}
                      <ExternalLink size={10} className="sm:hidden" aria-hidden="true" />
                      <ExternalLink size={12} className="hidden sm:inline" aria-hidden="true" />
                    </Link>
                  </h3>
                  {project.github && (
                    <Link
                      href={project.github}
                      className="text-xs underline hover:underline focus:no-underline focus:outline-none focus:ring-1 focus:ring-current rounded px-1 py-1 flex items-center gap-1 whitespace-nowrap text-neutral-400 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                    >
                      <Github size={10} className="sm:hidden" aria-hidden="true" />
                      <Github size={12} className="hidden sm:inline" aria-hidden="true" />
                      <span className="hidden sm:inline">source</span>
                    </Link>
                  )}
                </div>
                <p className="text-xs mb-2 sm:mb-3 flex-grow text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto" role="list" aria-label="Technologies used">
                  {project.techs.map(tech => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs bg-neutral-700 text-neutral-300"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-8 sm:mb-12 w-full" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="font-bold mb-4 text-lg sm:text-xl">Skills</h2>
        {(["Frontend", "Backend", "Tools"] as const).map(category => (
          <div key={category} className="mb-6 sm:mb-8">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base uppercase tracking-wide text-neutral-400">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3">
              {skills.filter(skill => skill.category === category).map(skill => (
                <div
                  key={skill.name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between border p-4 sm:p-3 rounded-lg text-sm border-neutral-700 bg-neutral-800"
                >
                  <span className="font-medium mb-2 sm:mb-0 sm:flex-1 sm:min-w-0 sm:pr-2">{skill.name}</span>
                  <div className="flex items-center justify-between sm:justify-end">
                    <span className="text-xs sm:hidden mr-2 text-neutral-400">
                      {skill.proficiency}/5
                    </span>
                    <div className="flex space-x-1.5 sm:space-x-1 sm:flex-shrink-0" role="img" aria-label={`Proficiency: ${skill.proficiency} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full transition-colors ${i < skill.proficiency
                            ? 'bg-white'
                            : 'bg-neutral-600'
                            }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="font-bold mb-4 text-lg sm:text-xl">Get in Touch</h2>
      <div className="p-4 sm:p-6 rounded-lg border bg-neutral-800 border-neutral-700">
        <p className="mb-4 text-sm sm:text-base">
          Interested in working together or have a question? Feel free to reach out!
        </p>
        <Link
          href="mailto:sprechender@proton.me"
          className="inline-block border px-4 py-3 text-sm rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto text-center sm:text-left bg-white text-black border-white hover:bg-neutral-200 focus:ring-white focus:ring-offset-neutral-800"
        >
          Send Email
        </Link>
      </div>
  </section>

    {/* Footer */}
    <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t w-full border-neutral-700">
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm space-y-4 sm:space-y-0 text-neutral-400">
        <p className="text-center sm:text-left">&copy; {currentYear} ytumy.de (marcelytumy) All rights reserved.
        <div className="space-x-4">
          <Link href="https://debian.ytumy.de/">
          <button
            className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-current rounded px-1 py-1 hover:text-white"
          >
            server
          </button>
            </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-current rounded px-1 py-1 hover:text-white"
            aria-label="Scroll to top"
          >
            top
          </button>
        </div>
      </div>
    </footer>
  </div>
  );
}
