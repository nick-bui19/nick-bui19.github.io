import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <h2>My Background / About Me</h2>
        <p>
          As a Senior at Vanderbilt University, my academic path in Computer Science & Mathematics is enriched by active roles as an Applied Math Tutor, where I harness my Math, leadership, and communication skills to deepen students' understanding of complex concepts as well as foster collaboration and inclusion within our diverse community.
        </p>
        <p>
          At Future Standard, I support technology solutions for the private markets industry. I work across technical and business functions to help clients improve data workflows, solve operational challenges, and unlock value through technology.
        </p>
      </div>
    </section>
  );
};

export default About; 
