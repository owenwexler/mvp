import React from 'react';
import {
  GlobalStyles,
  RWLogo
} from '../styles/StyledElements.jsx';

import CurrentConditions from './CurrentConditions.jsx';
import SevenDayList from './SevenDayList.jsx';

const WeatherModule = ( {weatherData} ) => (
  <>
  <GlobalStyles />
  <h2 style={{textAlign: 'center', marginBottom: '50px'}}>{weatherData.name}</h2>
  <CurrentConditions currentConditions={weatherData.currentConditions} currentIconStr={weatherData.values[0].conditions}/>
  <SevenDayList sevenDayForecast={weatherData.values} />
  </>
)

export default WeatherModule;