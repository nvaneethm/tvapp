import { useState, useEffect } from 'react';

const usePlaylist = (media) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    let timeout;
    const currentMedia = media[currentMediaIndex];

    if (currentMedia.type === 'image') {
      timeout = setTimeout(() => {
        setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
      }, currentMedia.duration);
    }

    return () => clearTimeout(timeout);
  }, [currentMediaIndex, media]);

  const handleMediaEnd = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  return {
    currentMedia: media[currentMediaIndex],
    handleMediaEnd,
  };
};

export default usePlaylist;