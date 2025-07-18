import React from 'react';
import './Projects.css';

const projects = [
  {
    image: '/traffic-data-project.png',
    title: 'Real-Time Sensor Analytics',
    description: 'A real-time traffic and environmental sensor analytics platform using Kafka, PySpark, and Streamlit.',
    link: 'https://github.com/nick-bui19/real-time-sensor-analytics',
  },
  {
    image: '/mcdonalds.png',
    title: 'McDonald\'s Survey Solver',
    description: 'A Next.js web application that automates McDonald\'s customer satisfaction surveys using Playwright browser automation. Features real-time progress tracking and validation code extraction.',
    link: 'https://mcdonalds-survey-solver.vercel.app',
  },
  // {
  //   image: '/ldr-project.png',
  //   title: 'Long-Distance Relationship Hub',
  //   description: 'A React single-page application built to help partners maintain closeness while apart. Features include dual time zone clocks, Word of the Day, and a photo gallery.',
  //   link: 'https://github.com/nick-bui19/brown',
  // },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">My Work / My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <a href={project.link} className="project-card-button">
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 