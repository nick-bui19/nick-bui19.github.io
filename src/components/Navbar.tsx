import React, { useState } from 'react';
import './Navbar.css';
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Nick Bui's Portfolio
        </a>
        <div className="navbar-links">
          <a href="#about" className="navbar-link">About</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#blog" className="navbar-link">Blog</a>
          <a href="#resume" className="navbar-link">Resume</a>
          <a href="#fun" className="navbar-link">Fun</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>
        <div className="navbar-socials">
          <a href="https://www.linkedin.com/in/nick-bui19/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nick-bui19" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/nickbui19/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
        </div>
        <div className="navbar-hamburger" onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <a href="#about" className="navbar-link" onClick={handleLinkClick}>About</a>
          <a href="#skills" className="navbar-link" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" className="navbar-link" onClick={handleLinkClick}>Projects</a>
          <a href="#blog" className="navbar-link" onClick={handleLinkClick}>Blog</a>
          <a href="#resume" className="navbar-link" onClick={handleLinkClick}>Resume</a>
          <a href="#fun" className="navbar-link" onClick={handleLinkClick}>Fun</a>
          <a href="#contact" className="navbar-link" onClick={handleLinkClick}>Contact</a>
          <div className="navbar-socials">
            <a href="https://www.linkedin.com/in/nick-bui19/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com/nick-bui19" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/nickbui19/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 