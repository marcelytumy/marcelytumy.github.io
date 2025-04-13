
import React from 'react';
import Navbar from '@/components/Navbar.tsx';
import Hero from '@/components/Hero.tsx';
import About from '@/components/About.tsx';
import Skills from '@/components/Skills.tsx';
import Projects from '@/components/Projects.tsx';
import Quote from '@/components/Quote.tsx';
import Contact from '@/components/Contact.tsx';
import Footer from '@/components/Footer.tsx';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Quote />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
