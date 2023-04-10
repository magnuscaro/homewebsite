// src/pages/PuppyWeather.js

import React from 'react';
import '../ButtonStyles.css'; // Import the ButtonStyles.css file

const PuppyWeather = ({ onBack }) => {
  return (
    <div>
      <h2>Welcome to Puppy Weather!</h2>
      <p>This is a dummy page for Puppy Weather.</p>
      <button className="myButton" onClick={onBack}>
        Back to Landing Page
      </button>
    </div>
  );
};

export default PuppyWeather;
