import React from 'react';

// Container

import { CurrentConditionContainer } from '../styles/StyledDivs.jsx';
import { CurrentConditionDateWeatherLogo } from '../styles/StyledElements.jsx';

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
    </>
  )
}

export default CurrentConditions;