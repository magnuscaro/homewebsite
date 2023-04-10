// src/LandingPage.js

import React from 'react';
import AppIcon from './AppIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCloudSun, faComment, faStickyNote, faCalculator, faClock, faImages, faMusic } from '@fortawesome/free-solid-svg-icons';

// Add the imports for your app page components in src/LandingPage.js
import CuteMail from './pages/CuteMail';
import PuppyWeather from './pages/PuppyWeather';
// ... import the rest of your app pages


const apps = [
 // Update the Cute Mail entry in the apps array in your src/LandingPage.js file
  {
    title: 'Cute Mail',
    icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
    component: (onBack) => <CuteMail onBack={onBack} />,
  },
  {
    title: 'Puppy Weather',
    icon: <FontAwesomeIcon icon={faCloudSun} size="2x" />,
    component: (onBack) => <PuppyWeather onBack={onBack} />,
  },
  {
    title: 'Kitty Chat',
    icon: <FontAwesomeIcon icon={faComment} size="2x" />,
  },
  {
    title: 'Bunny Notes',
    icon: <FontAwesomeIcon icon={faStickyNote} size="2x" />,
  },
  {
    title: 'Duck Calculator',
    icon: <FontAwesomeIcon icon={faCalculator} size="2x" />,
  },
  {
    title: 'Penguin Clock',
    icon: <FontAwesomeIcon icon={faClock} size="2x" />,
  },
  {
    title: 'Teddy Gallery',
    icon: <FontAwesomeIcon icon={faImages} size="2x" />,
  },
  {
    title: 'Unicorn Music',
    icon: <FontAwesomeIcon icon={faMusic} size="2x" />,
  },
];

const LandingPage = ({ onAppClick }) => {
  const appGrid = apps.map((app, index) => (
    <AppIcon key={index} icon={app.icon} title={app.title} onClick={() => onAppClick(app.title)} />
  ));

  return (
    <div>
      <h1>*Insert Address Here* website</h1>
      <div className="app-grid">
        {appGrid}
      </div>
    </div>
   
  );
};

export default LandingPage;
