import React from 'react';
import './App.css';
import { useState } from 'react'; // Add this import at the top of your src/App.js file
/* Add these imports at the top of your src/App.js file */

// Add this import at the top of your src/App.js file
import LandingPage from './LandingPage';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCloudSun,
  faComment,
  faStickyNote,
  faCalculator,
  faClock,
  faImages,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';

import CuteMail from './pages/CuteMail';
import PuppyWeather from './pages/PuppyWeather';




/* Update the apps array in your src/App.js file */

const apps = [
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

/* The rest of your existing code */


function App() {
  const [currentPage, setCurrentPage] = useState(null);

  // Inside your App component, update the navigateToPage function
  // Inside your App component, update the navigateToPage function
  const navigateToPage = (appTitle) => {
    const app = apps.find((app) => app.title === appTitle);
    if (app) {
      setCurrentPage(app.component(navigateToLandingPage));
    }
  };
  
  const navigateToLandingPage = () => {
    setCurrentPage(null);
  };

  // Replace the return statement in your src/App.js file with this code
  return (
    <div className="App">
      <header className="App-header">
        {currentPage ? currentPage : <LandingPage onAppClick={navigateToPage} />}
      </header>
    </div>
);

}


export default App;
