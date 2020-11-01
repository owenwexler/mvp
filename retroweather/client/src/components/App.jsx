import React, { useState, useEffect } from 'react';
import GlobalStyles from '../styles/StyledElements.jsx';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log('N I N T E N D O  V I B E S');
  }, []);

  return (
    <div>
      <GlobalStyles />
      <h1>WELCOME TO THE RETRODOME.</h1>
      <h2>MEOW MEOW MEOW.</h2>
      <h3>MEOW.</h3>
      <p>MEOW.</p>
    </div>
  )
}

export default App;