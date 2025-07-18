import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';
import Resume from './Resume';
import Fun from './Fun';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Resume />
      <Fun />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;