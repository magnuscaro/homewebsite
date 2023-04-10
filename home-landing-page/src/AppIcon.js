// src/AppIcon.js

import React from 'react';

const AppIcon = ({ icon, title, onClick }) => {
  return (
    <div className="app-icon" onClick={onClick}>
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default AppIcon;
