import React from 'react';
import {
  GlobalStyles,
  RWLogo
} from '../styles/StyledElements.jsx';

const WeatherModule = ( {weatherData} ) => (
  <>
  <GlobalStyles />
  <h2 style={{textAlign: 'center'}}>{weatherData.name}</h2>
  </>
)

export default WeatherModule;