import React from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiOpenjdk, 
  SiCplusplus,
  SiC,
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs,
  SiExpress,
  SiFlask,
  SiSpring,
  SiDocker, 
  SiKubernetes,
  SiAmazon, 
  SiGooglecloud,
  SiMongodb, 
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit, 
  SiLinux,
  SiPostman,
  SiFigma,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import './Skills.css';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript", icon: SiJavascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org/" },
    { name: "Python", icon: SiPython, url: "https://www.python.org/" },
    { name: "Java", icon: SiOpenjdk, url: "https://openjdk.org/" },
    { name: "React", icon: SiReact, url: "https://react.dev/" },
    { name: "Node.js", icon: SiNodedotjs, url: "https://nodejs.org/" },
    { name: "Next.js", icon: SiNextdotjs, url: "https://nextjs.org/" },
    { name: "Express.js", icon: SiExpress, url: "https://expressjs.com/" },
    { name: "AWS", icon: SiAmazon, url: "https://aws.amazon.com/" },
    { name: "Docker", icon: SiDocker, url: "https://www.docker.com/" },
    { name: "MongoDB", icon: SiMongodb, url: "https://www.mongodb.com/" },
    { name: "PostgreSQL", icon: SiPostgresql, url: "https://www.postgresql.org/" },
    { name: "TensorFlow", icon: SiTensorflow, url: "https://www.tensorflow.org/" },
    { name: "PyTorch", icon: SiPytorch, url: "https://pytorch.org/" },
  ];


  return (
    <section className="skills-container" id="skills">
      <h2 className="skills-title">Technical Skills</h2>
      
      <div className="skills-description">
        <p>
          Technologies and frameworks I work with. Click on any icon to learn more.
        </p>
      </div>

      <div className="skills-icons">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-icon-link"
            title={skill.name}
          >
            <skill.icon className="skill-icon" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;