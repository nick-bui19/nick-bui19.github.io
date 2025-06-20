import React from 'react';
import './Hero.css';
import profilePic from '/my-pfp.jpg';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-card">
        <div className="hero-image-container">
          <img src={profilePic} alt="Nick Bui" className="hero-image" />
        </div>
        <div className="hero-text-container">
          <h1>Hey, I'm Nick Bui</h1>
          <p>
            I'm a B.Sc. in Computer Science student at Vanderbilt University. I'm an aspiring Software Developer and Researcher with
            interests in Machine Learning, Full Stack Development, and Cloud Computing. Here you can explore
            my work and get to know more about me.
          </p>
          <a href="#projects" className="hero-button">
            Check out my projects &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero; 