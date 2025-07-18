import React from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiOpenjdk, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs,
  SiExpress,
  SiDocker, 
  SiAmazon, 
  SiMongodb, 
  SiPostgresql
} from 'react-icons/si';
import './Skills.css';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript", icon: SiJavascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", level: 90, category: "languages" },
    { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org/", level: 85, category: "languages" },
    { name: "Python", icon: SiPython, url: "https://www.python.org/", level: 95, category: "languages" },
    { name: "Java", icon: SiOpenjdk, url: "https://openjdk.org/", level: 80, category: "languages" },
    { name: "React", icon: SiReact, url: "https://react.dev/", level: 90, category: "frontend" },
    { name: "Node.js", icon: SiNodedotjs, url: "https://nodejs.org/", level: 85, category: "backend" },
    { name: "Next.js", icon: SiNextdotjs, url: "https://nextjs.org/", level: 80, category: "frontend" },
    { name: "Express.js", icon: SiExpress, url: "https://expressjs.com/", level: 85, category: "backend" },
    { name: "AWS", icon: SiAmazon, url: "https://aws.amazon.com/", level: 80, category: "cloud" },
    { name: "Docker", icon: SiDocker, url: "https://www.docker.com/", level: 85, category: "cloud" },
    { name: "MongoDB", icon: SiMongodb, url: "https://www.mongodb.com/", level: 85, category: "database" },
    { name: "PostgreSQL", icon: SiPostgresql, url: "https://www.postgresql.org/", level: 80, category: "database" },
  ];


  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">Technical Skills</h2>
      
      <div className="skills-description">
        <p>
          Technologies and frameworks I work with. Click on any skill to learn more.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-card"
            title={`Learn more about ${skill.name}`}
          >
            <div className="skill-header">
              <skill.icon className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;