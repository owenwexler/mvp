import React from 'react';
import {
  GlobalStyles,
  RWLogo
} from '../styles/StyledElements.jsx';

import CurrentConditions from './CurrentConditions.jsx';

const WeatherModule = ( {weatherData} ) => (
  <>
  <GlobalStyles />
  <h2 style={{textAlign: 'center'}}>{weatherData.name}</h2>
  <CurrentConditions currentConditions={weatherData.currentConditions} />
  </>
)

export default WeatherModule;