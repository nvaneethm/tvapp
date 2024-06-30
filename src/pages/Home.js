import React, { useState, useEffect } from 'react';
import './Home.css';
import imagesData from '../data/images.json';
import { preloadImages } from '../utils/preloadImages';

const Home = () => {
  const { images, interval } = imagesData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadImages(images).then((loadedImages) => {
      setPreloadedImages(loadedImages);
      setLoading(false); // Set loading to false once images are preloaded
    });
  }, [images]);

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setIsFading(true);

      // Use requestAnimationFrame to wait for the next paint cycle
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

        requestAnimationFrame(() => {
          setIsFading(false);
        });
      }, 500); // Animation duration should match the CSS transition duration
    }, interval);

    return () => clearInterval(imageChangeInterval);
  }, [images.length, interval]);

  return (
    <div className="home-container">
      {loading ? (
        <div className="loader">Loading...</div> // Simple loader
      ) : (
        preloadedImages.length > 0 && (
          <img
            src={preloadedImages[currentImageIndex].src}
            alt={`Slide ${currentImageIndex}`}
            className={`full-screen-image ${isFading ? 'fade-out' : 'fade-in'}`}
          />
        )
      )}
    </div>
  );
};

export default React.memo(Home);