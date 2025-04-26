// Skill type with icon and proficiency
interface Skill {
  name: string;
  icon: string;
  proficiency: number; // 1-5
  category: string;
}

const Skills = () => {
  // Organized skills by category with icons and proficiency levels
  const skills: Skill[] = [
    // Frontend
    { name: "JavaScript", icon: "devicon-javascript-plain", proficiency: 5, category: "Frontend" },
    { name: "TypeScript", icon: "devicon-typescript-plain", proficiency: 4, category: "Frontend" },
    { name: "React", icon: "devicon-react-original", proficiency: 5, category: "Frontend" },
    { name: "HTML", icon: "devicon-html5-plain", proficiency: 5, category: "Frontend" },
    { name: "CSS", icon: "devicon-css3-plain", proficiency: 4, category: "Frontend" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain", proficiency: 4, category: "Frontend" },
    { name: "Next.js", icon: "devicon-nextjs-plain", proficiency: 4, category: "Frontend" },
    { name: "Vite", icon: "devicon-vite-plain", proficiency: 4, category: "Frontend" },
    
    // Backend
    { name: "Node.js", icon: "devicon-nodejs-plain", proficiency: 4, category: "Backend" },
    { name: "Express", icon: "devicon-express-original", proficiency: 3, category: "Backend" },
    { name: "Flask", icon: "devicon-flask-original", proficiency: 3, category: "Backend" },
    { name: "MariaDB", icon: "devicon-mariadb-plain", proficiency: 3, category: "Backend" },
    
    // Tools
    { name: "Git", icon: "devicon-git-plain", proficiency: 4, category: "Tools" },
    { name: "VS Code", icon: "devicon-vscode-plain", proficiency: 5, category: "Tools" },
    { name: "Rider", icon: "devicon-rider-plain", proficiency: 3, category: "Tools" },
    { name: "IntelliJ", icon: "devicon-intellij-plain", proficiency: 3, category: "Tools" },
    { name: "Android Studio", icon: "devicon-androidstudio-plain", proficiency: 3, category: "Tools" },
    { name: "Atom", icon: "devicon-atom-plain", proficiency: 2, category: "Tools" },
    { name: "Unity", icon: "devicon-unity-plain", proficiency: 2, category: "Tools" },
  ];

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Render proficiency bar
  const ProficiencyBar = ({ level }: { level: number }) => {
    return (
      <div className="w-full bg-background rounded-full h-1.5 mt-2">
        <div 
          className="bg-accent h-1.5 rounded-full" 
          style={{ width: `${(level / 5) * 100}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="p-8 h-[500px] overflow-y-auto fade-in">
      {/* Map through categories */}
      {Object.entries(categories).map(([category, categorySkills]) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl text-gray-300 mb-4 flex items-center">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
            {category}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categorySkills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-surface-light p-4 rounded-lg hover:bg-gradient-to-br hover:from-surface-light hover:to-[#2d2d2d] transition-colors border border-transparent hover:border-border"
              >
                <div className="flex items-center mb-2">
                  {/* For this to work, add the Devicon CDN to your index.html */}
                  <i className={`${skill.icon} colored text-2xl mr-2`}></i>
                  <span className="text-gray-200">{skill.name}</span>
                </div>
                <ProficiencyBar level={skill.proficiency} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;