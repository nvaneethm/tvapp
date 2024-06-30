import { useState, useEffect } from "react";
import { preloadImages } from "../utils/preloadImages";

const useImageSlider = (images, interval) => {
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
      }, 200); // Animation duration should match the CSS transition duration
    }, interval);

    return () => clearInterval(imageChangeInterval);
  }, [images.length, interval]);

  return { currentImageIndex, isFading, preloadedImages, loading };
};

export default useImageSlider;