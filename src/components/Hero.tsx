import React from 'react';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-background to-light">
      <div className="absolute -right-20 top-20 w-64 h-64 bg-amber/10 rounded-full"></div>
      <div className="absolute -left-32 bottom-40 w-80 h-80 bg-amber/5 rounded-full"></div>
      
      <div className="max-w-4xl w-full px-4 md:px-6 z-10">
        <div className="space-y-8 md:space-y-12">
          <h1 style={{
          animationDelay: '0.5s',
          animationFillMode: 'forwards'
        }} className="text-7xl font-extrabold tracking-tight text-amber animate-fade-in opacity-0 md:text-8xl">Marcel Schreiber</h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl animate-fade-in opacity-0" style={{
          animationDelay: '1s',
          animationFillMode: 'forwards'
        }}>
            Programmer, YouTuber, Gamer. I love building things.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{
          animationDelay: '1.5s',
          animationFillMode: 'forwards'
        }}>
            
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-amber" size={32} />
        </a>
      </div>
    </section>;
};
export default Hero;