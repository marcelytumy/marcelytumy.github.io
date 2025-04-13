import React from 'react';
const About = () => {
  return <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              I've been programming since the beginning of 2020. What started as a 
              curiosity quickly grew into a passion as I discovered the joy of building 
              things with code.
            </p>
            <p className="text-lg mb-6">
              When I'm not writing code, you might find me creating YouTube content about 
              programming or playing games—sometimes analyzing how they're built.
            </p>
            <p className="text-lg">
              I'm always looking for new challenges and opportunities to learn and grow 
              as a developer. I love the problem-solving aspect of programming and the 
              satisfaction of creating something useful.
            </p>
          </div>
          {/*
          <div className="bg-amber h-64 md:h-96 relative">
            <div className="absolute inset-0 bg-dark opacity-10 transform rotate-3"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              
              <p className="absolute bottom-8 right-8 text-xl font-light text-dark/70">Marcel Schreiber</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>;
};
export default About;