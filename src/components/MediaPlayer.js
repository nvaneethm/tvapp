import React, { useRef, useEffect } from 'react';
import shaka from 'shaka-player';

const MediaPlayer = ({ media, onEnded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (media.type === 'video') {
      const player = new shaka.Player(videoRef.current);

      player.load(media.src).then(() => {
        console.log('The video has now been loaded!');
      }).catch((error) => {
        console.error('Error loading video:', error);
      });

      videoRef.current.onended = () => {
        onEnded();
      };

      return () => {
        player.destroy();
      };
    }
  }, [media, onEnded]);

  if (media.type === 'image') {
    return (
      <div className="image-container">
        <img src={media.src} alt="Media content" className="full-screen-media" />
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className="full-screen-media"
      autoPlay
      controls
    />
  );
};

export default MediaPlayer;