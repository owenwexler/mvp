import React, { useState, useEffect } from 'react';
import GlobalStyles from '../styles/StyledElements.jsx';
import DefaultMessage from './DefaultMessage.jsx';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log('N I N T E N D O  V I B E S');
  }, []);

  return (
    <div>
      <GlobalStyles />
      <DefaultMessage />
    </div>
  )
}

export default App;