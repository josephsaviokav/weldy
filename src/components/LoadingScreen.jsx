import React from 'react';
import '../css/LoadingScreen.css'; // Import the CSS styles

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
