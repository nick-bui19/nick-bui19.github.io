import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <h2>My Background / About Me</h2>
        <p>
          Computer Science & Mathematics double major from Vanderbilt University with experience in software engineering, distributed systems, and cloud technologies. Skilled in C++, Java, Python, AWS, Kafka, Spark, Node.js, and TypeScript.
        </p>
        <p>
          At Future Standard, I support technology solutions for the private markets industry. I work across technical and business functions to help clients improve data workflows, solve operational challenges, and unlock value through technology.
        </p>
      </div>
    </section>
  );
};

export default About; 
