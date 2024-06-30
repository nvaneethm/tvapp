import React from "react";
import "./Home.css";
import imagesData from "../data/images.json";
import useImageSlider from "../hooks/useImageSlider.js";

const Home = () => {
  const { images, interval } = imagesData;
  const { currentImageIndex, isFading, preloadedImages, loading } = useImageSlider(images, interval);

  return (
    <div className="home-container">
      {loading ? (
        <div className="loader">Loading...</div> // Simple loader
      ) : (
        preloadedImages.length > 0 && (
          <img
            src={isFading ? "" : preloadedImages[currentImageIndex].src}
            alt={`Slide ${currentImageIndex}`}
            className={`full-screen-image ${isFading ? "fade-out" : "fade-in"}`}
          />
        )
      )}
    </div>
  );
};

export default React.memo(Home);