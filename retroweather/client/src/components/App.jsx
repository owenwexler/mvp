import React, { useState, useEffect } from 'react';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log('N I N T E N D O  V I B E S');
  }, []);

  return (
    <h1>WELCOME TO THE RETRODOME.  MEOW MEOW MEOW.</h1>
  )
}

export default App;