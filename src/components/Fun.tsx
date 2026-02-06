import React, { useState, useEffect } from 'react';
import './Fun.css';

const flyingImages = [
  { src: '/flying.png', alt: 'Nick flying' },
];

const squashImages = [
  { src: '/squash.png', alt: 'Nick playing squash' },
];

const filmImagesRow1 = [
    { src: '/film-3-horizontal.png', alt: 'Film photograph 3' },
    { src: '/film-4-horizontal.png', alt: 'Film photograph 4' },
    { src: '/film-6-horizontal.png', alt: 'Film photograph 6' },
    { src: '/film-7-horizontal.png', alt: 'Film photograph 7' },
    { src: '/film-1-vertical.png', alt: 'Film photograph 1' },
    { src: '/film-5-vertical.png', alt: 'Film photograph 5' },
    { src: '/film-18-horizontal.png', alt: 'Film photograph 18' },
    { src: '/film-19-horizontal.png', alt: 'Film photograph 19' },
    { src: '/film-20-horizontal.png', alt: 'Film photograph 20' },
    { src: '/film-21-horizontal.png', alt: 'Film photograph 21' },
    { src: '/film-22-horizontal.png', alt: 'Film photograph 22' },
];

const filmImagesRow2 = [
    { src: '/film-9-vertical.png', alt: 'Film photograph 9' },
    { src: '/film-10-vertical.png', alt: 'Film photograph 10' },
    { src: '/film-13-horizontal.png', alt: 'Film photograph 13' },
    { src: '/film-15-vertical.png', alt: 'Film photograph 15' },
    { src: '/film-16-horizontal.png', alt: 'Film photograph 16' },
    { src: '/film-17-horizontal.png', alt: 'Film photograph 17' },
    { src: '/film-23-horizontal.png', alt: 'Film photograph 23' },
    { src: '/film-24-horizontal.png', alt: 'Film photograph 24' },
    { src: '/film-25-horizontal.png', alt: 'Film photograph 25' },
    { src: '/film-26-horizontal.png', alt: 'Film photograph 26' },
    { src: '/film-27-vertical.png', alt: 'Film photograph 27' },
];

// Preload images function
const preloadImages = (imageArray: Array<{src: string; alt: string}>) => {
  imageArray.forEach((imageObj) => {
    const img = new Image();
    img.src = imageObj.src;
  });
};

const Fun: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all images when component mounts
    const allImages = [...flyingImages, ...squashImages, ...filmImagesRow1, ...filmImagesRow2];
    preloadImages(allImages);
    
    // Set a timeout to show images after preloading
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="fun-container" id="fun">
      <h2 className="fun-title">Fun Stuff</h2>

      <div className="fun-description">
        <p>
          I'm currently a student pilot working toward my private pilot certificate. Aviation has become one of my greatest passions, as I love the freedom of flight and the precision it requires. I just love planes and everything aerospace-related! I also play for the Vanderbilt Club Squash team, where I've served as vice-president and captain for 3 years.
        </p>
      </div>

      <div className="two-column-gallery">
        <div className="column-image-wrapper">
          {flyingImages.map((image, index) => (
            <img src={image.src} alt={image.alt} className="fun-image" key={index} />
          ))}
        </div>

        <div className="column-image-wrapper">
          {squashImages.map((image, index) => (
            <img src={image.src} alt={image.alt} className="fun-image" key={index} />
          ))}
        </div>
      </div>

      <div className="fun-description">
        <p>
          Beyond flying and squash, I enjoy playing tennis, long-distance running
          (<a href="https://strava.app.link/XgzF52zrlUb" target="_blank" rel="noopener noreferrer">follow my Strava!!!</a>),
          being outdoors, hiking, working on cars, and chess
          (<a href="https://www.chess.com/member/nickbui1908/stats/rapid?days=30" target="_blank" rel="noopener noreferrer">my Chess.com</a>).
        </p>
        <p>
          I also love taking pictures on my film camera. Check out my film photography below!
        </p>
      </div>

      <div className="scrolling-gallery">
        {!imagesLoaded && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading photography gallery...</p>
          </div>
        )}
        <div className={`scrolling-row row1 ${imagesLoaded ? 'loaded' : 'loading'}`}>
          {filmImagesRow1.concat(filmImagesRow1).map((image, index) => (
            <img 
              src={image.src} 
              alt={image.alt} 
              key={index} 
              className="gallery-image"
              loading="eager"
            />
          ))}
        </div>
        <div className={`scrolling-row row2 ${imagesLoaded ? 'loaded' : 'loading'}`}>
          {filmImagesRow2.concat(filmImagesRow2).map((image, index) => (
            <img 
              src={image.src} 
              alt={image.alt} 
              key={index} 
              className="gallery-image"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fun; 