
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Separator } from "@/components/ui/separator.tsx";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-dark text-white py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <button 
            onClick={scrollToTop} 
            className="bg-dark p-3 rounded-full border border-white/20 mb-8 hover:bg-dark/80 transition-colors hover:border-amber/50 focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="text-amber" size={24} />
          </button>
          
          <p className="text-3xl font-bold mb-8">
            <span className="text-white">marcelschreiber</span>
            <span className="text-amber">.de</span>
          </p>
          
          <div className="flex gap-6 mb-8">
            <a href="#about" className="text-white/60 hover:text-amber transition-colors">About</a>
            <a href="#skills" className="text-white/60 hover:text-amber transition-colors">Skills</a>
            <a href="#projects" className="text-white/60 hover:text-amber transition-colors">Projects</a>
            <a href="#contact" className="text-white/60 hover:text-amber transition-colors">Contact</a>
          </div>
          
          <Separator className="bg-white/10 w-full mb-8" />
          
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Marcel Schreiber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
