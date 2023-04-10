// src/pages/CuteMail.js

import React from 'react';
import '../ButtonStyles.css'; // Import the ButtonStyles.css file

const CuteMail = ({ onBack }) => {
  return (
    <div>
      <h2>Welcome to Cute Mail!</h2>
      <p>This is a dummy page for Cute Mail.</p>
      <button className="myButton" onClick={onBack}>
        Back to Landing Page
      </button>
    </div>
  );
};

export default CuteMail;
