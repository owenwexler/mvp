import React, { useState, useEffect } from 'react';

// Styles
import {
  GlobalStyles,
  RWLogo
} from '../styles/StyledElements.jsx';

import {
  TopBar
} from '../styles/StyledDivs.jsx';

// Helpers
import {
  hasAValidState,
  convertLocationStringToQuery
} from '../helper/helper.js';

// Components
import DefaultMessage from './DefaultMessage.jsx';
import Search from './Search.jsx';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const getWeatherDataFromAPI = (location) => {
    if (!hasAValidState(location)) {
      alert('Please enter a valid city and state');
      return;
    }
    const query = convertLocationStringToQuery(location);
    fetch(`/api/weather?location=${query}`)
      .then(result => result.json())
      .then(data => setWeatherData(data))
      .catch(err => alert('ERROR: ', err));
  }

  useEffect(() => {
    console.log('N I N T E N D O  V I B E S');
  }, []);

  return (
    <div>
      <GlobalStyles />
      <TopBar>
        <RWLogo>SuperRetroWeather</RWLogo>
        <Search location={location} setLocation={setLocation} getWeatherDataFromAPI={getWeatherDataFromAPI}></Search>
      </TopBar>
      <DefaultMessage />
    </div>
  )
}

export default App;