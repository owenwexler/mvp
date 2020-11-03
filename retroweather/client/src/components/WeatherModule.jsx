import React from 'react';
import {
  GlobalStyles,
  RWLogo
} from '../styles/StyledElements.jsx';

import CurrentConditions from './CurrentConditions.jsx';
import SevenDayList from './SevenDayList.jsx';

const WeatherModule = ( {weatherData} ) => {
  let currentConditions = {};
  // handle the case of no data on currentConditions
  if (Object.entries(weatherData.currentConditions).length === 0) {
    currentConditions = {
      wdir: 0,
      temp: weatherData.values[0].temp,
      sunrise: '',
      visibility: null,
      wspd: weatherData.values[0].wspd,
      icon: "clear-day",
      stations: '',
      heatindex: null,
      cloudcover: null,
      datetime: weatherData.values[0].datetimeStr,
      precip: weatherData.values[0].precip,
      moonphase: 0,
      snowdepth: null,
      sealevelpressure: null,
      dew: 0,
      sunset: '',
      humidity: weatherData.values[0].humidity,
      wgust: weatherData.values[0].wgust,
      windchill: weatherData.values[0].windchill
    }
  } else {
    currentConditions = weatherData.currentConditions;
  }

  return (
    <>
    <GlobalStyles />
    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>{weatherData.name}</h1>
    <CurrentConditions currentConditions={currentConditions} currentIconStr={weatherData.values[0].conditions}/>
    <SevenDayList sevenDayForecast={weatherData.values.slice(0, 7)} />
    </>
  )
}

export default WeatherModule;