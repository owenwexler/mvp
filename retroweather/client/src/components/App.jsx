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
import WeatherModule from './WeatherModule.jsx';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [savedLocations, setSavedLocations] = useState([]);

  const getSavedLocations = () => {
    fetch('/api/weather/savedlocations')
      .then(result => result.json())
      .then(data => setSavedLocations(data));
  }

  const postToSavedLocation = (loc) => {
    fetch('/api/weather/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        location: loc
      })
    })
    .then(res => getSavedLocations())
    .catch(err => alert('Error posting to saved locations'));
  }

  const getWeatherDataFromAPI = (location) => {
    if (!hasAValidState(location)) {
      alert('Please enter a valid city and state');
      return;
    }

    const query = convertLocationStringToQuery(location);

    fetch(`/api/weather?location=${query}`)
      .then(result => result.json())
      .then((data) => {
        setWeatherData(data);
        postToSavedLocation(location);
      })
      .catch(err => alert('Unknown location', err));
  }

  useEffect(() => {
    getSavedLocations();
  }, []);

  return (
    <div>
      <GlobalStyles />
      <TopBar>
        <RWLogo>SuperRetroWeather</RWLogo>
        <Search location={location} setLocation={setLocation} getWeatherDataFromAPI={getWeatherDataFromAPI}></Search>
      </TopBar>
      {weatherData !== null ? <WeatherModule weatherData={weatherData} /> : <DefaultMessage />}
    </div>
  )
}

export default App;