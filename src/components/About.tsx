import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <h2>My Background / About Me</h2>
        <p>
          As a rising Senior at Vanderbilt University, my academic path in Computer Science & Mathematics is enriched by active roles as an Applied Math Tutor, where I harness my Math, leadership, and communication skills to deepen students' understanding of complex concepts as well as foster collaboration and inclusion within our diverse community.
        </p>
        <p>
          My time at Karpool solidified my commitment to using my skills in Mathematics and Computer Science to support organizations in making data-informed decisions. With every challenge, my passion for problem-solving and creating efficient, impactful solutions grows, guided by my dedication to continuous learning and improvement.
        </p>
      </div>
    </section>
  );
};

export default About; 