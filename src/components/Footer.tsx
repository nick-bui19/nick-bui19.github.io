import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Nick Bui</h3>
          <p>
            An aspiring Software Developer and Researcher with interests in Machine Learning, Full Stack Development, and Cloud Computing.
          </p>
        </div>
        <div className="footer-links">
          <h4>Important Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li>629-264-3311</li>
            <li>nick.bui@vanderbilt.edu</li>
            <li>Nashville, TN</li>
          </ul>
        </div>
        <div className="footer-socials">
          <h4>Social Links</h4>
          <ul>
            <li><a href="https://github.com/nick-bui19" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/nick-bui19/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/nickbui19/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 - Nick Bui | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer; 