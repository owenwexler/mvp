import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const GlobalStyles = createGlobalStyle`
    @import url('../../../font/press_start/PressStart2P-Regular.ttf');

    body {
      font-family: 'Press Start 2P', sans-serif;
    }
  `

  useEffect(() => {
    console.log('N I N T E N D O  V I B E S');
  }, []);

  return (
    <div>
      <GlobalStyles />
      <h1>WELCOME TO THE RETRODOME.  MEOW MEOW MEOW.</h1>
    </div>
  )
}

export default App;