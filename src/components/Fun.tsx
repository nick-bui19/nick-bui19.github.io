import React from 'react';
import './Fun.css';

const funImages = [
  {
    src: 'https://via.placeholder.com/400x300.png/242424/fff?text=Squash+Photo',
    alt: 'Nick playing squash',
  },
  {
    src: 'https://via.placeholder.com/400x300.png/242424/fff?text=Film+Shot+1',
    alt: 'Film photograph 1',
  },
  {
    src: 'https://via.placeholder.com/400x300.png/242424/fff?text=Film+Shot+2',
    alt: 'Film photograph 2',
  },
  {
    src: 'https://via.placeholder.com/400x300.png/242424/fff?text=Film+Shot+3',
    alt: 'Film photograph 3',
  },
];

const Fun: React.FC = () => {
  return (
    <section className="fun-container" id="fun">
      <h2 className="fun-title">Fun Stuff</h2>
      <div className="fun-grid">
        {funImages.map((image, index) => (
          <div className="fun-image-wrapper" key={index}>
            <img src={image.src} alt={image.alt} className="fun-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fun; 