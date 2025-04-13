
import React from 'react';
import { Code, Database, Gamepad2, Share2 } from 'lucide-react';

const SkillCategory = ({ 
  title, 
  icon, 
  skills 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: string[];
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-amber">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'];
  const backendSkills = ['Node.js', 'Python', 'Express', 'REST APIs'];
  const gameDevSkills = ['Unity', 'C#', 'C++', '.NET', 'Game Design'];
  const otherSkills = ['Git', 'GitHub', 'VS Code', 'Problem Solving'];

  return (
    <section id="skills" className="bg-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <SkillCategory 
            title="Frontend Development" 
            icon={<Code size={24} />} 
            skills={frontendSkills} 
          />
          <SkillCategory 
            title="Backend Development" 
            icon={<Database size={24} />} 
            skills={backendSkills} 
          />
          <SkillCategory 
            title="Game Development" 
            icon={<Gamepad2 size={24} />} 
            skills={gameDevSkills} 
          />
          <SkillCategory 
            title="Other Skills" 
            icon={<Share2 size={24} />} 
            skills={otherSkills} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
