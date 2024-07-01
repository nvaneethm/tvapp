import React from 'react';
import './Home.css';
import Playlist from '../components/Playlist';

const Home = () => {
  return (
    <div className="home-container">
      <Playlist />
    </div>
  );
};

export default React.memo(Home);