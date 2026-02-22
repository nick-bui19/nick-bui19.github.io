import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    image: '/sole-survivor-logo.png',
    title: 'Sole Survivor',
    description: 'A multiplayer VR wave-defense game built in Unity where players work together to survive against alien threats on Mars. We implemented full networked multiplayer using Photon PUN2, complete with low-gravity movement mechanics, wave-based enemy spawning, and cooperative gameplay features.',
    tags: ['Unity', 'C#', 'VR', 'Meta Quest', 'Photon PUN2', 'Multiplayer Networking'],
    link: '/blog/sole-survivor#result',
  },
  {
    image: '/math-games.png',
    title: 'Optimal 7 Game',
    description: 'As a math major, math games are my favorite topic. I love creating math games that introduce game theory & problem solving. See if you can solve them!',
    link: 'https://nick-bui19.github.io/optimal-7-game/',
  },
  {
    image: '/traffic-data-project.png',
    title: 'Real-Time Sensor Analytics',
    description: 'A real-time traffic and environmental sensor analytics platform using Kafka, PySpark, and Streamlit.',
    link: 'https://github.com/nick-bui19/real-time-sensor-analytics',
  },
  {
    image: '/mcdonalds.png',
    title: 'McDonald\'s Survey Solver',
    description: 'INACTIVE: A Next.js web application that automates McDonald\'s customer satisfaction surveys using Playwright browser automation. Built with TypeScript, deployed on Vercel and Railway with container-based architecture. Features sophisticated anti-detection measures and dual deployment strategies.',
    link: 'https://mcdonalds-survey-solver.vercel.app',
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">My Work / Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              {project.link.startsWith('/') ? (
                <Link to={project.link} className="project-card-button">
                  See Demo &rarr;
                </Link>
              ) : (
                <a href={project.link} className="project-card-button">
                  See Demo &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 