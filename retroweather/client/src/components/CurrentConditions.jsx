import React from 'react';

// Container

import { CurrentConditionContainer } from '../styles/StyledDivs.jsx';
import {
  CurrentConditionDateWeatherLogo, CurrentConditionSubHeaderH4
} from '../styles/StyledElements.jsx';

// Helpers
import {
  formatDateMMDDYY,
  getPicNameFromCondition
 } from '../helper/helper.js';

const CurrentConditions = ({currentConditions, currentDateTime, currentIconStr}) => {
  return (
    <>
      <h2 style={{textAlign: 'center', marginBottom: '5px'}}>CURRENT CONDITIONS</h2>
      <CurrentConditionContainer>
        <img src={`https://retroweather.s3.amazonaws.com/${getPicNameFromCondition(currentIconStr)}`} height="200" width="200"></img>
        <CurrentConditionDateWeatherLogo>{formatDateMMDDYY(currentConditions.datetime)}</CurrentConditionDateWeatherLogo>
        <CurrentConditionDateWeatherLogo>{Math.round(currentConditions.temp)}º</CurrentConditionDateWeatherLogo>
      </CurrentConditionContainer>
      <CurrentConditionContainer>
        <CurrentConditionSubHeaderH4>WIND SPEED: {Math.round(currentConditions.wspd)}</CurrentConditionSubHeaderH4>
        <CurrentConditionSubHeaderH4>WIND GUST: {Math.round(currentConditions.wgust)}</CurrentConditionSubHeaderH4>
        <CurrentConditionSubHeaderH4>VISIBILITY: {Math.round(currentConditions.visibility)}
        </CurrentConditionSubHeaderH4>
        <CurrentConditionSubHeaderH4>CLOUD COVER: {Math.round(currentConditions.cloudcover)}</CurrentConditionSubHeaderH4>
      </CurrentConditionContainer>
      <CurrentConditionContainer>
        <CurrentConditionSubHeaderH4>HUMIDITY: {Math.round(currentConditions.humidity)}</CurrentConditionSubHeaderH4>
        <CurrentConditionSubHeaderH4>PRECIP: {Math.round(currentConditions.precip)}</CurrentConditionSubHeaderH4>
        <CurrentConditionSubHeaderH4>SNOW: {Math.round(currentConditions.snow)}</CurrentConditionSubHeaderH4>
        <CurrentConditionSubHeaderH4>SNOW DEPTH: {Math.round(currentConditions.snowdepth)}</CurrentConditionSubHeaderH4>
      </CurrentConditionContainer>
      <br/>
      <br/>
    </>
  )
}

export default CurrentConditions;