import React from 'react';
import MediaPlayer from './MediaPlayer';
import mediaData from '../data/media.json';
import usePlaylist from '../hooks/usePlaylist.js';

const Playlist = () => {
  const { media } = mediaData;
  const { currentMedia, handleMediaEnd } = usePlaylist(media);

  return (
    <div className="playlist-container">
      <MediaPlayer media={currentMedia} onEnded={handleMediaEnd} />
    </div>
  );
};

export default Playlist;