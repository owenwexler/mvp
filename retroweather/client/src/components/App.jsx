import React, { useState, useEffect } from 'react';

import {
  GlobalStyles,
  RWLogo
} from '../styles/StyledElements.jsx';

import {
  TopBar
} from '../styles/StyledDivs.jsx';

import DefaultMessage from './DefaultMessage.jsx';
import Search from './Search.jsx';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log('N I N T E N D O  V I B E S');
  }, []);

  return (
    <div>
      <GlobalStyles />
      <TopBar>
        <RWLogo>SUPERRETROWEATHER</RWLogo>
        <Search></Search>
      </TopBar>
      <DefaultMessage />
    </div>
  )
}

export default App;